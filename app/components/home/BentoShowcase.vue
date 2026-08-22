<template>
  <section id="showcase" class="relative z-10 scroll-mt-24 pb-16 sm:pb-20">
    <UContainer class="space-y-8">
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        data-reveal
      >
        <div>
          <p class="page-eyebrow mb-3">Highlighted</p>
          <h2 class="display-section text-highlighted">Featured on GitHub</h2>
          <p class="body-copy mt-2 max-w-xl text-muted">
            Every card links to a real Netlify deploy (amirmaghami.ir, skill-jumper, vuequest, and more).
          </p>
        </div>
        <UButton
          to="/projects"
          color="primary"
          variant="soft"
          trailing-icon="i-heroicons-arrow-right"
          class="btn-premium shrink-0 font-mono"
        >
          All {{ totalCount }} projects
        </UButton>
      </div>

      <div class="bento-grid">
        <UiProjectCard
          v-for="(project, index) in featured"
          :key="project.slug"
          :project="project"
          :variant="index === 0 ? 'featured' : 'compact'"
          :tilt="index !== 0"
          :shine="index === 0"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { featured, projects } = useProjects();
const totalCount = computed(() => projects.value.length);
</script>
