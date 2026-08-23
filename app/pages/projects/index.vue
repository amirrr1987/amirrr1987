<template>
  <div class="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
    <UContainer class="space-y-10">
      <UiPageHeader
        title="Projects"
        description="Selected work with live demos and open-source repositories."
      />

      <div class="bento-grid">
        <UiProjectCard
          v-for="(project, index) in projects"
          :key="project.slug"
          :project="project"
          :variant="index === 0 ? 'featured' : 'default'"
          :tilt="index !== 0"
          :shine="index === 0"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { projects } = useProjects();

useSeoMeta({
  title: "Projects — Amir Maghami",
  description: "Portfolio projects with live demos and source code.",
});

useGsapScrollReveal({ stagger: 0.08 });
</script>
