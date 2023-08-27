// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@unocss/reset/tailwind.css"],
  devtools: { enabled: true },
  modules: [
    "nuxt-lodash",
    "@unocss/nuxt",
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  app: {
    head: {
      title: "Amir Maghami",
      meta: [
        {
          name: "description",
          content: "Every thing about Nuxt 3",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins",
        },
      ],
    },
  },
});
