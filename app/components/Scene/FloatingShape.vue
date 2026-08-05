<template>
  <canvas
    ref="canvas"
    class="pointer-events-none fixed bottom-8 right-4 z-0 size-28 opacity-40 sm:size-36 sm:opacity-50"
    aria-hidden="true"
  />
</template>

<script setup lang="ts">
import * as THREE from 'three'

const canvas = ref<HTMLCanvasElement | null>(null)
let frameId = 0
let renderer: THREE.WebGLRenderer
let mesh: THREE.Mesh
let timer: InstanceType<typeof THREE.Timer>

onMounted(() => {
  if (!canvas.value || import.meta.server) return

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const size = 160

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true
  })
  renderer.setSize(size, size)
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2))

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  camera.position.z = 4

  const geometry = new THREE.IcosahedronGeometry(1.1, 1)
  const material = new THREE.MeshStandardMaterial({
    color: '#42b883',
    metalness: 0.65,
    roughness: 0.25,
    wireframe: true
  })
  mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  const light = new THREE.DirectionalLight(0xffffff, 1.2)
  light.position.set(2, 3, 4)
  scene.add(light)
  scene.add(new THREE.AmbientLight(0x42b883, 0.35))

  timer = new THREE.Timer()

  const tick = (timestamp?: number) => {
    timer.update(timestamp)
    if (!reduced) {
      const t = timer.getElapsed()
      mesh.rotation.x = t * 0.35
      mesh.rotation.y = t * 0.55
    }
    renderer.render(scene, camera)
    if (!reduced) frameId = requestAnimationFrame(tick)
  }
  frameId = requestAnimationFrame(tick)
})

onUnmounted(() => {
  cancelAnimationFrame(frameId)
  renderer?.dispose()
})
</script>
