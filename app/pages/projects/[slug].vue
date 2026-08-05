<template>
  <UiGradientSection
    v-if="study"
    class="relative z-10"
  >
    <UContainer class="space-y-12 pb-16 sm:space-y-16">
      <header
        class="max-w-3xl"
        data-reveal
      >
        <NuxtLink
          to="/projects"
          class="mb-6 inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors hover:text-primary"
        >
          <UIcon
            name="i-heroicons-arrow-left"
            class="size-4"
          />
          All projects
        </NuxtLink>
        <p class="page-eyebrow mb-4">
          Case study · {{ study.year }}
        </p>
        <h1 class="display-name text-highlighted">
          {{ study.name }}
        </h1>
        <p class="body-copy mt-4 text-primary">
          {{ study.tagline }}
        </p>
        <p class="mt-2 font-mono text-sm text-muted">
          {{ study.role }}
        </p>
      </header>

      <div
        class="overflow-hidden rounded-3xl border border-white/10"
        data-reveal
      >
        <UiProjectPreview
          :theme="study.preview"
          :label="study.name"
          url-label="cvbuilder.demo"
          class="project-preview--hero"
        />
      </div>

      <div
        class="grid gap-8 lg:grid-cols-2"
        data-reveal
      >
        <UiGlassPanel padding="lg">
          <h2 class="font-mono text-lg font-bold text-highlighted">
            Problem
          </h2>
          <p class="body-copy mt-3 text-muted">
            {{ study.problem }}
          </p>
        </UiGlassPanel>
        <UiGlassPanel padding="lg">
          <h2 class="font-mono text-lg font-bold text-highlighted">
            Solution
          </h2>
          <p class="body-copy mt-3 text-muted">
            {{ study.solution }}
          </p>
        </UiGlassPanel>
      </div>

      <div data-reveal>
        <h2 class="display-section mb-6 text-highlighted">
          Highlights
        </h2>
        <div class="grid gap-4 sm:grid-cols-3">
          <UiGlassPanel
            v-for="h in study.highlights"
            :key="h.title"
            padding="md"
          >
            <h3 class="font-mono font-bold text-highlighted">
              {{ h.title }}
            </h3>
            <p class="mt-2 text-sm leading-7 text-muted">
              {{ h.text }}
            </p>
          </UiGlassPanel>
        </div>
      </div>

      <UiGlassPanel
        padding="lg"
        data-reveal
      >
        <h2 class="font-mono text-lg font-bold text-highlighted">
          Stack
        </h2>
        <div class="mt-4 flex flex-wrap gap-2">
          <UBadge
            v-for="t in study.technologies"
            :key="t"
            color="primary"
            variant="soft"
            class="font-mono"
          >
            {{ t }}
          </UBadge>
        </div>
        <div class="mt-8 flex flex-wrap gap-3">
          <UButton
            :to="study.url"
            target="_blank"
            color="primary"
            size="lg"
            trailing-icon="i-heroicons-arrow-top-right-on-square"
            class="btn-premium font-mono"
          >
            Open live app
          </UButton>
          <UButton
            to="/contact"
            color="neutral"
            variant="outline"
            size="lg"
            icon="i-heroicons-envelope"
            class="btn-premium font-mono"
          >
            Work with me
          </UButton>
        </div>
      </UiGlassPanel>
    </UContainer>
  </UiGradientSection>
</template>

<script setup lang="ts">
const route = useRoute()
const { getCaseStudy } = useProjects()
const slug = String(route.params.slug)
const study = getCaseStudy(slug)

if (!study) {
  await navigateTo('/projects')
}

useSeoMeta({
  title: `${study!.name} — Case study`,
  description: study!.tagline
})

useGsapScrollReveal({ stagger: 0.08 })
</script>
