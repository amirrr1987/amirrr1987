<template>
  <section class="flex min-h-[calc(100svh-12rem)] items-center text-white">
    <UContainer
      class="px-4 text-center sm:px-8"
      :ui="{ base: 'max-w-3xl' }"
    >
      <div
        ref="heroRoot"
        class="flex flex-col items-center justify-center space-y-6"
      >
        <HeroLogo
          ref="heroLogo"
          class="h-36 w-auto opacity-0 sm:h-44"
        />

        <h1
          class="bg-linear-to-br from-primary to-purple-400 bg-clip-text font-title text-5xl leading-tight tracking-tight text-transparent sm:text-6xl"
        >
          <span ref="nameText" />
          <span
            ref="nameCursor"
            class="typewriter-cursor"
          >|</span>
        </h1>

        <h2 class="font-subtitle text-xl text-primary sm:text-2xl">
          <span ref="titleText" />
        </h2>

        <p
          ref="descriptionEl"
          class="mx-auto max-w-2xl text-base text-gray-400 opacity-0 sm:text-lg"
        >
          {{ content.description }}
        </p>

        <div
          ref="buttonsContainer"
          class="flex flex-col items-center gap-4 opacity-0 sm:flex-row"
        >
          <UButton
            to="/projects"
            size="xl"
            icon="i-heroicons-rocket-launch"
            color="primary"
            class="w-full sm:w-auto"
          >
            View My Work
          </UButton>
          <UButton
            to="/contact"
            size="xl"
            color="secondary"
            variant="outline"
            icon="i-heroicons-envelope"
            class="w-full sm:w-auto"
          >
            Get in Touch
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";

const heroRoot = ref<HTMLElement | null>(null);
const heroLogo = ref<{ logoSvg: SVGElement | null } | null>(null);
const nameText = ref<HTMLElement | null>(null);
const nameCursor = ref<HTMLElement | null>(null);
const titleText = ref<HTMLElement | null>(null);
const descriptionEl = ref<HTMLElement | null>(null);
const buttonsContainer = ref<HTMLElement | null>(null);

const content = {
  name: "Amir Maghami",
  title: "Fullstack Developer",
  description:
    "I craft beautiful, intuitive, and high-performance web experiences — merging elegant design with clean, scalable code to build amazing things for the web.",
};

useSeoMeta({
  title: "Amir Maghami — Fullstack Developer",
  description: content.description,
});

function showStaticHero() {
  if (nameText.value) nameText.value.textContent = content.name;
  if (titleText.value) titleText.value.textContent = content.title;
  if (nameCursor.value) nameCursor.value.style.display = "none";

  gsap.set(
    [
      heroLogo.value?.logoSvg,
      nameText.value,
      titleText.value,
      descriptionEl.value,
      buttonsContainer.value,
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

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const logoEl = heroLogo.value?.logoSvg;

    if (logoEl) {
      tl.fromTo(
        logoEl,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7 },
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
        "+=0.15",
      );
    }

    if (titleText.value) {
      tl.to(
        titleText.value,
        {
          opacity: 1,
          duration: 0.55,
          text: content.title,
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
      "+=0.1",
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
