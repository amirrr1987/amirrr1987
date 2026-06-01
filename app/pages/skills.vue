<template>
  <UiGradientSection class="relative z-10">
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
          list: 'glass-panel p-1.5 ring-0',
          trigger: 'font-mono text-sm data-[state=active]:shadow-md data-[state=active]:shadow-primary/20',
        }"
      >
        <template v-for="tab in skillTabs" :key="tab.slot" #[tab.slot]>
          <div
            class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            <UiTiltCard
              v-for="(skill, index) in tab.skills"
              :key="`${tab.slot}-${skill}-${index}`"
              data-reveal
            >
              <UCard
                class="glass-panel !rounded-[calc(1.5rem-1px)] !bg-slate-950/50 !shadow-none ring-0"
                :ui="{ body: 'flex min-h-14 items-center justify-center p-4 text-center' }"
              >
                <span class="font-mono text-sm font-medium text-highlighted">
                  {{ skill }}
                </span>
              </UCard>
            </UiTiltCard>
          </div>
        </template>
      </UTabs>
    </UContainer>
  </UiGradientSection>
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

useGsapScrollReveal({ stagger: 0.06 });
</script>
