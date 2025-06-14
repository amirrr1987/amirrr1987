<template>
  <section id="skills" class="relative z-10 min-h-screen flex flex-col justify-center">
    <UContainer :ui="{ padding: 'py-12 px-4 sm:px-6 lg:px-10' }">
      <!-- Header -->
      <div class="text-center animate-fade-in">
        <h1 class="text-4xl sm:text-5xl font-bold text-primary mb-4">Technical Skills</h1>
        <p class="text-gray-300 text-lg sm:text-xl max-w-md mx-auto">
          A snapshot of the technologies, frameworks, and tools I work with.
        </p>
      </div>

      <!-- Skill Grid -->
      <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <UBadge
          v-for="(skill, index) in cvStore.allSkills"
          :key="index"
          :label="skill"
          color="primary"
          variant="soft"
          size="lg"
          class="flex items-center justify-center h-12 transition-transform duration-300 hover:scale-105 animate-fade-in-up"
        >
          {{ skill }}
        </UBadge>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
  import gsap from 'gsap'
  import { onMounted } from 'vue'
  import { useCvStore } from '~/stores/cv.store'

  const cvStore = useCvStore()

  // GSAP Animations
  onMounted(() => {
    gsap.from('.animate-fade-in', {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out'
    })

    gsap.from('.animate-fade-in-up', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.1,
      stagger: 0.1,
      ease: 'power3.out'
    })
  })
</script>

<style scoped>
  .animate-fade-in {
    opacity: 1;
  }

  .animate-fade-in-up {
    opacity: 1;
  }
</style>
