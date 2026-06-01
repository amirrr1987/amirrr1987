<template>
  <section class="relative z-10">
    <UContainer class="space-y-8 sm:space-y-10">
      <UiPageHeader
        title="Technical Skills"
        eyebrow="Stack"
        icon="i-heroicons-cpu-chip"
        description="A snapshot of the technologies, frameworks, and tools I work with."
        show-separator
      />

      <UTabs
        :items="skillTabs"
        color="primary"
        variant="pill"
        class="w-full"
        :ui="{
          list: 'bg-slate-950/50 ring-1 ring-white/10 backdrop-blur p-1 rounded-2xl',
          trigger: 'font-mono text-sm',
        }"
      >
        <template
          v-for="tab in skillTabs"
          :key="tab.slot"
          #[tab.slot]
        >
          <div
            class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            <UCard
              v-for="(skill, index) in tab.skills"
              :key="`${tab.slot}-${skill}-${index}`"
              data-reveal
              class="transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
              :ui="{ body: 'flex min-h-14 items-center justify-center p-4 text-center' }"
            >
              <span class="font-mono text-sm font-medium text-highlighted">
                {{ skill }}
              </span>
            </UCard>
          </div>
        </template>
      </UTabs>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

const skillTabs = computed(() => [
  {
    label: "Frontend",
    icon: "i-heroicons-code-bracket",
    slot: "frontend",
    skills: [
      ...cvStore.coreCompetencies.frontEnd.languagesAndStyling,
      ...cvStore.coreCompetencies.frontEnd.frameworksAndLibraries,
      ...cvStore.coreCompetencies.frontEnd.uiFrameworks,
      ...cvStore.coreCompetencies.frontEnd.stateManagement,
    ],
  },
  {
    label: "Backend",
    icon: "i-heroicons-server",
    slot: "backend",
    skills: [
      ...cvStore.coreCompetencies.backEnd.frameworks,
      ...cvStore.coreCompetencies.backEnd.databasesAndOrms,
    ],
  },
  {
    label: "Tools",
    icon: "i-heroicons-wrench-screwdriver",
    slot: "tools",
    skills: [
      ...cvStore.coreCompetencies.toolsAndMethodologies.versionControl,
      ...cvStore.coreCompetencies.toolsAndMethodologies.testing,
      ...cvStore.coreCompetencies.toolsAndMethodologies.buildToolsAndPlatforms,
      ...cvStore.coreCompetencies.toolsAndMethodologies.projectManagement,
      ...cvStore.coreCompetencies.toolsAndMethodologies.devOpsAndOthers,
    ],
  },
]);

useGsapReveal();
</script>
