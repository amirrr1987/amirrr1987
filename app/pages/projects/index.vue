<template>
  <UContainer class="space-y-10">
    <UiPageHeader
      title="Projects"
      description="Selected work with live demos and open-source repositories."
    />

    <div class="grid gap-5 md:grid-cols-2">
      <UCard
        v-for="project in projects"
        :key="project.slug"
        class="border border-white/10 bg-slate-950/40"
        :ui="{ body: 'space-y-4' }"
      >
        <div class="flex items-start justify-between gap-3">
          <h2 class="font-card text-lg text-highlighted">
            {{ project.name }}
          </h2>
          <span
            v-if="project.year"
            class="font-label shrink-0 text-xs text-muted"
          >
            {{ project.year }}
          </span>
        </div>

        <p class="text-sm text-primary">
          {{ project.tagline }}
        </p>
        <p class="text-sm leading-relaxed text-muted">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="tech in project.technologies.slice(0, 5)"
            :key="tech"
            color="neutral"
            variant="subtle"
            size="sm"
          >
            {{ tech }}
          </UBadge>
        </div>

        <div class="flex flex-wrap gap-2 pt-1">
          <UButton
            v-if="project.caseStudy"
            :to="`/projects/${project.slug}`"
            color="primary"
            size="sm"
          >
            Case study
          </UButton>
          <UButton
            :to="project.liveUrl ?? project.url"
            target="_blank"
            color="neutral"
            variant="outline"
            size="sm"
            trailing-icon="i-heroicons-arrow-top-right-on-square"
          >
            Live demo
          </UButton>
          <UButton
            :to="project.githubUrl"
            target="_blank"
            color="neutral"
            variant="ghost"
            size="sm"
            icon="i-simple-icons-github"
          >
            Code
          </UButton>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const { projects } = useProjects();

useSeoMeta({
  title: "Projects — Amir Maghami",
  description: "Portfolio projects with live demos and source code.",
});
</script>
