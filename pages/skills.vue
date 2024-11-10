<template>
  <section class="p-4 sm:p-6 lg:p-8 text-gray-400">
    <div
      class="grid sm:grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8"
    >
      <template v-for="skill in skills">
        <UCard>
          <template #header>
            <img :src="skill.logo" alt="" />
          </template>
          {{ skill.title }}
          <UDivider class="my-4" />
          <ul class="list-disc">
            <template v-for="item in skill.skills">
              <li>
                {{ item.label }}
              </li>
            </template>
          </ul>
        </UCard>
      </template>
    </div>
  </section>
</template>
<script setup lang="ts">
useHead({
  title: `Amir Maghami | Skills`,
});
const skills = reactive([
  {
    title: "Basic",
    logo: "https://seeklogo.com/images/W/web-fundamentals-logo-91E3C8C13B-seeklogo.com.png",
    skills: [
      {
        label: "HTML",
        score: 100,
      },
      {
        label: "CSS",
        score: 100,
      },
      {
        label: "JavaScript",
        score: 100,
      },
      {
        label: "TypeScript",
        score: 80,
      },

      {
        label: "UI",
        score: 60,
      },
    ],
  },
  {
    title: "HTML",
    logo: "https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png",
    skills: [
      {
        label: "Accessibility",
        score: 100,
      },
      {
        label: "Structure",
        score: 100,
      },
      {
        label: "Structure",
        score: 100,
      },
      {
        label: "SEO",
        score: 70,
      },
    ],
  },
  {
    title: "CSS",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStWO3yF7zOu0ofiizb9FsOfLI1g5wN7nA8EvoCOTK1z04doeBGkcMOsEdUjISo14XYlW0&usqp=CAU",
    skills: [
      {
        label: "Variables",
        score: 100,
      },
      {
        label: "Animations",
        score: 90,
      },
      {
        label: "Flexbox",
        score: 80,
      },
      {
        label: "Grid",
        score: 100,
      },
      {
        label: "Floats",
        score: 100,
      },
      {
        label: "Positions",
        score: 100,
      },
      {
        label: "SCSS",
        score: 70,
      },
      {
        label: "Less",
        score: 70,
      },
    ],
  },
  {
    title: "JavaScript",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png",
    skills: [
      {
        label: "Syntax",
        score: 90,
      },
      {
        label: "BOM",
        score: 70,
      },
      {
        label: "DOM",
        score: 70,
      },
      {
        label: "Fetch API",
        score: 90,
      },
      {
        label: "ES6",
        score: 90,
      },
    ],
  },
  {
    title: "TypeScript",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58OXztN3CQvxD-56CZ3xIEoMTQvhi_dR48CbULLhICA&s",
    skills: [
      {
        label: "Types",
        score: 90,
      },
      {
        label: "Interface",
        score: 90,
      },
      {
        label: "Enums",
        score: 90,
      },
      {
        label: "Generic Types",
        score: 60,
      },
    ],
  },
  {
    title: "CSS Framework",
    logo: "data:image/jpeg;base64,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",
    skills: [
      {
        label: "Bootstrap",
        score: 50,
      },
      {
        label: "TailwindCSS",
        score: 70,
      },

      {
        label: "UnoCSS",
        score: 100,
      },
    ],
  },
  {
    title: "Js Framework",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGu5x4cdPaJdaIrNhVRqP0CbRiA1-LEfGIA&s",
    skills: [
      {
        label: "Vue.js",
        score: 90,
      },
      {
        label: "Nuxt.js",
        score: 90,
      },
    ],
  },
  {
    title: "Vue.js",
    skills: [
      {
        label: "Syntax",
        score: 90,
      },
      {
        label: "lifecycle",
        score: 90,
      },
      {
        label: "Option API",
        score: 90,
      },
      {
        label: "Composition API",
        score: 90,
      },
      {
        label: "Vue Router",
        score: 90,
      },
      {
        label: "Pinia.js",
        score: 90,
      },
    ],
  },
  {
    title: "Vue UI Framework",
    skills: [
      {
        label: "AntDV",
        score: 90,
      },
      {
        label: "Vuetify",
        score: 80,
      },
      {
        label: "Element",
        score: 70,
      },
      {
        label: "Quasar",
        score: 70,
      },
      {
        label: "Vant",
        score: 70,
      },
      {
        label: "Nuxt UI",
        score: 70,
      },
    ],
  },
  {
    title: "Git",
    skills: [
      {
        label: "git",
        score: 80,
      },
      {
        label: "Github",
        score: 90,
      },
      {
        label: "Gitlab",
        score: 70,
      },
      {
        label: "git flow",
        score: 70,
      },
    ],
  },
  {
    title: "Familiar",
    skills: [
      {
        label: "React.js",
        score: 60,
      },
      {
        label: "Angular",
        score: 60,
      },
      {
        label: "Express.js",
        score: 60,
      },
      {
        label: "Nest.js",
        score: 60,
      },
      {
        label: "MongoDB",
        score: 80,
      },
      {
        label: "Supabase",
        score: 80,
      },
    ],
  },

  {
    title: "Libraries",
    skills: [
      {
        label: "Lodash",
        score: 70,
      },
      {
        label: "Axios",
        score: 50,
      },
      {
        label: "Three.js",
        score: 50,
      },
      {
        label: "VueUse.js",
        score: 50,
      },
      {
        label: "VitePress.js",
        score: 50,
      },
      {
        label: "Vite PWA",
        score: 50,
      },
      {
        label: "swiper",
        score: 50,
      },
      {
        label: "eslint",
        score: 50,
      },
      {
        label: "zod",
        score: 50,
      },
      {
        label: "Day.js",
        score: 50,
      },
      {
        label: "apexcharts",
        score: 50,
      },
      {
        label: "iconify",
        score: 50,
      },
    ],
  },
  {
    title: "UI",
    skills: [
      {
        label: "Basic",
        score: 70,
      },
      {
        label: "Figma",
        score: 50,
      },
    ],
  },
]);
</script>
