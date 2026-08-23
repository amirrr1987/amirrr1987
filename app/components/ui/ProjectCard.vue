<template>
  <div :class="['project-card h-full', rootClass]" data-reveal>
    <UiTiltCard class="h-full" :tilt="tilt">
      <UiShineHover class="h-full">
        <UCard
          class="group relative h-full overflow-hidden rounded-[calc(1.5rem-1px)]! border-0 bg-slate-950/70 shadow-none ring-0"
          :ui="{
            body:
              variant === 'featured'
                ? 'flex h-full flex-col p-0 lg:grid lg:grid-cols-2'
                : 'flex h-full flex-col p-0',
          }"
        >
          <div :class="previewHeightClass">
            <UiProjectPreview
              :theme="project.preview"
              :label="project.name"
              :url-label="previewUrl"
              :compact="variant === 'compact'"
            />
            <div
              class="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"
            />
            <div class="absolute left-4 top-4 z-2 flex flex-wrap items-center gap-2">
              <UBadge
                color="primary"
                variant="subtle"
                class="backdrop-blur-md"
              >
                {{ badge }}
              </UBadge>
              <span
                v-if="project.year"
                class="font-label rounded-full border border-white/10 bg-slate-950/50 px-2.5 py-0.5 text-[10px] text-muted backdrop-blur-md"
              >
                {{ project.year }}
              </span>
            </div>
          </div>

          <div :class="bodyClass">
            <div class="min-h-0 flex-1">
              <h3
                class="font-card text-lg leading-snug text-highlighted transition-colors duration-300 group-hover:text-primary sm:text-xl"
              >
                {{ project.name }}
              </h3>
              <p class="font-subtitle mt-1.5 text-sm text-primary/90">
                {{ project.tagline }}
              </p>
              <p
                v-if="variant !== 'compact'"
                class="mt-3 line-clamp-3 text-sm leading-7 text-muted"
              >
                {{ project.description }}
              </p>
              <div
                v-if="variant !== 'compact'"
                class="mb-5 mt-4 flex flex-wrap gap-1.5"
              >
                <UBadge
                  v-for="(tech, idx) in visibleTechs"
                  :key="idx"
                  color="neutral"
                  variant="soft"
                  size="sm"
                  class="border border-white/5"
                >
                  {{ tech }}
                </UBadge>
                <UBadge
                  v-if="hiddenTechCount > 0"
                  color="neutral"
                  variant="outline"
                  size="sm"
                >
                  +{{ hiddenTechCount }}
                </UBadge>
              </div>
            </div>

            <div class="mt-auto flex flex-wrap gap-2 border-t border-white/5 pt-4">
              <UButton
                v-if="project.caseStudy"
                :to="`/projects/${project.slug}`"
                size="md"
                color="primary"
                variant="solid"
                icon="i-heroicons-document-magnifying-glass"
                class="btn-premium"
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
                class="btn-premium"
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
                class="btn-premium"
                aria-label="View source on GitHub"
              />
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

const techLimit = computed(() => (props.variant === "featured" ? 5 : 4));

const visibleTechs = computed(() =>
  props.project.technologies.slice(0, techLimit.value),
);

const hiddenTechCount = computed(
  () => Math.max(0, props.project.technologies.length - techLimit.value),
);

const previewHeightClass = computed(() => {
  if (props.variant === "featured") {
    return "relative h-64 overflow-hidden sm:h-72 md:h-80 lg:h-full lg:min-h-[22rem]";
  }
  if (props.variant === "compact") {
    return "relative h-36 overflow-hidden sm:h-40";
  }
  return "relative h-48 overflow-hidden sm:h-52";
});

const bodyClass = computed(() => {
  const base = "flex flex-1 flex-col p-5 sm:p-6";
  if (props.variant === "compact") return `${base} min-h-0`;
  if (props.variant === "featured") {
    return `${base} justify-center lg:p-8`;
  }
  return base;
});

const rootClass = computed(() =>
  props.variant === "featured" ? "bento-span-featured" : "",
);
</script>
