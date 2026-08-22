<template>
  <UContainer class="space-y-10">
    <UiPageHeader
      title="Experience"
      description="Roles, responsibilities, and technologies from recent work."
    />

    <div class="mx-auto max-w-3xl space-y-6">
      <UCard
        v-for="exp in cvStore.professionalExperience"
        :key="`${exp.company}-${exp.period}`"
        class="border border-white/10 bg-slate-950/40"
        :ui="{ body: 'space-y-3' }"
      >
        <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 class="font-card text-lg text-highlighted">
              {{ exp.role }}
            </h2>
            <p class="text-sm text-primary">
              {{ exp.company }} · {{ exp.location }}
            </p>
          </div>
          <p class="font-label text-xs text-muted sm:text-right">
            {{ exp.period }}
          </p>
        </div>

        <ul class="space-y-2 text-sm leading-relaxed text-muted">
          <li
            v-for="(item, index) in exp.responsibilities"
            :key="index"
            class="flex gap-2"
          >
            <UIcon
              name="i-heroicons-check-circle"
              class="mt-0.5 size-4 shrink-0 text-primary"
            />
            <span>{{ item }}</span>
          </li>
        </ul>

        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="tech in exp.technologies"
            :key="tech"
            color="neutral"
            variant="subtle"
            size="sm"
          >
            {{ tech }}
          </UBadge>
        </div>
      </UCard>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

useSeoMeta({
  title: "Experience — Amir Maghami",
  description: "Professional experience and career highlights.",
});
</script>
