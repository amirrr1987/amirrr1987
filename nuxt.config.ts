// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@netlify/nuxt',
  ],
  build: {
    transpile: ['pinia'],
  },
  nitro: {
    preset: 'netlify',
  },
  routeRules: {
    '/api/**': { cors: true },
  },
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: '',
  },
  ui: {
    fonts: false,
  },
  icon: {
    serverBundle: {
      collections: ['heroicons', 'simple-icons'],
    },
  },
  vite: {
    build: {
      sourcemap: false,
    },
    optimizeDeps: {
      include: [
        'gsap',
        'gsap/ScrollTrigger',
        'gsap/TextPlugin',
        'three',
      ],
    },
  },
})