<template>
  <div class="pb-16 sm:pb-20">
    <!-- Editorial intro — left-weighted, not centered like Projects -->
    <section class="relative px-4 pt-12 sm:px-6 sm:pt-16 lg:px-10 lg:pt-20">
      <UContainer>
        <div class="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
          <div class="lg:col-span-7" data-reveal>
            <p class="page-eyebrow mb-4">Career path</p>
            <h1 class="font-page text-4xl leading-[1.08] tracking-tight text-highlighted sm:text-5xl md:text-6xl">
              Experience
              <span class="gradient-text block">built in public</span>
            </h1>
            <p class="body-copy mt-5 max-w-lg text-muted">
              From corporate sites to open banking panels — roles, ownership,
              and the stacks that shipped along the way.
            </p>
          </div>

          <aside
            class="career-aside glass-panel relative overflow-hidden p-5 sm:p-6 lg:col-span-5"
            data-reveal
          >
            <div
              class="absolute -right-8 -top-8 size-32 rounded-full bg-primary/15 blur-3xl"
              aria-hidden="true"
            />
            <p class="label-mono relative z-1 mb-4">Trajectory</p>
            <div class="relative z-1 space-y-4">
              <div class="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3">
                <span class="font-badge text-xs text-muted">Span</span>
                <span class="font-mono text-lg text-primary">{{ yearsSpan }}+</span>
              </div>
              <div class="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3">
                <span class="font-badge text-xs text-muted">Roles</span>
                <span class="font-mono text-lg text-highlighted">{{ experiences.length }}</span>
              </div>
              <div class="flex items-baseline justify-between gap-4 border-b border-white/5 pb-3">
                <span class="font-badge text-xs text-muted">Now</span>
                <span class="font-card text-sm text-highlighted">{{ current?.company }}</span>
              </div>
              <div class="flex items-baseline justify-between gap-4">
                <span class="font-badge text-xs text-muted">Focus</span>
                <span class="text-sm text-muted">Vue · Nuxt · TS</span>
              </div>
            </div>

            <!-- Mini year spine -->
            <div
              class="relative z-1 mt-6 flex items-center gap-2 font-badge text-[10px] uppercase tracking-widest text-muted"
              aria-hidden="true"
            >
              <span>2019</span>
              <span class="h-px flex-1 bg-linear-to-r from-primary/60 via-primary/20 to-transparent" />
              <span class="text-primary">Present</span>
            </div>
          </aside>
        </div>
      </UContainer>
    </section>

    <!-- Now strip — horizontal status, not a media spotlight -->
    <section
      v-if="current"
      class="relative z-10 px-4 pt-10 sm:px-6 sm:pt-12 lg:px-10"
    >
      <UContainer>
        <div
          class="flex flex-col gap-4 rounded-2xl border border-primary/25 bg-primary/5 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          data-reveal
        >
          <div class="flex items-start gap-3 sm:items-center">
            <span class="relative mt-1 flex size-2.5 shrink-0 sm:mt-0">
              <span
                class="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-50"
              />
              <span class="relative inline-flex size-2.5 rounded-full bg-primary" />
            </span>
            <div>
              <p class="font-badge text-[10px] uppercase tracking-[0.2em] text-primary">
                Currently
              </p>
              <p class="mt-0.5 text-sm text-highlighted sm:text-base">
                <span class="font-card">{{ current.role }}</span>
                <span class="text-muted"> at </span>
                {{ current.company }}
              </p>
            </div>
          </div>
          <p class="font-label pl-5 text-xs text-muted sm:pl-0 sm:text-right">
            {{ current.period }}
          </p>
        </div>
      </UContainer>
    </section>

    <!-- Zigzag timeline -->
    <section
      id="path"
      class="relative z-10 scroll-mt-24 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-10"
    >
      <UContainer class="max-w-5xl">
        <div class="mb-2 flex items-end justify-between gap-4" data-reveal>
          <div>
            <p class="page-eyebrow mb-2">Timeline</p>
            <h2 class="display-section text-highlighted">
              The path so far
            </h2>
          </div>
          <a
            href="#education"
            class="label-mono hidden text-primary transition-colors hover:text-highlighted sm:inline"
          >
            Jump to education ↓
          </a>
        </div>

        <UiExperienceTimeline :experiences="experiences" />
      </UContainer>
    </section>

    <!-- Education chapter — quiet close, not a sales CTA -->
    <section
      id="education"
      class="relative z-10 scroll-mt-24 px-4 pt-10 sm:px-6 sm:pt-14 lg:px-10"
    >
      <UContainer class="max-w-5xl">
        <div class="grid gap-6 lg:grid-cols-12 lg:gap-10" data-reveal>
          <div class="lg:col-span-4">
            <p class="page-eyebrow mb-2">Foundations</p>
            <h2 class="font-section text-2xl text-highlighted sm:text-3xl">
              Education
            </h2>
            <p class="body-copy mt-3 text-muted">
              Where the craft started — before the production floors.
            </p>
          </div>

          <div class="space-y-4 lg:col-span-8">
            <div
              v-for="edu in education"
              :key="edu.degree"
              class="rounded-2xl border border-white/10 border-l-primary/60 bg-slate-950/40 px-5 py-5 sm:px-6"
            >
              <p class="font-label text-xs text-primary">
                {{ edu.years }}
              </p>
              <h3 class="font-card mt-2 text-lg text-highlighted">
                {{ edu.degree }}
              </h3>
              <p class="mt-1 text-sm text-muted">
                {{ edu.institution }}
                <span class="text-white/20"> · </span>
                {{ edu.location }}
              </p>
            </div>

            <div class="flex flex-wrap gap-3 pt-2">
              <UButton
                to="/AmirMagjami-Resume.pdf"
                download
                target="_blank"
                color="primary"
                variant="soft"
                icon="i-heroicons-document-arrow-down"
                class="btn-premium"
              >
                Download CV
              </UButton>
              <UButton
                to="/skills"
                color="neutral"
                variant="outline"
                trailing-icon="i-heroicons-arrow-right"
                class="btn-premium"
              >
                View skills
              </UButton>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCvStore } from "~/stores/cv.store";

const cvStore = useCvStore();

const experiences = computed(() => cvStore.professionalExperience);
const education = computed(() => cvStore.education);
const current = computed(() => experiences.value[0] ?? null);

const yearsSpan = computed(() => {
  // Career start ~2019 from HakimTejarat
  const start = 2019;
  const now = new Date().getFullYear();
  return Math.max(1, now - start);
});

useSeoMeta({
  title: "Experience — Amir Maghami",
  description:
    "Professional experience across Vue, Nuxt, and front-end engineering roles.",
});

useGsapScrollReveal({ stagger: 0.1 });
</script>
