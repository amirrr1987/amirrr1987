<template>
  <section class="relative z-10 flex flex-col justify-center">
    <UContainer :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }">
      <!-- Header -->
      <div class="text-center animate-fade-in">
        <h1
          class="mb-4 font-mono text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
        >
          Professional Experience
        </h1>
        <p
          class="mx-auto max-w-2xl text-pretty text-base leading-7 text-gray-300 sm:text-lg"
        >
          A journey through my career highlights and contributions.
        </p>
      </div>

      <!-- Experience List -->
      <div class="mt-8 space-y-5 lg:mt-12">
        <div
          v-for="(exp, index) in cvStore.professionalExperience"
          :key="index"
          class="relative flex gap-4 rounded-3xl border border-white/10 bg-slate-950/60 p-4 shadow-xl shadow-slate-950/20 backdrop-blur animate-fade-in-up sm:gap-6 sm:p-6"
        >
          <!-- Timeline Dot -->
          <div
            class="relative mt-2 h-3 w-3 shrink-0 rounded-full bg-primary shadow-lg shadow-primary/30 sm:mt-3"
          >
            <div
              v-if="index !== cvStore.professionalExperience.length - 1"
              class="absolute left-1/2 top-5 hidden h-[calc(100%+2rem)] w-0.5 -translate-x-1/2 bg-gray-700 sm:block"
            />
          </div>

          <!-- Experience Details -->
          <div class="min-w-0 flex-1 space-y-3">
            <h3 class="break-words font-mono text-lg font-bold sm:text-xl">
              {{ exp.role }}
            </h3>
            <p
              class="font-mono text-sm font-medium text-primary-500 sm:text-base"
            >
              {{ exp.company }} - {{ exp.location }}
            </p>
            <p class="font-mono text-sm text-gray-400">{{ exp.period }}</p>
            <ul
              class="space-y-2 pl-5 text-left text-sm leading-7 text-gray-300 sm:text-base"
            >
              <li
                v-for="(responsibility, idx) in exp.responsibilities"
                :key="idx"
              >
                {{ responsibility }}
              </li>
            </ul>
            <div class="mt-3 flex flex-wrap gap-2">
              <UBadge
                v-for="tech in exp.technologies"
                :key="tech"
                color="secondary"
                variant="soft"
                class="font-mono"
              >
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
    ease: "power3.out",
  });

  gsap.from(".animate-fade-in-up", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.2,
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
