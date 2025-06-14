<template>
  <UContainer>
    <UPage>
      <div class="space-y-8 animate-fade-in">
        <div class="text-center">
          <h1
            class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-purple-400 bg-clip-text text-transparent pb-2">
            <span ref="titleText"></span>
            <span class="typewriter-cursor" ref="titleCursor">|</span>
          </h1>
          <UDivider class="max-w-xs mx-auto my-4" />
        </div>

        <div class="flex flex-col md:flex-row gap-8 items-center">
          <div class="w-full md:w-1/3 flex justify-center animate-fade-in-up">
            <div class="relative group">
              <div
                class="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-400 opacity-70 blur-sm group-hover:opacity-100 transition duration-300">
              </div>
              <NuxtImg src="/logo.svg" placeholder width="250" height="250"
                class="w-40 h-40 p-4 rounded-full relative ring-2 ring-primary-500/50 shadow-xl transition-transform duration-300 group-hover:scale-105"
                alt="Amir Maghami" />
            </div>
          </div>

          <div class="w-full md:w-2/3 space-y-6 animate-fade-in-right delay-150">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold">
                <span ref="nameText"></span>
              </h2>
              <p class="text-lg text-primary-500 font-medium">
                <span ref="titleSubText"></span>
              </p>
            </div>

            <UCard class="border-primary/20">
              <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                <span ref="descriptionText"></span>
              </p>
            </UCard>

            <UButton size="lg" color="primary" variant="soft" to="/amir-maghami-cv.pdf" download target="_blank"
              class="group transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              icon="i-heroicons-document-arrow-down">
              Download CV
              <template #trailing>
                <UIcon name="i-heroicons-arrow-right"
                  class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </template>
            </UButton>
          </div>
        </div>

        <div class="animate-fade-in-up delay-300">
          <h3 class="text-2xl font-bold mb-4 flex items-center gap-2">
            <UIcon name="i-heroicons-light-bulb" class="w-6 h-6 text-primary-500" />
            <span ref="skillsTitleText"></span>
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <UBadge v-for="skill in keySkills" :key="skill.name" color="primary" variant="soft" size="lg"
              class="p-4 flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-md hover:scale-105">
              <UIcon :name="skill.icon" class="w-5 h-5" />
              {{ skill.name }}
            </UBadge>
          </div>
        </div>

        <div class="animate-fade-in-up delay-450">
          <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <UIcon name="i-heroicons-code-bracket" class="w-5 h-5 text-primary-500" />
            <span ref="additionalSkillsTitleText"></span>
          </h3>

          <div class="flex flex-wrap gap-2">
            <UBadge v-for="(skill, index) in additionalSkills" :key="index" color="secondary" variant="soft"
              class="transition-all duration-300 hover:bg-primary-50 dark:hover:bg-primary-900/20">
              {{ skill }}
            </UBadge>
          </div>
        </div>
      </div>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

// Refs for GSAP animation
const titleText = ref(null)
const titleCursor = ref(null)
const nameText = ref(null)
const titleSubText = ref(null)
const descriptionText = ref(null)
const skillsTitleText = ref(null)
const additionalSkillsTitleText = ref(null)

// Key skills with icons
const keySkills = [
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
  { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { name: 'UI/UX Design', icon: 'i-heroicons-paint-brush' },
  { name: 'Three.js', icon: 'i-simple-icons-threedotjs' },
]

// Additional skills from CV store
const additionalSkills = [
  'JavaScript (ES6+)',
  'HTML5',
  'CSS3',
  'TailwindCSS',
  'Pinia',
  'Vuex',
  'Vite',
  'Git',
  'RESTful APIs',
  'Responsive Design',
]

// Content for typewriter effects
const content = {
  title: "About Me",
  name: "Amir Maghami",
  titleSub: "Senior Front-End Developer (Vue.js/Nuxt.js)",
  description: "A results-driven and detail-oriented Senior Front-End Developer with over 6 years of comprehensive experience in designing, developing, and optimizing high-performance, responsive web applications. Expert in the Vue.js ecosystem and modern front-end architecture.",
  skillsTitle: "Key Skills",
  additionalSkillsTitle: "Additional Skills"
}

onMounted(() => {
  // Typewriter effect sequence
  const tl = gsap.timeline()
  
  // Title animation
  tl.to(titleText.value, {
    duration: 0.8,
    text: content.title,
    ease: "none",
  })
  
  // Name animation
  tl.to(nameText.value, {
    duration: 0.6,
    text: content.name,
    ease: "none",
  }, "+=0.3")
  
  // Title/subtitle animation
  tl.to(titleSubText.value, {
    duration: 1.0,
    text: content.titleSub,
    ease: "none",
  }, "+=0.2")
  
  // Description animation
  tl.to(descriptionText.value, {
    duration: 2.5,
    text: content.description,
    ease: "none",
  }, "+=0.3")
  
  // Skills title animation
  tl.to(skillsTitleText.value, {
    duration: 0.6,
    text: content.skillsTitle,
    ease: "none",
  }, "+=0.2")
  
  // Additional skills title animation
  tl.to(additionalSkillsTitleText.value, {
    duration: 0.6,
    text: content.additionalSkillsTitle,
    ease: "none",
  })
  
  // Continuous cursor blink for the last element
  tl.to(titleCursor.value, {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true
  }, "-=0.5")
})
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
  from, to { opacity: 1; }
  50% { opacity: 0; }
}
</style>