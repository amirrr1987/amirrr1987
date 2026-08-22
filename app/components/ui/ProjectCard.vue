<template>
  <div :class="['h-full', rootClass]" data-reveal>
    <UiTiltCard class="h-full" :tilt="tilt">
      <UiShineHover class="h-full">
        <UCard
          class="group relative h-full overflow-hidden glass-panel !rounded-[calc(1.5rem-1px)] !bg-slate-950/60 !shadow-none ring-0"
          :ui="{ body: 'p-0' }"
        >
          <div :class="previewHeightClass">
            <UiProjectPreview
              :theme="project.preview"
              :label="project.name"
              :url-label="previewUrl"
              :compact="variant === 'compact'"
            />
            <div
              class="absolute inset-0 z-[1] bg-linear-to-t from-slate-950 via-slate-950/25 to-transparent"
            />
            <UBadge
              color="primary"
              variant="subtle"
              class="absolute left-4 top-4 z-[2] font-mono"
            >
              {{ badge }}
            </UBadge>
            <span
              v-if="project.year"
              class="absolute right-4 top-4 z-[2] font-mono text-xs text-muted"
            >
              {{ project.year }}
            </span>
          </div>

          <div :class="bodyClass">
            <h3 class="font-mono text-lg font-bold text-highlighted sm:text-xl">
              {{ project.name }}
            </h3>
            <p class="mt-1 text-sm font-medium text-primary/90">
              {{ project.tagline }}
            </p>
            <p class="mt-3 text-sm leading-7 text-muted">
              {{ project.description }}
            </p>
            <div class="mb-5 mt-4 flex flex-wrap gap-2">
              <UBadge
                v-for="(tech, idx) in project.technologies"
                :key="idx"
                color="primary"
                variant="soft"
                size="sm"
                class="font-mono"
              >
                {{ tech }}
              </UBadge>
            </div>
            <div class="mt-auto flex flex-wrap gap-2">
              <UButton
                v-if="project.caseStudy"
                :to="`/projects/${project.slug}`"
                size="md"
                color="primary"
                variant="solid"
                icon="i-heroicons-document-magnifying-glass"
                class="btn-premium font-mono"
              >
                Case study
              </UButton>
              <UButton
                :to="primaryUrl"
                target="_blank"
                size="md"
                :color="project.caseStudy ? 'neutral' : 'primary'"
                :variant="project.caseStudy ? 'outline' : 'soft'"
                :icon="primaryIcon"
                trailing
                class="btn-premium font-mono"
              >
                {{ primaryLabel }}
              </UButton>
              <UButton
                :to="project.githubUrl"
                target="_blank"
                size="md"
                color="neutral"
                variant="ghost"
                icon="i-simple-icons-github"
                class="btn-premium font-mono"
              >
                Code
              </UButton>
            </div>
          </div>
        </UCard>
      </UiShineHover>
    </UiTiltCard>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/types/project";

const props = withDefaults(
  defineProps<{
    project: Project;
    variant?: "default" | "compact" | "featured";
    tilt?: boolean;
    shine?: boolean;
  }>(),
  {
    variant: "default",
    tilt: true,
    shine: true,
  },
);

const badge = computed(() => {
  if (props.project.caseStudy) return "Flagship";
  if (props.project.liveUrl) return "Live";
  if (props.project.org) return props.project.org;
  return "Open source";
});

const primaryUrl = computed(
  () => props.project.liveUrl ?? props.project.url,
);

const primaryLabel = computed(() =>
  props.project.liveUrl ? "Live demo" : "Repository",
);

const primaryIcon = computed(() =>
  props.project.liveUrl
    ? "i-heroicons-arrow-top-right-on-square"
    : "i-simple-icons-github",
);

const previewUrl = computed(() => {
  try {
    return new URL(primaryUrl.value).hostname.replace("www.", "");
  } catch {
    return props.project.org ?? "github.com";
  }
});

const previewHeightClass = computed(() => {
  if (props.variant === "featured") {
    return "relative h-56 overflow-hidden sm:h-64 md:h-72";
  }
  if (props.variant === "compact") {
    return "relative h-36 overflow-hidden sm:h-40";
  }
  return "relative h-44 overflow-hidden sm:h-48";
});

const bodyClass = computed(() => {
  const base = "flex flex-col p-5 sm:p-6";
  if (props.variant === "compact") return `${base} min-h-0`;
  if (props.variant === "featured") return `${base} min-h-64 md:min-h-72`;
  return `${base} min-h-72`;
});

const rootClass = computed(() =>
  props.variant === "featured" ? "bento-span-featured" : "",
);
</script>
