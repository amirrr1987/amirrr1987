<template>
  <div
    class="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary/20"
    aria-hidden="true"
  >
    <div
      ref="bar"
      class="h-full w-full origin-left scale-x-0 bg-linear-to-r from-primary via-emerald-300 to-teal-400 shadow-[0_0_12px_rgba(66,184,131,0.8)]"
    />
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const bar = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!bar.value || import.meta.server) return

  gsap.to(bar.value, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.25
    }
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((t) => {
    if (t.vars.trigger === document.body) t.kill()
  })
})
</script>
