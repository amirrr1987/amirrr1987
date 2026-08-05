<template>
  <section
    class="relative z-10 border-t border-white/5 py-12"
    aria-label="Tech stack"
  >
    <UContainer>
      <p
        class="label-mono mb-4 text-center"
        data-reveal
      >
        Stack I ship with
      </p>
      <ul
        class="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        data-reveal
      >
        <li
          v-for="tech in stack"
          :key="tech.label"
          class="tech-chip"
        >
          <UIcon
            :name="tech.icon"
            class="size-4 text-primary"
          />
          <span>{{ tech.label }}</span>
        </li>
      </ul>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const stack = [
  { label: 'Vue', icon: 'i-simple-icons-vuedotjs' },
  { label: 'Nuxt', icon: 'i-simple-icons-nuxtdotjs' },
  { label: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { label: 'Pinia', icon: 'i-simple-icons-pinia' },
  { label: 'Tailwind', icon: 'i-simple-icons-tailwindcss' },
  { label: 'Three.js', icon: 'i-simple-icons-threedotjs' },
  { label: 'GSAP', icon: 'i-heroicons-bolt' },
  { label: 'Vite', icon: 'i-simple-icons-vite' }
]

useGsapScrollReveal({ stagger: 0.04 })
</script>
