<template>
  <div>
    <section
      class="relative flex min-h-[calc(100svh-11rem)] items-center sm:min-h-[calc(100svh-12rem)]"
    >
      <UContainer class="relative mx-auto max-w-6xl px-4 sm:px-8">
        <div
          class="grid items-center gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:py-14"
        >
          <div
            ref="heroContent"
            class="order-2 flex flex-col gap-6 opacity-0 lg:order-1"
          >
            <UBadge
              color="primary"
              variant="subtle"
              size="md"
              class="status-ping w-fit font-mono"
            >
              <span class="relative flex items-center gap-2">
                <span class="size-2 rounded-full bg-primary" />
                Open to freelance & full-time
              </span>
            </UBadge>

            <div class="space-y-3">
              <p class="label-mono">
                Amir Maghami
              </p>
              <h1 class="display-name text-highlighted">
                I build
                <span class="text-gradient-primary">Vue & Nuxt</span>
                products people actually use.
              </h1>
            </div>

            <p class="body-copy max-w-xl text-muted">
              Senior front-end · 6+ years · Tehran & remote.
              <span
                ref="roleWord"
                class="text-primary font-semibold"
              >Vue.js</span>
              specialist shipping dashboards, tools, and polished marketing sites.
            </p>

            <p class="hero-meta font-mono text-xs text-muted sm:text-sm">
              6+ years experience · {{ liveCount }}+ Netlify live demos · Nuxt & Vue specialist
            </p>

            <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <UButton
                to="#flagship"
                size="xl"
                color="primary"
                icon="i-heroicons-sparkles"
                class="btn-premium justify-center font-mono shadow-lg shadow-primary/25"
              >
                Flagship project
              </UButton>
              <UButton
                to="/contact"
                size="xl"
                color="neutral"
                variant="outline"
                icon="i-heroicons-envelope"
                class="btn-premium justify-center font-mono"
              >
                Get in touch
              </UButton>
            </div>

            <div
              ref="socialRow"
              class="flex items-center gap-1 opacity-0"
            >
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
                  size="md"
                  :aria-label="social.label"
                  class="hover:text-primary"
                />
              </UTooltip>
            </div>
          </div>

          <div
            ref="logoWrap"
            class="order-1 flex justify-center lg:order-2 lg:justify-end"
          >
            <div class="relative">
              <span
                class="hero-glow-ring opacity-50"
                aria-hidden="true"
              />
              <HeroLogo
                ref="heroLogoRef"
                class="hero-logo-size"
              />
            </div>
          </div>
        </div>

        <div
          ref="scrollCue"
          class="flex justify-center pb-4 opacity-0 lg:pb-0"
        >
          <NuxtLink
            to="#flagship"
            class="flex flex-col items-center gap-1 text-muted transition-colors hover:text-primary"
            aria-label="Scroll to flagship project"
          >
            <span class="font-mono text-xs uppercase tracking-widest">Scroll</span>
            <UIcon
              name="i-heroicons-chevron-down"
              class="size-5 text-primary"
            />
          </NuxtLink>
        </div>
      </UContainer>
    </section>

    <HomeFlagshipCase />
    <HomeBentoShowcase />
    <HomeTechStack />
    <HomeServicesBento />
    <HomeCtaBand />
  </div>
</template>

<script setup lang="ts">
import { liveProjectCount } from '~/data/portfolio-projects'

const heroLogoRef = ref<{ logoSvg: SVGElement | null } | null>(null)
const heroContent = ref<HTMLElement | null>(null)
const logoWrap = ref<HTMLElement | null>(null)
const socialRow = ref<HTMLElement | null>(null)
const scrollCue = ref<HTMLElement | null>(null)
const roleWord = ref<HTMLElement | null>(null)

useRotatingRole(roleWord)

const liveCount = liveProjectCount

const socialLinks = [
  { label: 'GitHub', icon: 'i-simple-icons-github', url: 'https://github.com/amirrr1987' },
  { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', url: 'https://www.linkedin.com/in/amirrr1987/' },
  { label: 'Telegram', icon: 'i-simple-icons-telegram', url: 'https://chat.telegram.dev' }
]

useHeroEntrance(() => {
  return {
    logoEl: heroLogoRef.value?.logoSvg ?? undefined,
    heroContent: heroContent.value,
    revealTargets: [socialRow.value, scrollCue.value].filter(Boolean) as HTMLElement[]
  }
})
</script>

<style scoped>
.hero-logo-size :deep(svg) {
  width: min(72vw, 16rem);
  height: auto;
}

@media (min-width: 1024px) {
  .hero-logo-size :deep(svg) {
    width: 18rem;
  }
}
</style>
