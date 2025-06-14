<template>
  <section class="text-white flex items-center ">
    <UContainer class="text-center px-4 sm:px-8" :ui="{ constrained: 'max-w-3xl' }">
      <div class="flex flex-col items-center justify-center space-y-6">
        <!-- Animated SVG -->
        <svg
          ref="logoSvg"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="456.000000pt"
          height="815.000000pt"
          viewBox="0 0 456.000000 815.000000"
          preserveAspectRatio="xMidYMid meet"
          class="fill-primary-700 dark:fill-primary-500 w-38 h-38 object-contain opacity-0"
        >
          <!-- SVG paths remain the same -->
          <g transform="translate(0.000000,815.000000) scale(0.100000,-0.100000)" stroke="none">
            <path class="fill-purple-300" d="M1363 8093 c-7 -2 -13 -20 -13 -39 l0 -34 78 0 c238 -1 432 -135 504
-350 22 -63 23 -82 26 -541 l3 -476 202 5 c204 5 470 -7 762 -33 88 -8 172
-15 188 -15 l27 0 0 493 c0 421 2 501 16 548 66 227 265 369 516 369 l68 0 0
34 c0 22 -6 36 -16 40 -19 7 -2343 7 -2361 -1z"></path>
            <path d="M1950 6425 c-718 -96 -1198 -511 -1330 -1148 -104 -508 18 -956 359
-1311 120 -124 233 -213 492 -386 133 -89 248 -164 255 -167 12 -4 14 109 14
714 l0 719 -51 49 c-73 72 -135 162 -164 240 -85 225 0 532 196 710 197 178
458 265 798 265 493 0 862 -189 1032 -529 39 -78 79 -219 79 -277 0 -17 3 -46
6 -63 6 -27 10 -31 40 -31 19 0 34 1 34 3 0 2 20 244 45 538 25 294 45 551 45
572 l0 37 -232 0 c-166 0 -284 6 -408 20 -474 53 -1003 73 -1210 45z"></path>
            <path class="fill-purple-300" d="M2290 5874 c-92 -17 -222 -61 -285 -97 l-40 -23 -6 -1574 c-4 -1137
-9 -1597 -17 -1655 -63 -423 -148 -675 -310 -925 -67 -103 -83 -124 -180 -224
-99 -101 -204 -180 -320 -239 -88 -46 -92 -49 -92 -82 l0 -33 97 -7 c174 -13
421 13 623 66 641 169 1131 635 1304 1239 34 117 54 234 66 375 11 140 14
3014 2 3031 -23 37 -190 105 -342 140 -99 23 -394 27 -500 8z"></path>
            <path d="M3360 3279 c0 -601 -12 -759 -76 -987 l-26 -93 30 -57 c204 -384 185
-818 -51 -1167 -49 -72 -191 -216 -268 -273 -234 -170 -527 -264 -874 -279
-559 -24 -1103 196 -1435 579 -419 483 -511 1134 -246 1750 40 93 108 226 147
286 13 21 12 24 -16 47 -17 13 -34 23 -39 21 -15 -4 -136 -177 -190 -271 -91
-160 -176 -373 -220 -550 -34 -140 -41 -214 -41 -425 0 -183 4 -232 23 -327
174 -863 933 -1439 1954 -1481 523 -22 955 62 1362 265 338 168 629 422 821
718 365 559 394 1237 78 1825 -161 301 -417 566 -781 809 -68 45 -129 84 -137
88 -13 4 -15 -59 -15 -478z"></path>
            <path class="fill-purple-300" d="M3105 1853 c-342 -615 -1008 -1015 -1760 -1056 l-50 -2 50 -24 c187
-86 422 -131 686 -131 593 0 1051 299 1160 758 28 115 23 317 -11 432 -12 41
-25 79 -29 83 -5 5 -26 -22 -46 -60z"></path>
          </g>
        </svg>

        <!-- Name with Typewriter Effect -->
        <h1
          ref="nameText"
          class="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent opacity-0"
        >
          <span ref="nameCursor" class="typewriter-cursor">|</span>
        </h1>

        <!-- Title with Typewriter Effect -->
        <h2 
          ref="titleText"
          class="text-xl sm:text-2xl font-medium text-primary opacity-0"
        >
          <span ref="titleCursor" class="typewriter-cursor">|</span>
        </h2>

        <!-- Description with Typewriter Effect -->
        <p 
          ref="descriptionText"
          class="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto opacity-0"
        >
          <span ref="descCursor" class="typewriter-cursor">|</span>
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row items-center gap-4 opacity-0" ref="buttonsContainer">
          <UButton
            to="/projects"
            size="xl"
            icon="i-heroicons-rocket-launch"
            color="primary"
            class="w-full sm:w-auto transition-transform duration-300 hover:scale-105"
          >
            View My Work
          </UButton>
          <UButton
            to="/contact"
            size="xl"
            color="secondary"
            variant="outline"
            icon="i-heroicons-envelope"
            class="w-full sm:w-auto transition-transform duration-300 hover:scale-105"
          >
            Get in Touch
          </UButton>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

// Refs for GSAP animations
const logoSvg = ref(null)
const nameText = ref(null)
const nameCursor = ref(null)
const titleText = ref(null)
const titleCursor = ref(null)
const descriptionText = ref(null)
const descCursor = ref(null)
const buttonsContainer = ref(null)

// Content for typewriter effects
const content = {
  name: "Amir Maghami",
  title: "Fullstack Developer",
  description: "I craft beautiful, intuitive, and high-performance web experiences — merging elegant design with clean, scalable code to build amazing things for the web."
}

onMounted(() => {
  // Create master timeline
  const masterTL = gsap.timeline()

  // SVG animation - draw in effect
masterTL.fromTo(logoSvg.value,
  {
    opacity: 0,
    scale: 0.5,
    rotation: -30,
    filter: "blur(8px)"
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    filter: "blur(0px)",
    duration: 1.6,
    ease: "elastic.out(1, 0.4)"
  }
)


  // Name typewriter effect
  masterTL.to(nameText.value, {
    duration: 1.2,
    text: content.name,
    ease: "none",
    opacity: 1,
    onUpdate: () => {
      // Blink cursor during typing
      gsap.to(nameCursor.value, {
        opacity: 0,
        duration: 0.3,
        repeat: 1,
        yoyo: true
      })
    }
  }, "+=0.3")

  // Title typewriter effect
  masterTL.to(titleText.value, {
    duration: 0.8,
    text: content.title,
    ease: "none",
    opacity: 1,
    onUpdate: () => {
      gsap.to(titleCursor.value, {
        opacity: 0,
        duration: 0.3,
        repeat: 1,
        yoyo: true
      })
    }
  }, "+=0.2")

  // Description typewriter effect
  masterTL.to(descriptionText.value, {
    duration: 2.5,
    text: content.description,
    ease: "none",
    opacity: 1,
    onUpdate: () => {
      gsap.to(descCursor.value, {
        opacity: 0,
        duration: 0.3,
        repeat: 1,
        yoyo: true
      })
    }
  }, "+=0.2")

  // Buttons animation
  masterTL.to(buttonsContainer.value, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "back.out(1.7)"
  }, "+=0.3")

  // Continuous cursor blink for the last element
  masterTL.to([nameCursor.value, titleCursor.value, descCursor.value], {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true
  }, "-=0.5")

  // Button hover effects
  const buttons = buttonsContainer.value.querySelectorAll('button')
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      })
    })
    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      })
    })
  })
})
</script>

<style scoped>
/* Typewriter cursor styles */
.typewriter-cursor {
  display: inline-block;
  margin-left: 2px;
  font-weight: normal;
  color: var(--primary-500);
}

/* SVG animation styles */
svg path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 5s ease-in-out forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

/* Button animation styles */
button {
  transform-origin: center;
}
</style>