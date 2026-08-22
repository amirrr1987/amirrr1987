<template>
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

    <header class="space-y-3">
      <p class="font-label text-sm text-muted">
        Case study · {{ study.year }}
      </p>
      <h1
        class="bg-linear-to-br from-primary to-purple-400 bg-clip-text font-page text-3xl text-transparent sm:text-4xl"
      >
        {{ study.name }}
      </h1>
      <p class="font-subtitle text-primary">
        {{ study.tagline }}
      </p>
      <p class="text-sm text-muted">
        {{ study.role }}
      </p>
    </header>

    <UCard
      class="border border-white/10 bg-slate-950/40"
      :ui="{ body: 'space-y-3' }"
    >
      <h2 class="font-section text-highlighted">
        Problem
      </h2>
      <p class="text-sm leading-7 text-muted">
        {{ study.problem }}
      </p>
    </UCard>

    <UCard
      class="border border-white/10 bg-slate-950/40"
      :ui="{ body: 'space-y-3' }"
    >
      <h2 class="font-section text-highlighted">
        Solution
      </h2>
      <p class="text-sm leading-7 text-muted">
        {{ study.solution }}
      </p>
    </UCard>

    <div class="space-y-4">
      <h2 class="font-section text-lg text-highlighted">
        Highlights
      </h2>
      <div class="grid gap-4 sm:grid-cols-3">
        <UCard
          v-for="item in study.highlights"
          :key="item.title"
          class="border border-white/10 bg-slate-950/40"
          :ui="{ body: 'space-y-2' }"
        >
          <h3 class="font-card text-highlighted">
            {{ item.title }}
          </h3>
          <p class="text-sm leading-relaxed text-muted">
            {{ item.text }}
          </p>
        </UCard>
      </div>
    </div>

    <UCard
      class="border border-white/10 bg-slate-950/40"
      :ui="{ body: 'space-y-4' }"
    >
      <h2 class="font-section text-highlighted">
        Stack
      </h2>
      <div class="flex flex-wrap gap-2">
        <UBadge
          v-for="tech in study.technologies"
          :key="tech"
          color="primary"
          variant="soft"
        >
          {{ tech }}
        </UBadge>
      </div>
      <div class="flex flex-wrap gap-2">
        <UButton
          :to="study.url"
          target="_blank"
          color="primary"
          trailing-icon="i-heroicons-arrow-top-right-on-square"
        >
          Open live app
        </UButton>
        <UButton
          to="/contact"
          color="neutral"
          variant="outline"
          icon="i-heroicons-envelope"
        >
          Work with me
        </UButton>
      </div>
    </UCard>
  </UContainer>
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
</script>
