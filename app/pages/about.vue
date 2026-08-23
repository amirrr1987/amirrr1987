<template>
  <div class="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
    <UContainer class="space-y-12">
      <UiPageHeader
        title="About Me"
        description="Senior front-end developer focused on Vue, Nuxt, and TypeScript."
      />

      <UiGlassPanel
        padding="lg"
        class="mx-auto max-w-4xl"
        data-reveal
      >
        <div class="flex flex-col items-center gap-8 md:flex-row md:items-start">
          <NuxtImg
            src="~/assets/images/me.png"
            width="200"
            height="200"
            class="size-36 shrink-0 rounded-2xl border border-primary/30 object-cover ring-2 ring-primary/20 sm:size-44"
            alt="Amir Maghami"
          />

          <div class="space-y-5 text-center md:text-left">
            <div>
              <h2 class="font-card text-2xl text-highlighted sm:text-3xl">
                Amir Maghami
              </h2>
              <p class="font-subtitle mt-1 text-primary">
                Fullstack Developer · Vue / Nuxt
              </p>
            </div>

            <p class="body-copy text-muted">
              {{ cvStore.professionalSummary }}
            </p>

            <div class="flex flex-wrap justify-center gap-2 md:justify-start">
              <UButton
                to="/AmirMagjami-Resume.pdf"
                download
                target="_blank"
                color="primary"
                icon="i-heroicons-document-arrow-down"
                class="btn-premium"
              >
                Download CV
              </UButton>
              <UButton
                to="/skills"
                color="neutral"
                variant="outline"
                icon="i-heroicons-light-bulb"
                class="btn-premium"
              >
                View skills
              </UButton>
              <UButton
                to="/contact"
                color="neutral"
                variant="soft"
                icon="i-heroicons-envelope"
                class="btn-premium"
              >
                Contact me
              </UButton>
            </div>
          </div>
        </div>
      </UiGlassPanel>

      <div class="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <UiStatCounter
          :value="6"
          suffix="+"
          label="Years experience"
          icon="i-heroicons-briefcase"
        />
        <UiStatCounter
          :value="15"
          suffix="+"
          label="Projects"
          icon="i-heroicons-rocket-launch"
        />
        <UiStatCounter
          :value="5"
          label="Roles"
          icon="i-heroicons-building-office-2"
        />
        <UiStatCounter
          :value="25"
          suffix="+"
          label="Technologies"
          icon="i-heroicons-code-bracket"
        />
      </div>

      <div class="mx-auto max-w-4xl space-y-4">
        <h3 class="display-section text-lg text-highlighted sm:text-xl">
          Core stack
        </h3>
        <div class="flex flex-wrap justify-center gap-2 md:justify-start">
          <UBadge
            v-for="skill in coreStack"
            :key="skill.name"
            color="primary"
            variant="soft"
            size="lg"
            class="gap-1.5 transition-transform hover:scale-105"
          >
            <UIcon :name="skill.icon" class="size-4" />
            {{ skill.name }}
          </UBadge>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

useSeoMeta({
  title: "About — Amir Maghami",
  description: cvStore.professionalSummary,
});

useGsapScrollReveal({ stagger: 0.08 });

const coreStack = [
  { name: "Vue.js", icon: "i-simple-icons-vuedotjs" },
  { name: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
  { name: "TypeScript", icon: "i-simple-icons-typescript" },
  { name: "Tailwind CSS", icon: "i-simple-icons-tailwindcss" },
  { name: "Pinia", icon: "i-simple-icons-vuedotjs" },
];
</script>
