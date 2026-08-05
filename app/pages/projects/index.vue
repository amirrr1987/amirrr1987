<template>
  <UiGradientSection class="relative z-10">
    <UContainer class="space-y-10 sm:space-y-12">
      <UiPageHeader
        title="Projects"
        eyebrow="Portfolio"
        icon="i-heroicons-rocket-launch"
        description="Each project maps to a GitHub repo and, when available, a Netlify live URL (*-amirmaghami.netlify.app or amirmaghami.ir)."
        show-separator
      />

      <UiGlassPanel
        padding="md"
        class="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
        data-reveal
      >
        <p class="body-copy text-sm text-muted">
          Also on GitHub:
        </p>
        <div class="flex flex-wrap gap-2">
          <UButton
            v-for="org in githubOrgs"
            :key="org.name"
            :to="org.url"
            target="_blank"
            color="neutral"
            variant="soft"
            size="sm"
            icon="i-simple-icons-github"
            class="font-mono"
          >
            {{ org.label }}
          </UButton>
        </div>
      </UiGlassPanel>

      <div class="bento-grid">
        <UiProjectCard
          v-for="(project, index) in projects"
          :key="project.slug"
          :project="project"
          :variant="index === 0 ? 'featured' : 'default'"
          :tilt="index > 0"
        />
      </div>
    </UContainer>
  </UiGradientSection>
</template>

<script setup lang="ts">
const { projects, githubOrgs } = useProjects()
useGsapScrollReveal({ stagger: 0.1 })
</script>
