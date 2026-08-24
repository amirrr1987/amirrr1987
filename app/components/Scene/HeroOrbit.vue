<template>
  <canvas
    ref="canvas"
    class="pointer-events-none absolute inset-0 size-full"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import jsModelUrl from "~/assets/js.glb?url";
import nestModelUrl from "~/assets/nest.glb?url";
import nuxtModelUrl from "~/assets/nuxt.glb?url";
import tsModelUrl from "~/assets/ts.glb?url";
import vueModelUrl from "~/assets/vue.glb?url";

const canvas = ref<HTMLCanvasElement | null>(null);

type PlanetSpec = {
  label: string;
  color: string;
  size: number;
  /** Horizontal orbit radius (around hero text) */
  orbitX: number;
  /** Vertical orbit radius — flatter ellipse so text stays clear */
  orbitY: number;
  /** Depth amplitude for 3D solar feel */
  orbitZ: number;
  speed: number;
  phase: number;
  spin: number;
  model: string;
};

/** Concentric orbits around (0,0) — hero text is the sun, no mesh in center */
const planets: PlanetSpec[] = [
  {
    label: "Vue",
    color: "#42b883",
    size: 0.14,
    orbitX: 2.35,
    orbitY: 1.45,
    orbitZ: 0.55,
    speed: 0.38,
    phase: 0,
    spin: 0.9,
    model: vueModelUrl,
  },
  {
    label: "Nuxt",
    color: "#00dc82",
    size: 0.155,
    orbitX: 2.7,
    orbitY: 1.65,
    orbitZ: 0.65,
    speed: 0.3,
    phase: 1.25,
    spin: 0.8,
    model: nuxtModelUrl,
  },
  {
    label: "Nest",
    color: "#e0234e",
    size: 0.17,
    orbitX: 3.05,
    orbitY: 1.85,
    orbitZ: 0.75,
    speed: 0.24,
    phase: 2.5,
    spin: 0.7,
    model: nestModelUrl,
  },
  {
    label: "TS",
    color: "#3178c6",
    size: 0.185,
    orbitX: 3.4,
    orbitY: 2.05,
    orbitZ: 0.85,
    speed: 0.19,
    phase: 3.8,
    spin: 0.65,
    model: tsModelUrl,
  },
  {
    label: "JS",
    color: "#f7df1e",
    size: 0.2,
    orbitX: 3.75,
    orbitY: 2.25,
    orbitZ: 0.95,
    speed: 0.15,
    phase: 5.1,
    spin: 0.6,
    model: jsModelUrl,
  },
];

let frameId = 0;
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let timer: InstanceType<typeof THREE.Timer>;
let resizeObserver: ResizeObserver | null = null;
const planetGroups: THREE.Group[] = [];
const disposableResources: Array<THREE.BufferGeometry | THREE.Material | THREE.Texture> = [];
const loader = new GLTFLoader();

function fitModelToRadius(root: THREE.Object3D, radius: number) {
  const box = new THREE.Box3().setFromObject(root);
  root.position.sub(box.getCenter(new THREE.Vector3()));

  box.setFromObject(root);
  const dims = box.getSize(new THREE.Vector3());
  const maxDim = Math.max(dims.x, dims.y, dims.z) || 1;
  root.scale.setScalar((radius * 2) / maxDim);

  box.setFromObject(root);
  root.position.sub(box.getCenter(new THREE.Vector3()));
}

function trackObjectResources(object: THREE.Object3D) {
  object.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return;
    if (child.geometry) disposableResources.push(child.geometry);
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    for (const material of materials) {
      if (material) disposableResources.push(material);
    }
  });
}

function createSphere(spec: PlanetSpec) {
  const geometry = new THREE.SphereGeometry(spec.size, 24, 24);
  const material = new THREE.MeshStandardMaterial({
    color: spec.color,
    emissive: new THREE.Color(spec.color),
    emissiveIntensity: 0.55,
    metalness: 0.35,
    roughness: 0.45,
  });
  disposableResources.push(geometry, material);
  return new THREE.Mesh(geometry, material);
}

async function createPlanetBody(spec: PlanetSpec) {
  try {
    const gltf = await loader.loadAsync(spec.model);
    const model = gltf.scene;
    fitModelToRadius(model, spec.size);
    trackObjectResources(model);
    return model;
  } catch {
    return createSphere(spec);
  }
}

function setSize(width: number, height: number) {
  if (!camera || !renderer) return;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

onMounted(async () => {
  if (!canvas.value || import.meta.server) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const parent = canvas.value.parentElement;
  if (!parent) return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.15, 7.2);
  camera.lookAt(0, 0, 0);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });

  const { clientWidth, clientHeight } = parent;
  setSize(clientWidth, clientHeight);

  const bodies = await Promise.all(planets.map((spec) => createPlanetBody(spec)));

  planets.forEach((spec, index) => {
    const group = new THREE.Group();
    group.userData = spec;
    group.add(bodies[index]!);
    planetGroups.push(group);
    scene.add(group);
  });

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const key = new THREE.DirectionalLight(0xffffff, 1);
  key.position.set(3, 4, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x42b883, 0.25);
  fill.position.set(-3, -1, 2);
  scene.add(fill);

  timer = new THREE.Timer();

  const placePlanets = (elapsed: number) => {
    for (const group of planetGroups) {
      const spec = group.userData as PlanetSpec;
      const angle = spec.phase + elapsed * spec.speed;

      // Elliptical solar orbit around hero text (0,0) — no center mesh
      const x = Math.cos(angle) * spec.orbitX;
      const y = Math.sin(angle) * spec.orbitY;
      const z = Math.sin(angle) * spec.orbitZ;

      group.position.set(x, y, z);

      // Perspective scale: closer to camera (higher z) feels larger
      const depthScale = 1 + z * 0.12;
      group.scale.setScalar(depthScale);

      const body = group.children[0];
      if (body) {
        body.rotation.y = elapsed * spec.spin;
        body.rotation.x = Math.sin(elapsed * 0.35 + spec.phase) * 0.15;
      }
    }
  };

  if (reduced) {
    placePlanets(0);
    renderer.render(scene, camera);
  } else {
    const tick = (timestamp?: number) => {
      timer.update(timestamp);
      placePlanets(timer.getElapsed());
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
