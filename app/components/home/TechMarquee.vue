<template>
  <section
    class="relative z-10 py-10 sm:py-12"
    aria-label="Tech stack"
  >
    <div class="marquee-mask overflow-hidden">
      <div class="marquee-track">
        <div
          v-for="pass in 2"
          :key="pass"
          class="marquee-group"
        >
          <span
            v-for="tech in stack"
            :key="`${pass}-${tech.label}`"
            class="marquee-item"
          >
            <UIcon
              :name="tech.icon"
              class="size-6 text-primary"
            />
            <span class="font-mono text-sm font-semibold">{{ tech.label }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stack = [
  { label: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
  { label: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs' },
  { label: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { label: 'Pinia', icon: 'i-simple-icons-pinia' },
  { label: 'Tailwind', icon: 'i-simple-icons-tailwindcss' },
  { label: 'Three.js', icon: 'i-simple-icons-threedotjs' },
  { label: 'GSAP', icon: 'i-heroicons-bolt' },
  { label: 'Vite', icon: 'i-simple-icons-vite' },
  { label: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  { label: 'Git', icon: 'i-simple-icons-git' }
]
</script>

<style scoped>
.marquee-mask {
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 32s linear infinite;
}

.marquee-group {
  display: flex;
  gap: 1rem;
  padding-right: 1rem;
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.65rem 1.25rem;
  border-radius: 9999px;
  border: 1px solid rgb(66 184 131 / 0.25);
  background: rgb(15 23 42 / 0.55);
  backdrop-filter: blur(12px);
  white-space: nowrap;
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
