<template>
  <div>
    <section
      class="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden text-white"
    >
      <SceneHeroOrbit />

      <UContainer class="relative z-1 px-4 text-center sm:px-8" :ui="{ base: 'max-w-3xl' }">
        <div ref="heroRoot" class="flex flex-col items-center space-y-5 sm:space-y-6">
          <UBadge
            color="primary"
            variant="subtle"
            size="lg"
            class="opacity-0 backdrop-blur-sm"
            data-hero-item
          >
            <span class="relative flex size-2">
              <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span class="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for work
          </UBadge>

          <HeroLogo ref="heroLogo" class="h-28 w-auto opacity-0 sm:h-36" />

          <h1 class="gradient-text font-title text-4xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            <span ref="nameText" />
            <span ref="nameCursor" class="typewriter-cursor">|</span>
          </h1>

          <h2 class="font-subtitle text-base text-primary/90 sm:text-xl md:text-2xl">
            Fullstack Developer
            <span class="text-muted"> · </span>
            <span ref="roleText">{{ roles[0] }}</span>
          </h2>

          <p
            ref="descriptionEl"
            class="body-copy mx-auto max-w-xl text-muted opacity-0 sm:text-base"
          >
            {{ content.description }}
          </p>

          <div
            ref="statsRow"
            class="grid w-full max-w-lg grid-cols-4 gap-2 opacity-0"
          >
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-xl border border-white/8 bg-black/20 px-2 py-2.5 backdrop-blur-sm"
            >
              <p class="font-mono text-base font-bold text-primary sm:text-lg">
                {{ stat.value }}{{ stat.suffix }}
              </p>
              <p class="label-mono mt-0.5 text-[9px] sm:text-[10px]">{{ stat.label }}</p>
            </div>
          </div>

          <div
            ref="buttonsContainer"
            class="flex w-full flex-col items-center gap-3 opacity-0 sm:w-auto sm:flex-row"
          >
            <UButton
              to="/projects"
              size="xl"
              icon="i-heroicons-rocket-launch"
              color="primary"
              class="btn-premium w-full shadow-lg shadow-primary/25 sm:w-auto"
            >
              View my work
            </UButton>
            <UButton
              to="/contact"
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-heroicons-envelope"
              class="btn-premium w-full sm:w-auto"
            >
              Get in touch
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <section class="relative z-10 px-4 pb-14 pt-2 sm:px-6 lg:px-10">
      <UContainer class="space-y-4">
        <div class="grid gap-4 sm:grid-cols-2" data-reveal>
          <UiProjectCard
            v-for="project in teaser"
            :key="project.slug"
            :project="project"
            variant="compact"
            :tilt="false"
            :shine="false"
          />
        </div>

        <div
          class="cta-band flex flex-col items-center justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 sm:flex-row sm:px-6"
          data-reveal
        >
          <p class="text-center text-sm text-muted sm:text-left">
            <span class="font-section text-highlighted">Ready to ship?</span>
            · {{ totalProjects }}+ live projects
          </p>
          <div class="flex shrink-0 gap-2">
            <UButton to="/projects" color="primary" size="md" class="btn-premium">
              All projects
            </UButton>
            <UButton
              to="/contact"
              color="neutral"
              variant="outline"
              size="md"
              icon="i-heroicons-paper-airplane"
              class="btn-premium"
            >
              Contact
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";

const heroRoot = ref<HTMLElement | null>(null);
const heroLogo = ref<{ logoSvg: SVGElement | null } | null>(null);
const nameText = ref<HTMLElement | null>(null);
const nameCursor = ref<HTMLElement | null>(null);
const roleText = ref<HTMLElement | null>(null);
const descriptionEl = ref<HTMLElement | null>(null);
const statsRow = ref<HTMLElement | null>(null);
const buttonsContainer = ref<HTMLElement | null>(null);

const roles = ["Vue.js", "Nuxt", "TypeScript", "Pinia", "Design Systems"];

const content = {
  name: "Amir Maghami",
  description:
    "Beautiful, high-performance web apps — Vue, Nuxt, and polished UI for production teams.",
};

const { featured, projects } = useProjects();
const teaser = computed(() => featured.value.slice(0, 2));
const totalProjects = computed(() => projects.value.length);

const stats = [
  { value: 6, suffix: "+", label: "Years" },
  { value: 15, suffix: "+", label: "Projects" },
  { value: 4, label: "Companies" },
  { value: 25, suffix: "+", label: "Stack" },
];

useSeoMeta({
  title: "Amir Maghami — Fullstack Developer",
  description: content.description,
});

useGsapScrollReveal({ stagger: 0.06 });
useRotatingRole(roleText);

function showStaticHero() {
  if (nameText.value) nameText.value.textContent = content.name;
  if (nameCursor.value) nameCursor.value.style.display = "none";
  gsap.set(
    [
      heroLogo.value?.logoSvg,
      nameText.value,
      descriptionEl.value,
      statsRow.value,
      buttonsContainer.value,
      ...gsap.utils.toArray("[data-hero-item]"),
    ],
    { opacity: 1, y: 0 },
  );
}

onMounted(() => {
  if (!import.meta.client) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    showStaticHero();
    return;
  }

  gsap.set(buttonsContainer.value, { y: 10 });
  gsap.set(statsRow.value, { y: 8 });
  gsap.set("[data-hero-item]", { opacity: 0, y: -8 });

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const logoEl = heroLogo.value?.logoSvg;

    tl.to("[data-hero-item]", { opacity: 1, y: 0, duration: 0.5 });

    if (logoEl) {
      tl.fromTo(
        logoEl,
        { opacity: 0, y: 16, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 },
        "-=0.2",
      );
    }

    if (nameText.value) {
      tl.to(
        nameText.value,
        { opacity: 1, duration: 0.85, text: content.name, ease: "none" },
        "+=0.08",
      );
    }

    if (nameCursor.value) {
      tl.to(nameCursor.value, { opacity: 0, duration: 0.15 }, "+=0.05");
    }

    tl.to(
      [descriptionEl.value, statsRow.value, buttonsContainer.value],
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
      "+=0.12",
    );
  }, heroRoot);

  onUnmounted(() => ctx.revert());
});
</script>

<style scoped>
.typewriter-cursor {
  display: inline-block;
  margin-left: 2px;
  color: var(--ui-primary);
  animation: cursor-blink 1s step-end infinite;
}

@media (prefers-reduced-motion: reduce) {
  .typewriter-cursor {
    animation: none;
  }
}

@keyframes cursor-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
