<template>
  <UiGradientSection class="relative z-10">
    <UContainer class="space-y-12 sm:space-y-14">
      <UiGlassPanel
        padding="lg"
        class="grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]"
        data-reveal
      >
        <div class="flex justify-center">
          <UiTiltCard class="inline-block">
            <div class="group relative">
              <span
                class="absolute -inset-3 rounded-full bg-linear-to-r from-primary to-emerald-300 opacity-60 blur-lg transition duration-300 group-hover:opacity-100"
              />
              <NuxtImg
                src="/logo.svg"
                placeholder
                width="250"
                height="250"
                class="relative size-36 rounded-full bg-slate-950/80 p-4 ring-2 ring-primary/40 shadow-2xl transition-transform duration-500 group-hover:scale-105 sm:size-44"
                alt="Amir Maghami"
              />
            </div>
          </UiTiltCard>
        </div>

        <div class="space-y-6 text-center md:text-left">
          <p class="page-eyebrow mb-4 md:mx-0">Profile</p>
          <h1 class="text-gradient-primary font-mono text-3xl font-bold sm:text-4xl md:text-5xl">
            <span ref="titleText" />
            <span ref="titleCursor" class="typewriter-cursor">|</span>
          </h1>
          <USeparator class="mx-auto my-4 max-w-xs md:mx-0" />
          <h2 class="font-mono text-xl font-bold text-highlighted sm:text-2xl md:text-3xl">
            <span ref="nameText" />
          </h2>
          <p class="font-mono text-base font-medium text-primary sm:text-lg">
            <span ref="titleSubText" />
          </p>

          <UCard
            variant="subtle"
            class="glass-panel ring-0"
            :ui="{ root: 'bg-primary/5', body: 'p-5' }"
          >
            <p class="text-pretty text-sm leading-7 text-muted sm:text-base">
              <span ref="descriptionText" />
            </p>
          </UCard>

          <div class="flex flex-col gap-3 sm:flex-row">
            <UButton
              size="lg"
              color="primary"
              variant="soft"
              to="/AmirMagjami-Resume.pdf"
              download
              target="_blank"
              icon="i-heroicons-document-arrow-down"
              trailing
              class="btn-premium justify-center shadow-lg shadow-primary/20 sm:w-auto"
            >
              Download CV
            </UButton>
            <UButton
              size="lg"
              color="neutral"
              variant="outline"
              to="/contact"
              icon="i-heroicons-envelope"
              class="btn-premium justify-center sm:w-auto"
            >
              Contact me
            </UButton>
          </div>
        </div>
      </UiGlassPanel>

      <div data-reveal>
        <p class="page-eyebrow mb-3 w-fit">Expertise</p>
        <h3 class="flex items-center gap-2 font-mono text-2xl font-bold text-highlighted">
          <UIcon name="i-heroicons-light-bulb" class="size-6 text-primary" />
          Key Skills
        </h3>
        <div
          class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
        >
          <UiTiltCard
            v-for="skill in keySkills"
            :key="skill.name"
            data-reveal
          >
            <UCard
              class="glass-panel h-full !rounded-[calc(1.5rem-1px)] !shadow-none ring-0"
              :ui="{ body: 'flex flex-col items-center gap-3 p-5 text-center' }"
            >
              <UIcon :name="skill.icon" class="size-8 text-primary" />
              <span class="font-mono text-sm font-semibold">{{ skill.name }}</span>
            </UCard>
          </UiTiltCard>
        </div>
      </div>

      <div data-reveal>
        <h3 class="mb-4 flex items-center gap-2 font-mono text-xl font-bold text-highlighted">
          <UIcon name="i-heroicons-code-bracket" class="size-5 text-primary" />
          Additional Skills
        </h3>
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="(skill, index) in additionalSkills"
            :key="index"
            color="secondary"
            variant="soft"
            size="lg"
            class="font-mono transition-all hover:scale-105 hover:shadow-md hover:shadow-primary/15"
          >
            {{ skill }}
          </UBadge>
        </div>
      </div>
    </UContainer>
  </UiGradientSection>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const titleText = ref<HTMLElement | null>(null);
const titleCursor = ref<HTMLElement | null>(null);
const nameText = ref<HTMLElement | null>(null);
const titleSubText = ref<HTMLElement | null>(null);
const descriptionText = ref<HTMLElement | null>(null);

const keySkills = [
  { name: "Vue.js", icon: "i-simple-icons-vuedotjs" },
  { name: "Nuxt.js", icon: "i-simple-icons-nuxtdotjs" },
  { name: "TypeScript", icon: "i-simple-icons-typescript" },
  { name: "UI/UX Design", icon: "i-heroicons-paint-brush" },
  { name: "Three.js", icon: "i-simple-icons-threedotjs" },
];

const additionalSkills = [
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "TailwindCSS",
  "Pinia",
  "Vuex",
  "Vite",
  "Git",
  "RESTful APIs",
  "Responsive Design",
];

const content = {
  title: "About Me",
  name: "Amir Maghami",
  titleSub: "Senior Front-End Developer (Vue.js/Nuxt.js)",
  description:
    "A results-driven and detail-oriented Senior Front-End Developer with over 6 years of comprehensive experience in designing, developing, and optimizing high-performance, responsive web applications. Expert in the Vue.js ecosystem and modern front-end architecture.",
};

useGsapScrollReveal({ stagger: 0.1 });

onMounted(() => {
  const tl = gsap.timeline();

  tl.to(titleText.value, { duration: 0.8, text: content.title, ease: "none" })
    .to(nameText.value, { duration: 0.6, text: content.name, ease: "none" }, "+=0.3")
    .to(titleSubText.value, { duration: 1, text: content.titleSub, ease: "none" }, "+=0.2")
    .to(
      descriptionText.value,
      { duration: 2.2, text: content.description, ease: "none" },
      "+=0.3",
    )
    .to(
      titleCursor.value,
      { opacity: 0, duration: 0.5, repeat: -1, yoyo: true },
      "-=0.5",
    );
});
</script>
