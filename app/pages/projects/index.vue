<template>
  <div class="pb-14 sm:pb-16">
    <!-- Hero -->
    <section
      ref="heroRoot"
      class="projects-hero relative flex min-h-[min(70svh,32rem)] items-center px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
    >
      <span class="projects-hero-orb projects-hero-orb--a" aria-hidden="true" />
      <span class="projects-hero-orb projects-hero-orb--b" aria-hidden="true" />
      <span class="projects-hero-orb projects-hero-orb--c" aria-hidden="true" />

      <UContainer class="relative z-1 w-full">
        <div class="mx-auto max-w-3xl text-center">
          <p
            class="page-eyebrow mb-5 opacity-0"
            data-hero
          >
            Portfolio · {{ projects.length }} builds
          </p>
          <h1
            class="gradient-text font-page text-5xl leading-[1.05] tracking-tight opacity-0 sm:text-6xl md:text-7xl"
            data-hero
          >
            Projects
          </h1>
          <p
            class="body-copy mx-auto mt-5 max-w-xl text-muted opacity-0"
            data-hero
          >
            Live demos, open-source repos, and a flagship case study —
            Vue &amp; Nuxt work shaped for real users.
          </p>
          <div
            class="mt-8 flex flex-wrap items-center justify-center gap-3 opacity-0"
            data-hero
          >
            <UButton
              to="#work"
              size="lg"
              color="primary"
              icon="i-heroicons-squares-2x2"
              class="btn-premium"
            >
              Browse work
            </UButton>
            <UButton
              :to="flagship ? `/projects/${flagship.slug}` : '/contact'"
              size="lg"
              color="neutral"
              variant="outline"
              trailing-icon="i-heroicons-arrow-right"
              class="btn-premium"
            >
              {{ flagship ? "Flagship case study" : "Get in touch" }}
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Flagship spotlight -->
    <section
      v-if="flagship"
      class="relative z-10 px-4 pb-12 sm:px-6 sm:pb-16 lg:px-10"
    >
      <UContainer>
        <div
          class="glass-panel relative overflow-hidden p-1"
          data-reveal
        >
          <div
            class="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-violet-500/10"
            aria-hidden="true"
          />
          <div class="relative grid gap-0 lg:grid-cols-2">
            <div class="relative min-h-64 overflow-hidden sm:min-h-80 lg:min-h-112">
              <UiProjectPreview
                :theme="flagship.preview"
                :label="flagship.name"
                :url-label="flagshipHost"
                class="project-preview--hero min-h-full! rounded-none! border-0!"
              />
            </div>
            <div class="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p class="page-eyebrow mb-3">Flagship</p>
              <h2 class="font-section text-2xl text-highlighted sm:text-3xl md:text-4xl">
                {{ flagship.name }}
              </h2>
              <p class="font-subtitle mt-2 text-primary/90">
                {{ flagship.tagline }}
              </p>
              <p class="body-copy mt-4 text-muted">
                {{ flagship.description }}
              </p>
              <div class="mt-5 flex flex-wrap gap-2">
                <UBadge
                  v-for="tech in flagship.technologies"
                  :key="tech"
                  color="primary"
                  variant="soft"
                  size="sm"
                >
                  {{ tech }}
                </UBadge>
              </div>
              <div class="mt-8 flex flex-wrap gap-3">
                <UButton
                  :to="`/projects/${flagship.slug}`"
                  size="lg"
                  color="primary"
                  icon="i-heroicons-document-magnifying-glass"
                  class="btn-premium"
                >
                  Read case study
                </UButton>
                <UButton
                  v-if="flagship.liveUrl"
                  :to="flagship.liveUrl"
                  target="_blank"
                  size="lg"
                  color="neutral"
                  variant="outline"
                  trailing-icon="i-heroicons-arrow-top-right-on-square"
                  class="btn-premium"
                >
                  Live app
                </UButton>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- Grid -->
    <section
      id="work"
      class="relative z-10 scroll-mt-24 px-4 sm:px-6 lg:px-10"
    >
      <UContainer class="space-y-8">
        <div
          class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          data-reveal
        >
          <div>
            <p class="page-eyebrow mb-2">All work</p>
            <h2 class="display-section text-highlighted">
              Explore the archive
            </h2>
          </div>

          <div
            class="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Filter projects"
          >
            <button
              v-for="filter in filters"
              :key="filter.id"
              type="button"
              role="tab"
              :aria-selected="activeFilter === filter.id"
              class="projects-filter-chip"
              :class="{ 'is-active': activeFilter === filter.id }"
              @click="activeFilter = filter.id"
            >
              {{ filter.label }}
              <span
                class="font-badge text-[10px]"
                :class="activeFilter === filter.id ? 'opacity-70' : 'opacity-50'"
              >
                {{ filter.count }}
              </span>
            </button>
          </div>
        </div>

        <p class="label-mono" data-reveal>
          Showing
          <span class="text-primary">{{ filteredProjects.length }}</span>
          of {{ projects.length }}
        </p>

        <div
          v-if="filteredProjects.length"
          :key="activeFilter"
          class="bento-grid"
        >
          <UiProjectCard
            v-for="(project, index) in filteredProjects"
            :key="project.slug"
            :project="project"
            :variant="isFeaturedSlot(project, index) ? 'featured' : 'default'"
            :tilt="!isFeaturedSlot(project, index)"
            :shine="true"
          />
        </div>

        <UiGlassPanel
          v-else
          padding="lg"
          class="text-center"
          data-reveal
        >
          <UIcon
            name="i-heroicons-folder-open"
            class="mx-auto size-12 text-primary/70"
          />
          <p class="mt-4 font-card text-lg text-highlighted">
            No projects in this filter
          </p>
          <p class="body-copy mt-2 text-muted">
            Try another category or show everything.
          </p>
          <UButton
            class="btn-premium mt-6"
            color="primary"
            variant="soft"
            @click="activeFilter = 'all'"
          >
            Show all projects
          </UButton>
        </UiGlassPanel>

        <!-- CTA -->
        <div
          class="cta-band glass-panel relative mt-4 flex flex-col items-center justify-between gap-5 overflow-hidden px-6 py-8 text-center sm:flex-row sm:px-8 sm:text-left"
          data-reveal
        >
          <div class="relative z-1 max-w-lg">
            <h2 class="font-section text-2xl text-highlighted sm:text-3xl">
              Building something next?
            </h2>
            <p class="body-copy mt-2 text-muted">
              Vue, Nuxt, and UI engineering for products that need to ship polished.
            </p>
          </div>
          <div class="relative z-1 flex shrink-0 flex-col gap-2 sm:flex-row">
            <UButton
              to="/contact"
              size="xl"
              color="primary"
              icon="i-heroicons-paper-airplane"
              class="btn-premium"
            >
              Start a project
            </UButton>
            <UButton
              to="https://github.com/amirrr1987"
              target="_blank"
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-simple-icons-github"
              class="btn-premium"
            >
              GitHub
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import type { Project } from "~/types/project";

type FilterId = "all" | "live" | "flagship" | "featured";

const { projects } = useProjects();

const heroRoot = ref<HTMLElement | null>(null);
const activeFilter = ref<FilterId>("all");

const flagship = computed(
  () =>
    projects.value.find((p) => p.caseStudy) ??
    projects.value.find((p) => p.featured) ??
    null,
);

const flagshipHost = computed(() => {
  if (!flagship.value?.liveUrl) return "demo.app";
  try {
    return new URL(flagship.value.liveUrl).hostname.replace("www.", "");
  } catch {
    return "demo.app";
  }
});

const liveCount = computed(
  () => projects.value.filter((p) => Boolean(p.liveUrl)).length,
);
const flagshipCount = computed(
  () => projects.value.filter((p) => Boolean(p.caseStudy)).length,
);
const featuredCount = computed(
  () => projects.value.filter((p) => Boolean(p.featured)).length,
);

const filters = computed(() => [
  { id: "all" as const, label: "All", count: projects.value.length },
  { id: "live" as const, label: "Live", count: liveCount.value },
  { id: "flagship" as const, label: "Flagship", count: flagshipCount.value },
  { id: "featured" as const, label: "Featured", count: featuredCount.value },
]);

const archiveProjects = computed(() => {
  const list = [...projects.value];
  if (flagship.value) {
    return list.filter((p) => p.slug !== flagship.value!.slug);
  }
  return list;
});

const sortedProjects = computed(() =>
  [...archiveProjects.value].sort((a, b) => {
    const rank = (p: Project) =>
      (p.caseStudy ? 4 : 0) + (p.featured ? 2 : 0) + (p.liveUrl ? 1 : 0);
    return rank(b) - rank(a);
  }),
);

const filteredProjects = computed(() => {
  const source =
    activeFilter.value === "flagship"
      ? [...projects.value].sort((a, b) => {
          const rank = (p: Project) =>
            (p.caseStudy ? 4 : 0) + (p.featured ? 2 : 0) + (p.liveUrl ? 1 : 0);
          return rank(b) - rank(a);
        })
      : sortedProjects.value;

  switch (activeFilter.value) {
    case "live":
      return source.filter((p) => Boolean(p.liveUrl));
    case "flagship":
      return source.filter((p) => Boolean(p.caseStudy));
    case "featured":
      return source.filter((p) => Boolean(p.featured));
    default:
      return source;
  }
});

function isFeaturedSlot(project: Project, index: number) {
  if (activeFilter.value !== "all") return false;
  return index === 0 && Boolean(project.featured);
}

useSeoMeta({
  title: "Projects — Amir Maghami",
  description:
    "Portfolio projects with live demos, open-source repositories, and case studies.",
});

useGsapScrollReveal({ stagger: 0.08 });

onMounted(() => {
  if (!import.meta.client || !heroRoot.value) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = heroRoot.value.querySelectorAll("[data-hero]");

  if (reduced) {
    gsap.set(items, { opacity: 1, y: 0 });
    return;
  }

  const ctx = gsap.context(() => {
    gsap.fromTo(
      items,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.05,
      },
    );
  }, heroRoot);

  onUnmounted(() => ctx.revert());
});
</script>
