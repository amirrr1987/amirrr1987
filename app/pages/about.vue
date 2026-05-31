<template>
  <section class="relative z-10">
    <UContainer :ui="{ padding: 'px-4 sm:px-6 lg:px-8' }">
      <div class="space-y-8 animate-fade-in sm:space-y-10">
        <div
          class="grid items-center gap-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] md:p-8"
        >
          <div class="flex justify-center animate-fade-in-up">
            <div class="relative group">
              <div
                class="absolute -inset-1 rounded-full bg-linear-to-r from-primary-500 to-purple-400 opacity-70 blur-sm group-hover:opacity-100 transition duration-300"
              />

              <NuxtImg
                src="/logo.svg"
                placeholder
                width="250"
                height="250"
                class="relative h-36 w-36 rounded-full p-4 ring-2 ring-primary-500/50 shadow-xl transition-transform duration-300 group-hover:scale-105 sm:h-44 sm:w-44"
                alt="Amir Maghami"
              />
            </div>
          </div>

          <div
            class="space-y-6 text-center animate-fade-in-right delay-150 md:text-left"
          >
            <div>
              <div class="font-mono mb-4">
                <h1
                  class="break-words bg-linear-to-r from-primary-500 to-purple-400 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl"
                >
                  <span ref="titleText" />
                  <span ref="titleCursor" class="typewriter-cursor">|</span>
                </h1>
                <USeparator class="mx-auto my-4 max-w-xs md:mx-0" />
              </div>
              <h2
                class="mb-2 font-mono text-xl font-bold sm:text-2xl md:text-3xl"
              >
                <span ref="nameText" />
              </h2>
              <p
                class="font-mono text-base font-medium text-primary-500 sm:text-lg"
              >
                <span ref="titleSubText" />
              </p>
            </div>

            <UCard class="border-primary/20">
              <p
                class="text-pretty text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base"
              >
                <span ref="descriptionText" />
              </p>
            </UCard>

            <UButton
              size="lg"
              color="primary"
              variant="soft"
              to="/AmirMagjami-Resume.pdf"
              download
              target="_blank"
              class="group w-full justify-center font-mono transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 sm:w-auto"
              icon="i-heroicons-document-arrow-down"
            >
              Download CV
              <template #trailing>
                <UIcon
                  name="i-heroicons-arrow-right"
                  class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </template>
            </UButton>
          </div>
        </div>

        <div class="animate-fade-in-up delay-300">
          <h3
            class="mb-4 flex items-center justify-center gap-2 text-2xl font-bold sm:justify-start"
          >
            <UIcon
              name="i-heroicons-light-bulb"
              class="w-6 h-6 text-primary-500"
            />
            <span ref="skillsTitleText" />
          </h3>

          <div
            class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
          >
            <UBadge
              v-for="skill in keySkills"
              :key="skill.name"
              color="primary"
              variant="soft"
              size="lg"
              class="flex items-center justify-center gap-2 p-4 text-center font-mono transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <UIcon :name="skill.icon" class="w-5 h-5" />
              {{ skill.name }}
            </UBadge>
          </div>
        </div>

        <div class="animate-fade-in-up delay-450">
          <h3
            class="mb-4 flex items-center justify-center gap-2 text-xl font-bold sm:justify-start"
          >
            <UIcon
              name="i-heroicons-code-bracket"
              class="w-5 h-5 text-primary-500"
            />
            <span ref="additionalSkillsTitleText" />
          </h3>

          <div class="flex flex-wrap justify-center gap-2 sm:justify-start">
            <UBadge
              v-for="(skill, index) in additionalSkills"
              :key="index"
              color="secondary"
              variant="soft"
              class="font-mono transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20"
            >
              {{ skill }}
            </UBadge>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { onMounted, ref } from "vue";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

// Refs for GSAP animation
const titleText = ref(null);
const titleCursor = ref(null);
const nameText = ref(null);
const titleSubText = ref(null);
const descriptionText = ref(null);
const skillsTitleText = ref(null);
const additionalSkillsTitleText = ref(null);

// Key skills with icons
const keySkills = [
  { name: "Vue.js", icon: "i-simple-icons-vuedotjs" },
  { name: "Nuxt.js", icon: "i-simple-icons-nuxtdotjs" },
  { name: "TypeScript", icon: "i-simple-icons-typescript" },
  { name: "UI/UX Design", icon: "i-heroicons-paint-brush" },
  { name: "Three.js", icon: "i-simple-icons-threedotjs" },
];

// Additional skills from CV store
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

// Content for typewriter effects
const content = {
  title: "About Me",
  name: "Amir Maghami",
  titleSub: "Senior Front-End Developer (Vue.js/Nuxt.js)",
  description:
    "A results-driven and detail-oriented Senior Front-End Developer with over 6 years of comprehensive experience in designing, developing, and optimizing high-performance, responsive web applications. Expert in the Vue.js ecosystem and modern front-end architecture.",
  skillsTitle: "Key Skills",
  additionalSkillsTitle: "Additional Skills",
};

onMounted(() => {
  // Typewriter effect sequence
  const tl = gsap.timeline();

  // Title animation
  tl.to(titleText.value, {
    duration: 0.8,
    text: content.title,
    ease: "none",
  });

  // Name animation
  tl.to(
    nameText.value,
    {
      duration: 0.6,
      text: content.name,
      ease: "none",
    },
    "+=0.3",
  );

  // Title/subtitle animation
  tl.to(
    titleSubText.value,
    {
      duration: 1.0,
      text: content.titleSub,
      ease: "none",
    },
    "+=0.2",
  );

  // Description animation
  tl.to(
    descriptionText.value,
    {
      duration: 2.5,
      text: content.description,
      ease: "none",
    },
    "+=0.3",
  );

  // Skills title animation
  tl.to(
    skillsTitleText.value,
    {
      duration: 0.6,
      text: content.skillsTitle,
      ease: "none",
    },
    "+=0.2",
  );

  // Additional skills title animation
  tl.to(additionalSkillsTitleText.value, {
    duration: 0.6,
    text: content.additionalSkillsTitle,
    ease: "none",
  });

  // Continuous cursor blink for the last element
  tl.to(
    titleCursor.value,
    {
      opacity: 0,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
    },
    "-=0.5",
  );
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-in-out;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-in-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.8s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.delay-150 {
  animation-delay: 150ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-450 {
  animation-delay: 450ms;
}

/* Typewriter cursor styles */
.typewriter-cursor {
  display: inline-block;
  margin-left: 2px;
  font-weight: normal;
  color: var(--primary-500);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
