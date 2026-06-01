<template>
  <UiTiltCard class="h-full" data-reveal>
    <UiShineHover class="h-full">
    <UCard
      class="group relative h-full overflow-hidden glass-panel !rounded-[calc(1.5rem-1px)] !bg-slate-950/60 !shadow-none ring-0"
      :ui="{ body: 'p-0' }"
    >
      <div class="relative h-44 overflow-hidden sm:h-48">
        <NuxtImg
          :src="image"
          :alt="project.name"
          class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent"
        />
        <UBadge
          color="primary"
          variant="subtle"
          class="absolute left-4 top-4 font-mono shadow-lg shadow-primary/20"
        >
          Featured
        </UBadge>
      </div>

      <div class="flex min-h-72 flex-col p-5 sm:p-6">
        <h3 class="font-mono text-lg font-bold text-highlighted sm:text-xl">
          {{ project.name }}
        </h3>
        <p class="mt-3 text-sm leading-7 text-muted sm:text-base">
          {{ project.description }}
        </p>
        <div class="mb-6 mt-5 flex flex-wrap gap-2">
          <UBadge
            v-for="(tech, idx) in project.technologies"
            :key="idx"
            color="primary"
            variant="soft"
            size="sm"
            class="font-mono transition-transform hover:scale-105"
          >
            {{ tech }}
          </UBadge>
        </div>
        <UButton
          :to="project.url"
          target="_blank"
          size="md"
          color="primary"
          variant="soft"
          icon="i-heroicons-arrow-top-right-on-square"
          trailing
          class="btn-premium mt-auto w-full justify-center sm:w-auto"
        >
          View Project
        </UButton>
      </div>
    </UCard>
    </UiShineHover>
  </UiTiltCard>
</template>

<script setup lang="ts">
type Project = {
  name: string;
  description: string;
  technologies: string[];
  url: string;
};

withDefaults(
  defineProps<{
    project: Project;
    image?: string;
  }>(),
  { image: "/placeholder.jpg" },
);
</script>
