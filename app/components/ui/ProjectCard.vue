<template>
  <UCard
    data-reveal
    class="group relative h-full overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/15"
    :ui="{
      root: 'ring-1 ring-white/10 bg-slate-950/50 backdrop-blur',
      body: 'p-0',
    }"
  >
    <div class="relative h-44 overflow-hidden sm:h-48">
      <NuxtImg
        :src="image"
        :alt="project.name"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        class="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75"
      />
      <UBadge
        color="primary"
        variant="subtle"
        class="absolute left-4 top-4 font-mono"
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
          class="font-mono transition-transform duration-300 hover:scale-105"
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
        class="mt-auto w-full justify-center sm:w-auto"
      >
        View Project
      </UButton>
    </div>
  </UCard>
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
  {
    image: "/placeholder.jpg",
  },
);
</script>
