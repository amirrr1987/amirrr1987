<template>
  <div
    class="pointer-events-none fixed inset-0 z-[100] hidden lg:block"
    aria-hidden="true"
  >
    <div
      ref="dot"
      class="cursor-dot"
    />
    <div
      ref="ring"
      class="cursor-ring"
    />
  </div>
</template>

<script setup lang="ts">
const dot = ref<HTMLElement | null>(null)
const ring = ref<HTMLElement | null>(null)

let rafId = 0
let removeMove: (() => void) | null = null

onMounted(() => {
  if (!dot.value || !ring.value || import.meta.server) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return
  document.body.classList.add('custom-cursor-active')

  let mx = 0
  let my = 0
  let rx = 0
  let ry = 0

  const move = (e: MouseEvent) => {
    mx = e.clientX
    my = e.clientY
  }

  const loop = () => {
    rx += (mx - rx) * 0.18
    ry += (my - ry) * 0.18
    if (dot.value) {
      dot.value.style.transform = `translate(${mx - 4}px, ${my - 4}px)`
    }
    if (ring.value) {
      ring.value.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
    }
    rafId = requestAnimationFrame(loop)
  }

  window.addEventListener('mousemove', move, { passive: true })
  rafId = requestAnimationFrame(loop)
  removeMove = () => window.removeEventListener('mousemove', move)
})

onUnmounted(() => {
  document.body.classList.remove('custom-cursor-active')
  removeMove?.()
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: rgb(66 184 131);
  box-shadow: 0 0 16px rgb(66 184 131 / 0.9);
  will-change: transform;
}

.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  border: 1px solid rgb(66 184 131 / 0.55);
  will-change: transform;
  transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease;
}
</style>
