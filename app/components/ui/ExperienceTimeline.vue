<template>
  <div class="relative mt-8 space-y-6 lg:mt-12">
    <div
      class="absolute bottom-0 left-[1.35rem] top-3 hidden w-px bg-linear-to-b from-primary/80 via-primary/30 to-transparent sm:block"
      aria-hidden="true"
    />

    <UiGlassPanel
      v-for="(exp, index) in experiences"
      :key="`${exp.company}-${exp.period}`"
      data-reveal
      padding="md"
      class="relative ml-0 transition-all duration-300 hover:border-primary/30 sm:ml-4"
    >
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div class="flex shrink-0 items-start gap-3 sm:w-48 sm:flex-col">
          <div
            class="timeline-pulse relative z-10 mt-1 flex size-3 shrink-0 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-primary/20"
          />
          <div>
            <p class="font-mono text-xs uppercase tracking-wider text-primary">
              {{ exp.period }}
            </p>
            <p class="mt-1 font-mono text-sm font-semibold text-highlighted">
              {{ exp.company }}
            </p>
            <p class="text-sm text-muted">{{ exp.location }}</p>
          </div>
        </div>

        <div class="min-w-0 flex-1 space-y-3">
          <h3 class="font-mono text-lg font-bold text-highlighted sm:text-xl">
            {{ exp.role }}
          </h3>
          <ul
            class="space-y-2 pl-1 text-left text-sm leading-7 text-muted sm:text-base"
          >
            <li
              v-for="(responsibility, idx) in exp.responsibilities"
              :key="idx"
              class="flex gap-2"
            >
              <UIcon
                name="i-heroicons-check-circle"
                class="mt-1 size-4 shrink-0 text-primary"
              />
              <span>{{ responsibility }}</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-2 pt-1">
            <UBadge
              v-for="tech in exp.technologies"
              :key="tech"
              color="secondary"
              variant="soft"
              class="font-mono"
            >
              {{ tech }}
            </UBadge>
          </div>
        </div>
      </div>
    </UiGlassPanel>
  </div>
</template>

<script setup lang="ts">
type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
};

defineProps<{
  experiences: Experience[];
}>();
</script>
