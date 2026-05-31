<template>
  <canvas ref="canvas" class="fixed inset-0 -z-10 h-dvh w-full" />
</template>
<script setup lang="ts">
import * as THREE from "three";
import { onMounted, onUnmounted, ref } from "vue";

const canvas = ref<HTMLCanvasElement | null>(null);

let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let particles: THREE.Points;
let animationFrameId: number;

onMounted(() => {
  if (canvas.value) {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    // Renderer
    renderer = new THREE.WebGLRenderer({
      canvas: canvas.value,
      alpha: true,
      powerPreference: "low-power",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const particleGeometry = new THREE.BufferGeometry();
    const count = window.innerWidth < 768 ? 1800 : 4200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: "#888888",
    });
    particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation loop
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      particles.rotation.y = prefersReducedMotion ? 0 : elapsedTime * 0.1;

      renderer.render(scene, camera);
      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };
    animate();

    // Handle window resize
    window.addEventListener("resize", onWindowResize);
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", onWindowResize);
  if (animationFrameId) {
    window.cancelAnimationFrame(animationFrameId);
  }
  if (renderer) {
    renderer.dispose();
  }
});

function onWindowResize() {
  if (!camera || !renderer) {
    return;
  }

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}
</script>
