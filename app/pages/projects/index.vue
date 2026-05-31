<template>
  <section id="projects" class="relative z-10 flex flex-col justify-center">
    <!-- Header -->
    <UContainer
      :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }"
      class="text-center animate-fade-in"
    >
      <h1
        class="mb-4 font-mono text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
      >
        Projects
      </h1>
      <p
        class="mx-auto max-w-2xl text-pretty font-mono text-base leading-7 text-gray-300 sm:text-lg"
      >
        A showcase of my creative and technical work.
      </p>
    </UContainer>

    <!-- Project Grid -->
    <UContainer
      :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }"
      class="mt-8 grid grid-cols-1 gap-5 animate-fade-in-up sm:gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3"
    >
      <UCard
        v-for="(project, index) in cvStore.projects"
        :key="index"
        class="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10"
      >
        <!-- Project Image -->
        <div class="relative h-44 overflow-hidden rounded-t-lg sm:h-48">
          <NuxtImg
            src="/placeholder.jpg"
            :alt="project.name"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-linear-to-b from-transparent to-black/70 group-hover:bg-black/50 transition-opacity duration-300"
          />
        </div>

        <!-- Project Details -->
        <div class="flex min-h-72 flex-col p-5 sm:p-6">
          <h3 class="font-mono text-lg font-bold text-gray-100 sm:text-xl">
            {{ project.name }}
          </h3>
          <p class="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
            {{ project.description }}
          </p>
          <div class="mb-6 mt-5 flex flex-wrap gap-2">
            <UBadge
              v-for="(tech, idx) in project.technologies"
              :key="idx"
              color="primary"
              variant="soft"
              size="sm"
              class="transition-transform duration-300 hover:scale-105"
            >
              {{ tech }}
            </UBadge>
          </div>
          <UButton
            :to="project.url"
            target="_blank"
            size="sm"
            color="primary"
            variant="soft"
            icon="i-heroicons-arrow-top-right-on-square"
            class="mt-auto w-full justify-center font-mono transition-transform duration-300 hover:scale-105 sm:w-auto"
          >
            View Project
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { useCvStore } from "@/stores/cv.store";

const cvStore = useCvStore();

// GSAP Animations
onMounted(() => {
  gsap.from(".animate-fade-in", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from(".animate-fade-in-up", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4,
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
