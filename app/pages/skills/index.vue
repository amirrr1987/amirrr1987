<template>
  <div class="px-4 py-6 sm:px-6 sm:py-8 lg:px-10">
    <UContainer class="max-w-4xl space-y-5">
      <header class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between" data-reveal>
        <div>
          <p class="page-eyebrow mb-2">Dependencies</p>
          <h1 class="font-page text-3xl text-highlighted sm:text-4xl">
            <span class="font-mono text-primary">pnpm</span> skills
          </h1>
          <p class="body-copy mt-2 max-w-lg text-sm text-muted">
            Production stack as a manifest — {{ totalCount }} packages, 0 deprecated.
          </p>
        </div>
        <p class="font-mono text-xs text-muted">
          lockfile v1 · workspace
        </p>
      </header>

      <div
        class="skills-manifest overflow-hidden rounded-2xl border border-white/10 bg-slate-950/85"
        data-reveal
      >
        <div class="flex items-center gap-2 border-b border-white/8 bg-black/45 px-4 py-2.5">
          <span class="size-2.5 rounded-full bg-rose-500/90" />
          <span class="size-2.5 rounded-full bg-amber-400/90" />
          <span class="size-2.5 rounded-full bg-emerald-500/90" />
          <p class="font-mono ml-2 truncate text-[11px] text-muted">
            $ pnpm list --filter {{ activeScope }}/*
          </p>
        </div>

        <div class="flex flex-col gap-3 border-b border-white/8 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="scope in scopes"
              :key="scope.id"
              type="button"
              class="skills-scope-chip"
              :class="{ 'is-active': activeScope === scope.id }"
              @click="activeScope = scope.id"
            >
              {{ scope.label }}
              <span class="opacity-60">{{ scope.packages.length }}</span>
            </button>
          </div>

          <UInput
            v-model="query"
            placeholder="pnpm search…"
            size="sm"
            icon="i-heroicons-magnifying-glass"
            class="max-w-xs font-mono"
            :ui="{ base: 'bg-black/30 border-white/10' }"
          />
        </div>

        <!-- package.json snippet -->
        <div class="border-b border-white/8 bg-black/30 px-4 py-3 font-mono text-[10px] leading-relaxed text-muted sm:text-[11px]">
          {<br>
          &nbsp;&nbsp;<span class="text-violet-300">"name"</span>: <span class="text-primary">"@amir/portfolio-stack"</span>,<br>
          &nbsp;&nbsp;<span class="text-violet-300">"scope"</span>: <span class="text-highlighted">"{{ activeScopeLabel }}"</span>,<br>
          &nbsp;&nbsp;<span class="text-violet-300">"count"</span>: {{ filteredPackages.length }}<br>
          }
        </div>

        <ul class="max-h-[min(50svh,24rem)] divide-y divide-white/5 overflow-y-auto">
          <li
            v-for="(pkg, index) in filteredPackages"
            :key="`${pkg.name}-${index}`"
            class="flex items-center justify-between gap-3 px-4 py-2.5 font-mono text-xs transition-colors hover:bg-white/3 sm:text-sm"
          >
            <span class="min-w-0 truncate">
              <span class="text-violet-300/80">{{ activeScope }}/</span>
              <span class="text-highlighted">{{ pkg.name }}</span>
            </span>
            <span
              class="shrink-0 rounded-md border px-2 py-0.5 text-[10px]"
              :class="
                pkg.tier === 'core'
                  ? 'border-primary/30 bg-primary/10 text-primary'
                  : 'border-white/10 bg-white/5 text-muted'
              "
            >
              {{ pkg.version }}
            </span>
          </li>
        </ul>

        <footer class="flex flex-wrap items-center justify-between gap-2 border-t border-white/8 bg-primary/5 px-4 py-2.5 font-mono text-[10px] text-muted">
          <span>
            <span class="text-primary">{{ filteredPackages.length }}</span> packages shown
          </span>
          <span>peer: vue@^3 · node@&gt;=20</span>
          <span class="text-primary">audit: 0 vulnerabilities</span>
        </footer>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

type ScopeId = "frontend" | "backend" | "tooling";

interface SkillPackage {
  name: string;
  version: string;
  tier: "core" | "standard";
}

const cvStore = useCvStore();
const activeScope = ref<ScopeId>("frontend");
const query = ref("");

const coreSkills = new Set([
  "vue.js (v2/v3)",
  "nuxt.js",
  "typescript",
  "javascript (es6+)",
  "pinia",
  "tailwindcss",
  "vite",
  "git",
  "nest.js",
]);

function toPackageName(skill: string) {
  return skill
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/\.js/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 28);
}

function toVersion(skill: string, tier: "core" | "standard") {
  if (/vue/i.test(skill)) return "^3.5";
  if (/nuxt/i.test(skill)) return "^4.0";
  if (/typescript/i.test(skill)) return "^5.6";
  if (/nest/i.test(skill)) return "^11.0";
  if (/react/i.test(skill)) return "^19.0";
  if (tier === "core") return "^3.0";
  return "^2.0";
}

function mapSkills(skills: string[]): SkillPackage[] {
  return skills.map((skill) => {
    const tier = coreSkills.has(skill.toLowerCase()) ? "core" : "standard";
    return {
      name: toPackageName(skill),
      version: toVersion(skill, tier),
      tier,
    };
  });
}

const scopes = computed(() => {
  const c = cvStore.coreCompetencies;
  return [
    {
      id: "frontend" as const,
      label: "@frontend",
      packages: mapSkills([
        ...c.frontEnd.languagesAndStyling,
        ...c.frontEnd.frameworksAndLibraries,
        ...c.frontEnd.uiFrameworks,
        ...c.frontEnd.stateManagement,
      ]),
    },
    {
      id: "backend" as const,
      label: "@backend",
      packages: mapSkills([
        ...c.backEnd.frameworks,
        ...c.backEnd.databasesAndOrms,
      ]),
    },
    {
      id: "tooling" as const,
      label: "@tooling",
      packages: mapSkills([
        ...c.toolsAndMethodologies.versionControl,
        ...c.toolsAndMethodologies.testing,
        ...c.toolsAndMethodologies.buildToolsAndPlatforms,
        ...c.toolsAndMethodologies.projectManagement,
        ...c.toolsAndMethodologies.devOpsAndOthers,
      ]),
    },
  ];
});

const activeScopeLabel = computed(
  () => scopes.value.find((s) => s.id === activeScope.value)?.label ?? "@frontend",
);

const activePackages = computed(
  () => scopes.value.find((s) => s.id === activeScope.value)?.packages ?? [],
);

const filteredPackages = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return activePackages.value;
  return activePackages.value.filter((p) => p.name.includes(q));
});

const totalCount = computed(() =>
  scopes.value.reduce((n, s) => n + s.packages.length, 0),
);

useSeoMeta({
  title: "Skills — Amir Maghami",
  description: "Frontend, backend, and tooling skills as a production dependency manifest.",
});

useGsapScrollReveal({ stagger: 0.05 });
</script>
