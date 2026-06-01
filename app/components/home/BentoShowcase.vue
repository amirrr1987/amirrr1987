<template>
  <section id="showcase" class="relative z-10 scroll-mt-24 pb-16 sm:pb-20">
    <UContainer class="space-y-8">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
        <div>
          <p class="page-eyebrow mb-3">Selected work</p>
          <h2 class="text-gradient-primary text-shimmer font-mono text-2xl font-bold sm:text-3xl md:text-4xl">
            Featured Projects
          </h2>
          <p class="mt-2 max-w-xl text-sm text-muted sm:text-base">
            Real apps shipped to production — click to explore live demos.
          </p>
        </div>
        <UButton
          to="/projects"
          color="primary"
          variant="soft"
          trailing-icon="i-heroicons-arrow-right"
          class="btn-premium shrink-0 font-mono"
        >
          All projects
        </UButton>
      </div>

      <div class="bento-grid" data-reveal>
        <UiTiltCard
          v-for="(project, index) in projects"
          :key="project.name"
          :class="bentoClass(index)"
        >
          <NuxtLink
            :to="project.url"
            target="_blank"
            class="bento-card group block h-full"
            :class="`bento-accent-${index}`"
          >
            <div class="relative z-[2] flex h-full flex-col p-6 sm:p-7">
              <div class="flex items-start justify-between gap-3">
                <UBadge color="primary" variant="subtle" class="font-mono">
                  {{ index === 0 ? "Flagship" : "Live" }}
                </UBadge>
                <UIcon
                  name="i-heroicons-arrow-top-right-on-square"
                  class="size-5 text-primary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <h3 class="mt-6 font-mono text-xl font-bold text-highlighted sm:text-2xl">
                {{ project.name }}
              </h3>
              <p class="mt-3 flex-1 text-sm leading-7 text-muted">
                {{ project.description }}
              </p>
              <div class="mt-5 flex flex-wrap gap-2">
                <UBadge
                  v-for="t in project.technologies.slice(0, 3)"
                  :key="t"
                  variant="soft"
                  color="neutral"
                  size="sm"
                  class="font-mono"
                >
                  {{ t }}
                </UBadge>
              </div>
            </div>
            <span class="bento-glow" aria-hidden="true" />
          </NuxtLink>
        </UiTiltCard>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();
const projects = computed(() => cvStore.projects.slice(0, 3));

function bentoClass(index: number) {
  if (index === 0) return "bento-span-featured h-full";
  return "h-full";
}

useGsapScrollReveal({ stagger: 0.12 });
</script>
