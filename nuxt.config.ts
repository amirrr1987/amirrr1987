// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@pinia/nuxt",
  ],

  css: ["~/assets/css/main.css"],
  app: {
    head: {
      title: "Amir Maghami | Full stack Developer",
      meta: [
        {
          name: "description",
          content:
            "Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.",
        },
        { name: "theme-color", content: "#8B5CF6" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/logo.svg" },
        { rel: "canonical", href: "https://amirmaghami.ir/" },
      ],
      htmlAttrs: {
        lang: "en",
        class: "scroll-smooth",
      },
    },
  },
  vite: {
    build: {
      sourcemap: false,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("three")) return "three";
              if (id.includes("gsap")) return "gsap";
              if (id.includes("lodash-es")) return "lodash";
              if (id.includes("vue")) return "vue";
              return "vendor";
            }
          },
        },
      },
    },
  },
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
  },
});
