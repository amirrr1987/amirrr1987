// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/fonts",
    "nuxt-typed-router",
    "@tresjs/nuxt",
  ],
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "fa",
        iso: "fa-IR",
        name: "فارسی",
        file: "fa-IR.json",
      },
    ],
    lazy: true,
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
  tres: {
    devtools: true,
    glsl: true,
  },
});