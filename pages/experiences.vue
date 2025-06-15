<template>
  <section class="relative z-10 flex flex-col justify-center">
    <UContainer :ui="{ padding: 'py-12 px-4 sm:px-6 lg:px-10' }">
      <!-- Header -->
      <div class="text-center animate-fade-in">
        <h1 class="font-mono text-4xl sm:text-5xl font-bold text-primary mb-4">Professional Experience</h1>
        <p class="text-gray-300 text-lg sm:text-xl max-w-md mx-auto">
          A journey through my career highlights and contributions.
        </p>
      </div>

      <!-- Experience List -->
      <div class="mt-12 space-y-8 ">
        <div v-for="(exp, index) in cvStore.professionalExperience" :key="index" class="flex gap-6 items-start animate-fade-in-up">
          <!-- Timeline Dot -->
          <div class="relative w-2 h-2 bg-primary rounded-full mt-4">
            <div v-if="index !== cvStore.professionalExperience.length - 1"
              class="absolute top-4 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gray-700"></div>
          </div>

          <!-- Experience Details -->
          <div class="flex-1 space-y-2">
            <h3 class="font-mono text-xl font-bold">{{ exp.role }}</h3>
            <p class="font-mono text-primary-500 font-medium">{{ exp.company }} - {{ exp.location }}</p>
            <p class="font-mono text-sm text-gray-400">{{ exp.period }}</p>
            <ul class="ms-8 list-disc list-inside text-gray-300">
              <li v-for="(responsibility, idx) in exp.responsibilities" :key="idx">{{ responsibility }}</li>
            </ul>
            <div class="flex flex-wrap gap-2 mt-2">
              <UBadge v-for="tech in exp.technologies" :key="tech" color="secondary" variant="soft" class="font-mono ">
                {{ tech }}
              </UBadge>
            </div>
          </div>
        </div>
      </div>
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
    ease: 'power3.out',
  });

  gsap.from('.animate-fade-in-up', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
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