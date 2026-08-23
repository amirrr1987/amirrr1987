<template>
  <div class="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
    <UContainer class="space-y-10">
      <UiPageHeader
        title="Skills"
        description="Technologies and tools I use in production work."
      />

      <UTabs
        :items="tabs"
        color="primary"
        variant="pill"
        class="w-full"
        :ui="{
          list: 'glass-panel p-1.5 ring-0',
          trigger:
            'font-tab text-sm data-[state=active]:shadow-md data-[state=active]:shadow-primary/20',
        }"
      >
        <template
          v-for="tab in tabs"
          :key="tab.slot"
          #[tab.slot]
        >
          <div
            class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            data-reveal
          >
            <UBadge
              v-for="(skill, index) in tab.skills"
              :key="`${tab.slot}-${skill}-${index}`"
              color="primary"
              variant="soft"
              size="lg"
              class="flex h-12 items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/15"
            >
              {{ skill }}
            </UBadge>
          </div>
        </template>
      </UTabs>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

useSeoMeta({
  title: "Skills — Amir Maghami",
  description: "Frontend, backend, and tooling skills.",
});

useGsapScrollReveal({ stagger: 0.03 });

const tabs = computed(() => [
  {
    label: "Frontend",
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
    slot: "backend",
    skills: [
      ...cvStore.coreCompetencies.backEnd.frameworks,
      ...cvStore.coreCompetencies.backEnd.databasesAndOrms,
    ],
  },
  {
    label: "Tools",
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
</script>
