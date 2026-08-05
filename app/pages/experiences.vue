<template>
  <UiGradientSection class="relative z-10">
    <UContainer>
      <UiPageHeader
        title="Professional Experience"
        eyebrow="Career"
        icon="i-heroicons-briefcase"
        description="A journey through my career highlights and contributions."
        show-separator
      />
      <UiExperienceTimeline :experiences="cvStore.professionalExperience" />
    </UContainer>
  </UiGradientSection>
</template>

<script setup lang="ts">
import { useCvStore } from '~/stores/cv.store'

const cvStore = useCvStore()
useGsapScrollReveal({ stagger: 0.12 })
</script>
