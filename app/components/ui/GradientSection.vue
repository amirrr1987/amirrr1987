<template>
  <section
    ref="sectionRef"
    class="gradient-section relative"
    :class="props.class"
  >
    <div class="relative z-10">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ class?: string }>();
const sectionRef = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (!import.meta.client || !sectionRef.value) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  const { default: gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(sectionRef.value, {
    opacity: 0.85,
    y: 32,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 92%",
      once: true,
    },
  });
});
</script>
