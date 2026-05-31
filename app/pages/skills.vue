<template>
  <section id="skills" class="relative z-10 flex flex-col justify-center">
    <UContainer :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }">
      <!-- Header -->
      <div class="text-center animate-fade-in">
        <h1
          class="mb-4 font-mono text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
        >
          Technical Skills
        </h1>
        <p
          class="mx-auto max-w-2xl text-pretty text-base leading-7 text-gray-300 sm:text-lg"
        >
          A snapshot of the technologies, frameworks, and tools I work with.
        </p>
      </div>

      <!-- Skill Grid -->
      <div
        class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:mt-12 lg:grid-cols-4 xl:grid-cols-5"
      >
        <UBadge
          v-for="(skill, index) in cvStore.allSkills"
          :key="index"
          :label="skill"
          color="primary"
          variant="soft"
          size="lg"
          class="flex min-h-12 items-center justify-center rounded-xl px-4 py-3 text-center font-mono transition-transform duration-300 hover:scale-105 animate-fade-in-up"
        >
          {{ skill }}
        </UBadge>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { onMounted } from "vue";
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

// GSAP Animations
onMounted(() => {
  gsap.from(".animate-fade-in", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".animate-fade-in-up", {
    opacity: 0,
    duration: 0.1,
    delay: 0.1,
    stagger: 0.2,
    ease: "power3.out",
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
