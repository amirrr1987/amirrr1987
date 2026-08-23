<template>
  <div class="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
    <UContainer class="space-y-5">
      <header class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
        <div>
          <p class="page-eyebrow mb-2">Career history</p>
          <h1 class="font-page text-3xl text-highlighted sm:text-4xl">
            <span class="font-mono text-primary">git</span> experience
          </h1>
          <p class="body-copy mt-2 max-w-md text-sm text-muted">
            {{ yearsSpan }}+ years · {{ experiences.length }} commits · pick a role or use
            <kbd class="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-primary">↑</kbd>
            <kbd class="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-primary">↓</kbd>
          </p>
        </div>

        <div class="flex shrink-0 gap-2">
          <UButton
            to="/AmirMagjami-Resume.pdf"
            download
            target="_blank"
            size="sm"
            color="primary"
            variant="soft"
            icon="i-heroicons-document-arrow-down"
            class="btn-premium font-mono"
          >
            git show --cv
          </UButton>
          <UButton
            to="/skills"
            size="sm"
            color="neutral"
            variant="outline"
            icon="i-heroicons-code-bracket"
            class="btn-premium font-mono"
          >
            stack
          </UButton>
        </div>
      </header>

      <UiExperienceTimeline
        :experiences="experiences"
        :education="education[0] ?? null"
      />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

const experiences = computed(() => cvStore.professionalExperience);
const education = computed(() => cvStore.education);

const yearsSpan = computed(() => {
  const start = 2019;
  return Math.max(1, new Date().getFullYear() - start);
});

useSeoMeta({
  title: "Experience — Amir Maghami",
  description:
    "Professional experience across Vue, Nuxt, and front-end engineering roles.",
});

useGsapScrollReveal({ stagger: 0.05 });
</script>
