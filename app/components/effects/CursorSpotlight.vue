<template>
  <div
    class="pointer-events-none fixed inset-0 z-[5] hidden md:block"
    aria-hidden="true"
  >
    <div
      ref="spot"
      class="spotlight size-[28rem] rounded-full opacity-0 transition-opacity duration-500"
    />
  </div>
</template>

<script setup lang="ts">
const spot = ref<HTMLElement | null>(null)
let moveHandler: ((e: MouseEvent) => void) | null = null

onMounted(() => {
  if (!spot.value || import.meta.server) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return

  let visible = false
  moveHandler = (e: MouseEvent) => {
    if (!spot.value) return
    if (!visible) {
      spot.value.style.opacity = '1'
      visible = true
    }
    spot.value.style.transform = `translate(${e.clientX - 224}px, ${e.clientY - 224}px)`
  }

  window.addEventListener('mousemove', moveHandler, { passive: true })
})

onUnmounted(() => {
  if (moveHandler) {
    window.removeEventListener('mousemove', moveHandler)
  }
})
</script>

<style scoped>
.spotlight {
  background: radial-gradient(
    circle,
    rgb(66 184 131 / 0.14) 0%,
    rgb(66 184 131 / 0.04) 35%,
    transparent 70%
  );
  will-change: transform;
}
</style>
