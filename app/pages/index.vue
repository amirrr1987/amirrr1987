<template>
  <div>
    <section
      class="relative flex min-h-[calc(100svh-11rem)] items-center sm:min-h-[calc(100svh-12rem)]"
    >
      <UContainer class="relative mx-auto max-w-5xl px-4 sm:px-8">
        <div
          class="flex flex-col items-center justify-center gap-6 py-8 sm:gap-7 lg:py-12"
        >
          <div ref="logoParallaxWrap" class="relative flex items-center justify-center">
            <span class="hero-glow-ring scale-110 opacity-80" aria-hidden="true" />
            <span class="hero-pulse-ring" aria-hidden="true" />
            <HeroLogo ref="heroLogoRef" />
          </div>

          <div ref="availabilityWrap" class="opacity-0">
            <UBadge color="primary" variant="subtle" size="md" class="status-ping font-mono">
              <span class="relative flex items-center gap-2">
                <span class="size-2 rounded-full bg-primary shadow-[0_0_10px_var(--ui-primary)]" />
                Available for new projects
              </span>
            </UBadge>
          </div>

          <h1
            ref="nameText"
            class="text-gradient-primary text-shimmer max-w-full break-words text-center font-mono text-4xl font-extrabold leading-tight tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span ref="nameCursor" class="typewriter-cursor">|</span>
          </h1>

          <h2
            ref="titleText"
            class="text-center font-mono text-lg font-medium text-muted opacity-0 sm:text-xl md:text-2xl"
          >
            <span class="text-highlighted">I'm a </span>
            <span
              ref="roleWord"
              class="text-gradient-primary inline-block min-w-[7ch] font-bold"
            >Vue.js</span>
            <span class="text-highlighted"> Specialist</span>
          </h2>

          <p
            ref="descriptionText"
            class="mx-auto max-w-2xl text-pretty text-center font-sans text-sm leading-7 text-gray-300 opacity-0 sm:text-base md:text-lg"
          >
            <span ref="descCursor" class="typewriter-cursor">|</span>
          </p>

          <div
            ref="statsContainer"
            class="grid w-full max-w-2xl grid-cols-3 gap-3 opacity-0"
          >
            <UiStatCounter
              v-for="stat in heroStats"
              :key="stat.label"
              :value="stat.value"
              :suffix="stat.suffix"
              :label="stat.label"
              :icon="stat.icon"
              immediate
            />
          </div>

          <div
            ref="buttonsContainer"
            class="grid w-full max-w-md gap-3 opacity-0 sm:max-w-none sm:grid-flow-col sm:auto-cols-max sm:justify-center sm:gap-4"
          >
            <UiMagneticWrap class="w-full sm:w-auto">
              <div ref="ctaPrimaryWrap" class="w-full">
                <UButton
                  to="#showcase"
                  size="xl"
                  icon="i-heroicons-sparkles"
                  color="primary"
                  block
                  class="btn-premium justify-center shadow-xl shadow-primary/35 hover:shadow-[0_0_32px_rgba(66,184,131,0.5)]"
                >
                  See Featured Work
                </UButton>
              </div>
            </UiMagneticWrap>
            <UiMagneticWrap class="w-full sm:w-auto">
              <div ref="ctaSecondaryWrap" class="w-full">
                <UButton
                  to="/contact"
                  size="xl"
                  color="neutral"
                  variant="outline"
                  icon="i-heroicons-envelope"
                  block
                  class="btn-premium justify-center border-primary/30 bg-primary/5 backdrop-blur hover:border-primary/60 hover:bg-primary/10"
                >
                  Get in Touch
                </UButton>
              </div>
            </UiMagneticWrap>
          </div>

          <div ref="socialRow" class="flex items-center gap-2 opacity-0">
            <UTooltip
              v-for="social in socialLinks"
              :key="social.label"
              :text="social.label"
            >
              <UButton
                :to="social.url"
                target="_blank"
                :icon="social.icon"
                color="neutral"
                variant="ghost"
                size="lg"
                :aria-label="social.label"
                class="hover:text-primary hover:drop-shadow-[0_0_8px_rgba(66,184,131,0.5)]"
              />
            </UTooltip>
          </div>
        </div>

        <div ref="scrollCue" class="mt-6 flex justify-center opacity-0">
        <NuxtLink
          to="#showcase"
          class="flex flex-col items-center gap-1 transition-colors hover:text-primary"
          aria-label="Scroll to featured projects"
        >
          <span class="font-mono text-xs uppercase tracking-widest text-muted">
            Scroll
          </span>
          <UIcon
            name="i-heroicons-chevron-down"
            class="size-6 animate-bounce text-primary"
          />
        </NuxtLink>
        </div>
      </UContainer>
    </section>

    <HomeTechMarquee />
    <HomeBentoShowcase />
    <HomeServicesBento />
    <HomeCtaBand />
  </div>
</template>

<script setup lang="ts">
const heroLogoRef = ref<{ logoSvg: Ref<SVGElement | null> } | null>(null);
const logoParallaxWrap = ref<HTMLElement | null>(null);
const ctaPrimaryWrap = ref<HTMLElement | null>(null);
const ctaSecondaryWrap = ref<HTMLElement | null>(null);
const availabilityWrap = ref<HTMLElement | null>(null);
const nameText = ref<HTMLElement | null>(null);
const nameCursor = ref<HTMLElement | null>(null);
const titleText = ref<HTMLElement | null>(null);
const roleWord = ref<HTMLElement | null>(null);
const descriptionText = ref<HTMLElement | null>(null);
const descCursor = ref<HTMLElement | null>(null);
const statsContainer = ref<HTMLElement | null>(null);
const buttonsContainer = ref<HTMLElement | null>(null);
const socialRow = ref<HTMLElement | null>(null);
const scrollCue = ref<HTMLElement | null>(null);

useMouseParallax(logoParallaxWrap, 14);
useButtonRipple(ctaPrimaryWrap);
useButtonRipple(ctaSecondaryWrap);
useRotatingRole(roleWord);

const heroStats = [
  { value: 6, suffix: "+", label: "Years exp.", icon: "i-heroicons-briefcase" },
  { value: 15, suffix: "+", label: "Technologies", icon: "i-heroicons-cpu-chip" },
  { value: 3, suffix: "", label: "Live projects", icon: "i-heroicons-rocket-launch" },
];

const socialLinks = [
  { label: "GitHub", icon: "i-simple-icons-github", url: "https://github.com/amirrr1987" },
  { label: "LinkedIn", icon: "i-simple-icons-linkedin", url: "https://www.linkedin.com/in/amirrr1987/" },
  { label: "Telegram", icon: "i-simple-icons-telegram", url: "https://chat.telegram.dev" },
];

const content = {
  name: "Amir Maghami",
  title: "",
  description:
    "I craft beautiful, intuitive, and high-performance web experiences — merging elegant design with clean, scalable code.",
};

useHeroEntrance(
  () => {
    const logoSvg = heroLogoRef.value?.logoSvg;
    const logoEl = logoSvg && "value" in logoSvg ? logoSvg.value : logoSvg;
    return {
      logoWrap: logoParallaxWrap.value,
      logoEl: logoEl ?? undefined,
      availabilityWrap: availabilityWrap.value,
      nameText: nameText.value,
      nameCursor: nameCursor.value,
      titleText: titleText.value,
      titleCursor: null,
      descriptionText: descriptionText.value,
      descCursor: descCursor.value,
      revealTargets: [
        availabilityWrap.value,
        statsContainer.value,
        buttonsContainer.value,
        socialRow.value,
        scrollCue.value,
      ].filter(Boolean) as HTMLElement[],
    };
  },
  content,
);
</script>
