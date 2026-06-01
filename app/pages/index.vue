<template>
  <section
    class="relative flex min-h-[calc(100svh-11rem)] items-center sm:min-h-[calc(100svh-12rem)]"
  >
    <UContainer class="relative mx-auto max-w-5xl px-4 sm:px-8">
      <div
        class="flex flex-col items-center justify-center gap-6 py-8 sm:gap-7 lg:py-12"
      >
        <div class="relative flex items-center justify-center">
          <div class="hero-orbit" aria-hidden="true">
            <UBadge
              v-for="(orbit, i) in orbitTech"
              :key="orbit.icon"
              :class="['tech-pill absolute animate-tech-float', orbit.position]"
              :style="{ animationDelay: `${i * 0.4}s` }"
              variant="subtle"
              color="primary"
            >
              <UIcon :name="orbit.icon" class="size-4" />
              {{ orbit.label }}
            </UBadge>
          </div>
          <span class="hero-glow-ring opacity-70" aria-hidden="true" />
          <HeroLogo ref="heroLogoRef" />
        </div>

        <div ref="availabilityWrap" class="opacity-0">
          <UBadge color="primary" variant="subtle" size="md" class="font-mono">
            <span class="relative flex items-center gap-2">
              <span class="size-2 animate-pulse rounded-full bg-primary" />
              Available for new projects
            </span>
          </UBadge>
        </div>

        <h1
          ref="nameText"
          class="max-w-full break-words text-gradient-primary font-mono text-4xl font-extrabold leading-tight tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span ref="nameCursor" class="typewriter-cursor">|</span>
        </h1>

        <h2
          ref="titleText"
          class="font-mono text-lg font-medium text-primary opacity-0 sm:text-xl md:text-2xl"
        >
          <span ref="titleCursor" class="typewriter-cursor">|</span>
        </h2>

        <p
          ref="descriptionText"
          class="mx-auto max-w-2xl text-pretty font-sans text-sm leading-7 text-gray-300 opacity-0 sm:text-base md:text-lg"
        >
          <span ref="descCursor" class="typewriter-cursor">|</span>
        </p>

        <div
          ref="techRow"
          class="flex flex-wrap items-center justify-center gap-2 opacity-0"
        >
          <span
            v-for="tech in coreTech"
            :key="tech.label"
            class="tech-pill"
          >
            <UIcon :name="tech.icon" class="size-5" />
            {{ tech.label }}
          </span>
        </div>

        <div
          ref="statsContainer"
          class="grid w-full max-w-2xl grid-cols-3 gap-3 opacity-0"
        >
          <UiGlassPanel
            v-for="stat in heroStats"
            :key="stat.label"
            padding="sm"
            class="group text-center transition-colors hover:border-primary/40"
          >
            <UIcon
              :name="stat.icon"
              class="mx-auto mb-2 size-6 text-primary opacity-80 transition-transform group-hover:scale-110"
            />
            <p class="font-mono text-xl font-bold text-primary sm:text-2xl">
              {{ stat.value }}
            </p>
            <p class="mt-1 text-xs text-muted sm:text-sm">{{ stat.label }}</p>
          </UiGlassPanel>
        </div>

        <div
          ref="buttonsContainer"
          class="grid w-full max-w-md gap-3 opacity-0 sm:max-w-none sm:grid-flow-col sm:auto-cols-max sm:justify-center sm:gap-4"
        >
          <UButton
            to="/projects"
            size="xl"
            icon="i-heroicons-rocket-launch"
            color="primary"
            block
            class="justify-center shadow-xl shadow-primary/30 transition-transform duration-300 hover:scale-105 sm:w-auto"
          >
            View My Work
          </UButton>
          <UButton
            to="/contact"
            size="xl"
            color="neutral"
            variant="outline"
            icon="i-heroicons-envelope"
            block
            class="justify-center border-primary/30 bg-primary/5 backdrop-blur transition-transform duration-300 hover:scale-105 hover:border-primary/60 hover:bg-primary/10 sm:w-auto"
          >
            Get in Touch
          </UButton>
        </div>

        <div
          ref="quickLinksEl"
          class="flex flex-wrap items-center justify-center gap-2 opacity-0"
        >
          <UButton
            v-for="link in heroQuickLinks"
            :key="link.to"
            :to="link.to"
            size="sm"
            color="primary"
            variant="soft"
            :icon="link.icon"
            class="font-mono"
          >
            {{ link.label }}
          </UButton>
        </div>

        <div
          ref="socialRow"
          class="flex items-center gap-2 opacity-0"
        >
          <UTooltip v-for="social in socialLinks" :key="social.label" :text="social.label">
            <UButton
              :to="social.url"
              target="_blank"
              :icon="social.icon"
              color="neutral"
              variant="ghost"
              size="lg"
              :aria-label="social.label"
              class="hover:text-primary"
            />
          </UTooltip>
        </div>
      </div>

      <div
        ref="scrollCue"
        class="mt-6 flex flex-col items-center gap-1 opacity-0"
        aria-hidden="true"
      >
        <span class="font-mono text-xs uppercase tracking-widest text-muted">
          Explore
        </span>
        <UIcon
          name="i-heroicons-chevron-down"
          class="size-6 animate-bounce text-primary"
        />
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const heroLogoRef = ref<{ logoSvg: Ref<SVGElement | null> } | null>(null);
const availabilityWrap = ref<HTMLElement | null>(null);
const nameText = ref<HTMLElement | null>(null);
const nameCursor = ref<HTMLElement | null>(null);
const titleText = ref<HTMLElement | null>(null);
const titleCursor = ref<HTMLElement | null>(null);
const descriptionText = ref<HTMLElement | null>(null);
const descCursor = ref<HTMLElement | null>(null);
const techRow = ref<HTMLElement | null>(null);
const statsContainer = ref<HTMLElement | null>(null);
const buttonsContainer = ref<HTMLElement | null>(null);
const quickLinksEl = ref<HTMLElement | null>(null);
const socialRow = ref<HTMLElement | null>(null);
const scrollCue = ref<HTMLElement | null>(null);

const coreTech = [
  { label: "Vue.js", icon: "i-simple-icons-vuedotjs" },
  { label: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
  { label: "TypeScript", icon: "i-simple-icons-typescript" },
  { label: "Pinia", icon: "i-simple-icons-pinia" },
  { label: "Tailwind", icon: "i-simple-icons-tailwindcss" },
];

const orbitTech = [
  { label: "Three.js", icon: "i-simple-icons-threedotjs", position: "-left-2 top-8 sm:-left-16" },
  { label: "GSAP", icon: "i-heroicons-bolt", position: "-right-2 top-12 sm:-right-14" },
  { label: "Vite", icon: "i-simple-icons-vite", position: "bottom-4 -left-6 sm:-left-20" },
];

const heroStats = [
  { value: "6+", label: "Years exp.", icon: "i-heroicons-briefcase" },
  { value: "15+", label: "Technologies", icon: "i-heroicons-cpu-chip" },
  { value: "3", label: "Live projects", icon: "i-heroicons-rocket-launch" },
];

const heroQuickLinks = [
  { label: "About", to: "/about", icon: "i-heroicons-user" },
  { label: "Skills", to: "/skills", icon: "i-heroicons-light-bulb" },
  { label: "Experience", to: "/experiences", icon: "i-heroicons-briefcase" },
];

const socialLinks = [
  { label: "GitHub", icon: "i-simple-icons-github", url: "https://github.com/amirrr1987" },
  { label: "LinkedIn", icon: "i-simple-icons-linkedin", url: "https://www.linkedin.com/in/amirrr1987/" },
  { label: "Telegram", icon: "i-simple-icons-telegram", url: "https://chat.telegram.dev" },
];

const content = {
  name: "Amir Maghami",
  title: "Fullstack Developer · Vue / Nuxt",
  description:
    "I craft beautiful, intuitive, and high-performance web experiences — merging elegant design with clean, scalable code to build amazing things for the web.",
};

function revealTargets() {
  return [
    availabilityWrap.value,
    techRow.value,
    statsContainer.value,
    buttonsContainer.value,
    quickLinksEl.value,
    socialRow.value,
    scrollCue.value,
  ].filter(Boolean) as HTMLElement[];
}

onMounted(() => {
  const logoSvg = heroLogoRef.value?.logoSvg;
  const logoEl = logoSvg && "value" in logoSvg ? logoSvg.value : logoSvg;

  gsap.set(revealTargets(), { opacity: 0, y: 24 });

  const masterTL = gsap.timeline();

  if (logoEl) {
    masterTL.fromTo(
      logoEl,
      { opacity: 0, scale: 0.5, rotation: -30, filter: "blur(8px)" },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        filter: "blur(0px)",
        duration: 1.6,
        ease: "elastic.out(1, 0.4)",
      },
    );
  }

  masterTL.to(availabilityWrap.value, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "power2.out",
  }, "-=0.7");

  masterTL.to(nameText.value, {
    duration: 1.2,
    text: content.name,
    ease: "none",
    opacity: 1,
  }, "+=0.15");

  masterTL.to(titleText.value, {
    duration: 0.9,
    text: content.title,
    ease: "none",
    opacity: 1,
  }, "+=0.15");

  masterTL.to(descriptionText.value, {
    duration: 2.2,
    text: content.description,
    ease: "none",
    opacity: 1,
  }, "+=0.15");

  masterTL.to(revealTargets(), {
    opacity: 1,
    y: 0,
    duration: 0.75,
    stagger: 0.1,
    ease: "back.out(1.35)",
  }, "+=0.2");

  masterTL.to(
    [nameCursor.value, titleCursor.value, descCursor.value],
    { opacity: 0, duration: 0.5, repeat: -1, yoyo: true },
    "-=0.4",
  );
});
</script>

<style scoped>
.hero-orbit {
  width: min(100%, 22rem);
  height: 14rem;
}

@media (min-width: 640px) {
  .hero-orbit {
    width: 26rem;
    height: 16rem;
  }
}
</style>
