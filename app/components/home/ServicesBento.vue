<template>
  <section class="relative z-10 px-4 pb-12 sm:px-6 sm:pb-16 lg:px-10">
    <UContainer>
      <p class="page-eyebrow mb-3" data-reveal>What I do</p>
      <h2 class="display-section mb-8 text-highlighted" data-reveal>
        Build · Ship · Polish
      </h2>

      <div class="grid gap-4 sm:grid-cols-3" data-reveal>
        <UiGlassPanel
          v-for="item in services"
          :key="item.title"
          padding="md"
          class="transition-colors duration-300 hover:border-primary/35"
        >
          <div
            class="mb-4 flex size-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10"
          >
            <UIcon :name="item.icon" class="size-6 text-primary" />
          </div>
          <h3 class="font-mono text-lg font-bold text-highlighted">{{ item.title }}</h3>
          <p class="mt-2 text-sm leading-7 text-muted">{{ item.text }}</p>
        </UiGlassPanel>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: "Vue / Nuxt Apps",
    icon: "i-simple-icons-nuxtdotjs",
    text: "SSR, Pinia, design systems, and production-grade architecture for fast teams.",
  },
  {
    title: "UI Engineering",
    icon: "i-heroicons-sparkles",
    text: "Motion, glass UI, accessibility, and pixel-perfect implementation from Figma.",
  },
  {
    title: "Performance",
    icon: "i-heroicons-bolt",
    text: "Core Web Vitals, bundle strategy, and smooth 60fps interactions users feel.",
  },
];

useGsapScrollReveal({ stagger: 0.1 });
</script>
