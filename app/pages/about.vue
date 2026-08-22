<template>
  <UContainer class="space-y-10">
    <UiPageHeader
      title="About Me"
      description="Senior front-end developer focused on Vue, Nuxt, and TypeScript."
    />

    <div class="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:items-start">
      <NuxtImg
        src="~/assets/images/me.png"
        width="200"
        height="200"
        class="size-40 shrink-0 rounded-full border border-primary/30 object-cover ring-2 ring-primary/20"
        alt="Amir Maghami"
      />

      <div class="space-y-5 text-center md:text-left">
        <div>
          <h2 class="font-card text-2xl text-highlighted">
            Amir Maghami
          </h2>
          <p class="font-subtitle mt-1 text-primary">
            Fullstack Developer · Vue / Nuxt
          </p>
        </div>

        <p class="text-sm leading-7 text-muted sm:text-base">
          {{ cvStore.professionalSummary }}
        </p>

        <div class="flex flex-wrap justify-center gap-2 md:justify-start">
          <UButton
            to="/AmirMagjami-Resume.pdf"
            download
            target="_blank"
            color="primary"
            icon="i-heroicons-document-arrow-down"
          >
            Download CV
          </UButton>
          <UButton
            to="/skills"
            color="neutral"
            variant="outline"
            icon="i-heroicons-light-bulb"
          >
            View skills
          </UButton>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-3xl space-y-4">
      <h3 class="font-section text-lg text-highlighted">
        Core stack
      </h3>
      <div class="flex flex-wrap justify-center gap-2 md:justify-start">
        <UBadge
          v-for="skill in coreStack"
          :key="skill.name"
          color="primary"
          variant="soft"
          size="lg"
          class="gap-1.5"
        >
          <UIcon :name="skill.icon" class="size-4" />
          {{ skill.name }}
        </UBadge>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

useSeoMeta({
  title: "About — Amir Maghami",
  description: cvStore.professionalSummary,
});

const coreStack = [
  { name: "Vue.js", icon: "i-simple-icons-vuedotjs" },
  { name: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
  { name: "TypeScript", icon: "i-simple-icons-typescript" },
  { name: "Tailwind CSS", icon: "i-simple-icons-tailwindcss" },
  { name: "Pinia", icon: "i-simple-icons-vuedotjs" },
];
</script>
