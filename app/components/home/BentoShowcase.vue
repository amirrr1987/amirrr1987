<template>
  <section id="showcase" class="relative z-10 scroll-mt-24 px-4 pb-12 sm:px-6 sm:pb-16 lg:px-10">
    <UContainer class="space-y-8">
      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        data-reveal
      >
        <div>
          <p class="page-eyebrow mb-3">Selected work</p>
          <h2 class="display-section text-highlighted">Featured projects</h2>
          <p class="body-copy mt-2 max-w-xl text-muted">
            A quick look at recent Vue & Nuxt work — full case studies and demos on the projects page.
          </p>
        </div>
        <UButton
          to="/projects"
          color="primary"
          variant="soft"
          trailing-icon="i-heroicons-arrow-right"
          class="btn-premium shrink-0"
        >
          All {{ totalCount }} projects
        </UButton>
      </div>

      <div class="grid gap-5 md:grid-cols-3">
        <UiProjectCard
          v-for="project in teaser"
          :key="project.slug"
          :project="project"
          variant="compact"
          :tilt="true"
          :shine="false"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { featured, projects } = useProjects();
const totalCount = computed(() => projects.value.length);
const teaser = computed(() => featured.value.slice(0, 3));

useGsapScrollReveal({ stagger: 0.08 });
</script>
