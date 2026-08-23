<template>
  <div class="">
    <!-- Hero -->
    <section
      class="relative flex min-h-[calc(100svh-5rem)] items-center text-white"
    >
      <UContainer
        class="px-4 text-center sm:px-8"
        :ui="{ base: 'max-w-4xl' }"
      >
        <div
          ref="heroRoot"
          class="flex flex-col items-center justify-center space-y-6"
        >
          <UBadge
            color="primary"
            variant="subtle"
            size="lg"
            class="opacity-0"
            data-hero-item
          >
            <span class="relative flex size-2">
              <span
                class="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60"
              />
              <span class="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for freelance & full-time
          </UBadge>

          <HeroLogo
            ref="heroLogo"
            class="h-32 w-auto opacity-0 sm:h-40"
          />

          <h1
            class="gradient-text font-title text-5xl leading-[1.1] tracking-tight sm:text-6xl md:text-7xl"
          >
            <span ref="nameText" />
            <span
              ref="nameCursor"
              class="typewriter-cursor"
            >|</span>
          </h1>

          <h2 class="font-subtitle text-lg text-primary/90 sm:text-xl md:text-2xl">
            Fullstack Developer
            <span class="text-muted"> · </span>
            <span ref="roleText">{{ roles[0] }}</span>
          </h2>

          <p
            ref="descriptionEl"
            class="body-copy mx-auto max-w-2xl text-muted opacity-0 font-menu"
          >
            {{ content.description }}
          </p>

          <div
            ref="buttonsContainer"
            class="flex flex-col items-center gap-3 opacity-0 sm:flex-row sm:gap-4"
          >
            <UButton
              to="/projects"
              size="xl"
              icon="i-heroicons-rocket-launch"
              color="primary"
              class="btn-premium w-full shadow-lg shadow-primary/25 sm:w-auto"
            >
              View My Work
            </UButton>
            <UButton
              to="/contact"
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-heroicons-envelope"
              class="btn-premium w-full sm:w-auto"
            >
              Get in Touch
            </UButton>
          </div>
        </div>
      </UContainer>

      <a
        href="#showcase"
        class="scroll-hint absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-primary"
        aria-label="Scroll to featured projects"
      >
        <span class="font-badge text-[10px] uppercase tracking-widest">Explore</span>
        <UIcon name="i-heroicons-chevron-down" class="size-5" />
      </a>
    </section>

    <!-- Stats -->
    <section class="relative z-10 px-4 pb-4 pt-2 sm:px-6 lg:px-10">
      <UContainer>
        <div
          class="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          data-reveal
        >
          <UiStatCounter
            :value="6"
            suffix="+"
            label="Years experience"
            icon="i-heroicons-briefcase"
            :immediate="true"
          />
          <UiStatCounter
            :value="15"
            suffix="+"
            label="Projects shipped"
            icon="i-heroicons-rocket-launch"
            :immediate="true"
          />
          <UiStatCounter
            :value="4"
            label="Companies"
            icon="i-heroicons-building-office-2"
            :immediate="true"
          />
          <UiStatCounter
            :value="25"
            suffix="+"
            label="Tech stack"
            icon="i-heroicons-code-bracket"
            :immediate="true"
          />
        </div>
      </UContainer>
    </section>

    <HomeTechMarquee />
    <HomeServicesBento />
    <HomeBentoShowcase />
    <HomeCtaBand />
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
const buttonsContainer = ref<HTMLElement | null>(null);

const roles = ["Vue.js", "Nuxt", "TypeScript", "Pinia", "Design Systems"];

const content = {
  name: "Amir Maghami",
  description:
    "I craft beautiful, intuitive, and high-performance web experiences — merging elegant design with clean, scalable code to build amazing things for the web.",
};

useSeoMeta({
  title: "Amir Maghami — Fullstack Developer",
  description: content.description,
});

useGsapScrollReveal();
useRotatingRole(roleText);

function showStaticHero() {
  if (nameText.value) nameText.value.textContent = content.name;
  if (nameCursor.value) nameCursor.value.style.display = "none";

  gsap.set(
    [
      heroLogo.value?.logoSvg,
      nameText.value,
      descriptionEl.value,
      buttonsContainer.value,
      ...gsap.utils.toArray("[data-hero-item]"),
    ],
    { opacity: 1, y: 0 },
  );
}

onMounted(() => {
  if (!import.meta.client) return;

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (reduced) {
    showStaticHero();
    return;
  }

  gsap.set(buttonsContainer.value, { y: 12 });
  gsap.set("[data-hero-item]", { opacity: 0, y: -8 });

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const logoEl = heroLogo.value?.logoSvg;

    tl.to("[data-hero-item]", { opacity: 1, y: 0, duration: 0.5 });

    if (logoEl) {
      tl.fromTo(
        logoEl,
        { opacity: 0, y: 20, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8 },
        "-=0.2",
      );
    }

    if (nameText.value) {
      tl.to(
        nameText.value,
        {
          opacity: 1,
          duration: 0.9,
          text: content.name,
          ease: "none",
        },
        "+=0.1",
      );
    }

    if (nameCursor.value) {
      tl.to(nameCursor.value, { opacity: 0, duration: 0.2 }, "+=0.05");
    }

    tl.to(
      [descriptionEl.value, buttonsContainer.value],
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
      "+=0.15",
    );
  }, heroRoot);

  onUnmounted(() => ctx.revert());
});
</script>

<style scoped>
.typewriter-cursor {
  display: inline-block;
  margin-left: 2px;
  font-weight: normal;
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
