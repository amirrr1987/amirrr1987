<template>
  <section
    id="flagship"
    class="relative z-10 scroll-mt-24 border-t border-white/5 py-16 sm:py-20"
  >
    <UContainer>
      <div class="grid gap-10 lg:grid-cols-12 lg:gap-12" data-reveal>
        <div class="lg:col-span-5 lg:pt-4">
          <p class="page-eyebrow mb-4">Flagship case study</p>
          <h2 class="display-section text-highlighted">
            {{ study.name }}
          </h2>
          <p class="body-copy mt-4 text-muted">
            {{ study.tagline }}
          </p>
          <ul class="mt-6 space-y-3">
            <li
              v-for="item in study.outcomes"
              :key="item"
              class="flex gap-3 text-sm leading-7 text-muted"
            >
              <UIcon name="i-heroicons-check-circle" class="mt-0.5 size-5 shrink-0 text-primary" />
              {{ item }}
            </li>
          </ul>
          <div class="mt-8 flex flex-wrap gap-3">
            <UButton
              :to="`/projects/${study.slug}`"
              color="primary"
              size="lg"
              icon="i-heroicons-document-magnifying-glass"
              class="btn-premium font-mono"
            >
              Read case study
            </UButton>
            <UButton
              :to="study.url"
              target="_blank"
              color="neutral"
              variant="outline"
              size="lg"
              trailing-icon="i-heroicons-arrow-top-right-on-square"
              class="btn-premium font-mono"
            >
              Live app
            </UButton>
          </div>
        </div>

        <div class="lg:col-span-7">
          <UiTiltCard class="h-full" :tilt="true">
            <NuxtLink :to="`/projects/${study.slug}`" class="block">
              <UiProjectPreview
                :theme="study.preview"
                :label="study.name"
                url-label="cvbuilder.demo"
                class="project-preview--hero"
              />
            </NuxtLink>
          </UiTiltCard>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
const { getCaseStudy } = useProjects();
const study = getCaseStudy("cv-builder")!;

useGsapScrollReveal();
</script>
