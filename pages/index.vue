<template>
  <section class="text-white flex items-center">
    <UContainer class="text-center px-4 sm:px-8" :ui="{ constrained: 'max-w-3xl' }">
      <div class="flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
        <!-- Name -->
        <h1
          class="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Amir Maghami
        </h1>

        <!-- Title -->
        <h2 class="text-xl sm:text-2xl font-medium text-primary">
          Fullstack Developer
        </h2>

        <!-- Description -->
        <p class="text-base sm:text-lg text-gray-400">
          I craft beautiful, intuitive, and high-performance web experiences — merging elegant design with clean,
          scalable code to build amazing things for the web.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <UButton to="/projects" size="xl" icon="i-heroicons-rocket-launch" color="primary"
            class="w-full sm:w-auto transition-transform duration-300 hover:scale-105">
            View My Work
          </UButton>
          <UButton to="/contact" size="xl" color="secondary" variant="outline" icon="i-heroicons-envelope"
            class="w-full sm:w-auto transition-transform duration-300 hover:scale-105">
            Get in Touch
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import gsap from 'gsap';

// GSAP Animations
onMounted(() => {
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
.animate-fade-in-up {
  opacity: 1;
}
</style>