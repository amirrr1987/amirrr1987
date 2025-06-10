<template>
  <section id="projects" class="relative z-10 flex flex-col justify-center">
    <!-- Header -->
    <UContainer :ui="{ padding: 'py-12 px-4 sm:px-6 lg:px-10' }" class="text-center animate-fade-in">
      <h1 class="text-4xl sm:text-5xl font-bold text-primary mb-4">Projects</h1>
      <p class="text-gray-300 text-lg sm:text-xl max-w-md mx-auto">
        A showcase of my creative and technical work.
      </p>
    </UContainer>

    <!-- Project Grid -->
    <UContainer :ui="{ padding: 'py-8 px-4 sm:px-6 lg:px-10' }"
      class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
      <UCard v-for="(project, index) in cvStore.projects" :key="index"
        class="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        <!-- Project Image -->
        <div class="relative h-48 overflow-hidden rounded-t-lg">
          <NuxtImg src="/placeholder.jpg" alt="Project Image"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:bg-black/50 transition-opacity duration-300">
          </div>
        </div>

        <!-- Project Details -->
        <div class="p-6 space-y-4">
          <h3 class="text-xl font-bold text-gray-100">{{ project.name }}</h3>
          <p class="text-gray-300">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <UBadge v-for="(tech, idx) in project.technologies" :key="idx" color="primary" variant="soft" size="sm"
              class="transition-transform duration-300 hover:scale-105">
              {{ tech }}
            </UBadge>
          </div>
          <UButton :to="project.url" target="_blank" size="sm" color="primary" variant="soft"
            icon="i-heroicons-arrow-top-right-on-square" class="transition-transform duration-300 hover:scale-105">
            View Project
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';
import { useCvStore } from '@/stores/cv.store';

const cvStore = useCvStore();

// GSAP Animations
onMounted(() => {
  gsap.from('.animate-fade-in', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out',
  });

  gsap.from('.animate-fade-in-up', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4,
    stagger: 0.2,
    ease: 'power3.out',
  });
});
</script>

<style scoped>
.animate-fade-in {
  opacity: 1;
}

.animate-fade-in-up {
  opacity: 1;
}
</style>