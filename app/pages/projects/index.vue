<template>
  <UiGradientSection class="relative z-10">
    <UContainer class="space-y-10 sm:space-y-12">
      <UiPageHeader
        title="Projects"
        eyebrow="Portfolio"
        icon="i-heroicons-rocket-launch"
        description="A showcase of my creative and technical work."
        show-separator
      />

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UiProjectCard
          v-for="(project, index) in cvStore.projects"
          :key="index"
          :project="project"
        />
      </div>
    </UContainer>
  </UiGradientSection>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();
useGsapScrollReveal({ stagger: 0.14 });
</script>
