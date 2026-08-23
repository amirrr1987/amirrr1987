<template>
  <div class="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
    <UContainer
      v-if="study"
      class="max-w-3xl space-y-8"
    >
      <UButton
        to="/projects"
        color="neutral"
        variant="ghost"
        icon="i-heroicons-arrow-left"
        size="sm"
      >
        All projects
      </UButton>

      <header class="space-y-3" data-reveal>
        <p class="page-eyebrow">
          Case study · {{ study.year }}
        </p>
        <h1 class="gradient-text font-page text-3xl sm:text-4xl">
          {{ study.name }}
        </h1>
        <p class="font-subtitle text-primary">
          {{ study.tagline }}
        </p>
        <p class="text-sm text-muted">
          {{ study.role }}
        </p>
      </header>

      <UiGlassPanel padding="md" data-reveal>
        <h2 class="font-section text-highlighted">
          Problem
        </h2>
        <p class="body-copy mt-3 text-muted">
          {{ study.problem }}
        </p>
      </UiGlassPanel>

      <UiGlassPanel padding="md" data-reveal>
        <h2 class="font-section text-highlighted">
          Solution
        </h2>
        <p class="body-copy mt-3 text-muted">
          {{ study.solution }}
        </p>
      </UiGlassPanel>

      <div class="space-y-4" data-reveal>
        <h2 class="display-section text-lg text-highlighted">
          Highlights
        </h2>
        <div class="grid gap-4 sm:grid-cols-3">
          <UiGlassPanel
            v-for="item in study.highlights"
            :key="item.title"
            padding="md"
            class="transition-colors hover:border-primary/30"
          >
            <h3 class="font-card text-highlighted">
              {{ item.title }}
            </h3>
            <p class="body-copy mt-2 text-muted">
              {{ item.text }}
            </p>
          </UiGlassPanel>
        </div>
      </div>

      <UiGlassPanel padding="md" data-reveal>
        <h2 class="font-section text-highlighted">
          Stack
        </h2>
        <div class="mt-4 flex flex-wrap gap-2">
          <UBadge
            v-for="tech in study.technologies"
            :key="tech"
            color="primary"
            variant="soft"
          >
            {{ tech }}
          </UBadge>
        </div>
        <div class="mt-6 flex flex-wrap gap-2">
          <UButton
            :to="study.url"
            target="_blank"
            color="primary"
            trailing-icon="i-heroicons-arrow-top-right-on-square"
            class="btn-premium"
          >
            Open live app
          </UButton>
          <UButton
            to="/contact"
            color="neutral"
            variant="outline"
            icon="i-heroicons-envelope"
            class="btn-premium"
          >
            Work with me
          </UButton>
        </div>
      </UiGlassPanel>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { getCaseStudy } = useProjects();

const slug = String(route.params.slug);
const study = getCaseStudy(slug);

if (!study) {
  await navigateTo("/projects");
}

useSeoMeta({
  title: `${study!.name} — Case study`,
  description: study!.tagline,
});

useGsapScrollReveal({ stagger: 0.1 });
</script>
