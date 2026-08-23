<template>
  <div class="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
    <UContainer class="space-y-6">
      <UiPageHeader
        title="Experience"
        description="Roles, responsibilities, and technologies from recent work."
      />

      <UiExperienceTimeline :experiences="cvStore.professionalExperience" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

useSeoMeta({
  title: "Experience — Amir Maghami",
  description: "Professional experience and career highlights.",
});

useGsapScrollReveal({ stagger: 0.12 });
</script>
