<template>
  <canvas
    ref="canvas"
    class="pointer-events-none absolute inset-0 size-full"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import * as THREE from "three";

const canvas = ref<HTMLCanvasElement | null>(null);

type PlanetSpec = {
  label: string;
  color: string;
  textColor: string;
  size: number;
  orbit: number;
  speed: number;
  tilt: number;
  phase: number;
};

const planets: PlanetSpec[] = [
  { label: "Vue", color: "#42b883", textColor: "#ffffff", size: 0.1, orbit: 2.4, speed: 0.4, tilt: 0.14, phase: 0 },
  { label: "Nuxt", color: "#00dc82", textColor: "#ffffff", size: 0.09, orbit: 2.4, speed: 0.52, tilt: 0.14, phase: 2.5 },
  { label: "Nest", color: "#e0234e", textColor: "#ffffff", size: 0.085, orbit: 2.4, speed: 0.46, tilt: 0.14, phase: 4.8 },
  { label: "TS", color: "#3178c6", textColor: "#ffffff", size: 0.095, orbit: 3.0, speed: 0.3, tilt: -0.16, phase: 1.0 },
  { label: "JS", color: "#f7df1e", textColor: "#1a1a1a", size: 0.09, orbit: 3.0, speed: 0.36, tilt: -0.16, phase: 3.8 },
];

let frameId = 0;
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let timer: InstanceType<typeof THREE.Timer>;
let resizeObserver: ResizeObserver | null = null;
const planetGroups: THREE.Group[] = [];
const disposableResources: Array<THREE.BufferGeometry | THREE.Material | THREE.Texture> = [];

function createLabelSprite(spec: PlanetSpec) {
  const dpr = Math.min(window.devicePixelRatio, 2);
  const canvasEl = document.createElement("canvas");
  const ctx = canvasEl.getContext("2d");
  if (!ctx) return null;

  const fontSize = 22;
  ctx.font = `600 ${fontSize}px "B612 Mono", ui-monospace, monospace`;
  const textWidth = ctx.measureText(spec.label).width;
  const padX = 14;
  const padY = 8;
  const w = Math.ceil(textWidth + padX * 2);
  const h = fontSize + padY * 2;

  canvasEl.width = w * dpr;
  canvasEl.height = h * dpr;
  ctx.scale(dpr, dpr);

  ctx.font = `600 ${fontSize}px "B612 Mono", ui-monospace, monospace`;
  ctx.fillStyle = "rgba(2, 6, 23, 0.72)";
  ctx.beginPath();
  ctx.roundRect(0, 0, w, h, h / 2);
  ctx.fill();

  ctx.strokeStyle = `${spec.color}99`;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = spec.textColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(spec.label, w / 2, h / 2 + 1);

  const texture = new THREE.CanvasTexture(canvasEl);
  texture.minFilter = THREE.LinearFilter;
  disposableResources.push(texture);

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
  });
  disposableResources.push(material);

  const sprite = new THREE.Sprite(material);
  const scale = 0.55;
  sprite.scale.set((w / h) * scale, scale, 1);
  sprite.position.y = spec.size + 0.22;
  sprite.renderOrder = 1;

  return sprite;
}

function setSize(width: number, height: number) {
  if (!camera || !renderer) return;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

onMounted(() => {
  if (!canvas.value || import.meta.server) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const parent = canvas.value.parentElement;
  if (!parent) return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.35, 6.2);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });

  const { clientWidth, clientHeight } = parent;
  setSize(clientWidth, clientHeight);

  const coreGeometry = new THREE.SphereGeometry(0.14, 32, 32);
  const coreMaterial = new THREE.MeshBasicMaterial({
    color: "#42b883",
    transparent: true,
    opacity: 0.35,
  });
  disposableResources.push(coreGeometry, coreMaterial);
  const core = new THREE.Mesh(coreGeometry, coreMaterial);
  scene.add(core);

  const glowGeometry = new THREE.SphereGeometry(0.22, 32, 32);
  const glowMaterial = new THREE.MeshBasicMaterial({
    color: "#42b883",
    transparent: true,
    opacity: 0.08,
  });
  disposableResources.push(glowGeometry, glowMaterial);
  const coreGlow = new THREE.Mesh(glowGeometry, glowMaterial);
  scene.add(coreGlow);

  for (const spec of planets) {
    const group = new THREE.Group();
    group.userData = spec;

    const geometry = new THREE.SphereGeometry(spec.size, 24, 24);
    const material = new THREE.MeshStandardMaterial({
      color: spec.color,
      emissive: new THREE.Color(spec.color),
      emissiveIntensity: 0.55,
      metalness: 0.35,
      roughness: 0.45,
    });
    disposableResources.push(geometry, material);

    const mesh = new THREE.Mesh(geometry, material);
    group.add(mesh);

    const label = createLabelSprite(spec);
    if (label) group.add(label);

    planetGroups.push(group);
    scene.add(group);
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.45));
  const key = new THREE.DirectionalLight(0xffffff, 0.9);
  key.position.set(2, 3, 4);
  scene.add(key);

  timer = new THREE.Timer();

  const placePlanets = (elapsed: number) => {
    for (const group of planetGroups) {
      const spec = group.userData as PlanetSpec;
      const angle = spec.phase + elapsed * spec.speed;
      const x = Math.cos(angle) * spec.orbit;
      const z = Math.sin(angle) * spec.orbit;
      const y = Math.sin(angle * 1.6 + spec.phase) * spec.tilt;
      group.position.set(x, y, z);
    }
  };

  if (reduced) {
    placePlanets(0);
    renderer.render(scene, camera);
  } else {
    const tick = (timestamp?: number) => {
      timer.update(timestamp);
      const elapsed = timer.getElapsed();

      placePlanets(elapsed);
      core.rotation.y = elapsed * 0.15;
      coreGlow.scale.setScalar(1 + Math.sin(elapsed * 1.2) * 0.06);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
  }

  resizeObserver = new ResizeObserver((entries) => {
    const entry = entries[0];
    if (!entry) return;
    setSize(entry.contentRect.width, entry.contentRect.height);
  });
  resizeObserver.observe(parent);
});

onUnmounted(() => {
  cancelAnimationFrame(frameId);
  resizeObserver?.disconnect();
  for (const resource of disposableResources) {
    resource.dispose();
  }
  renderer?.dispose();
});
</script>
