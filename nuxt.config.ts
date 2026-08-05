// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@netlify/nuxt'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },

  ui: {
    fonts: false
  },

  routeRules: {
    '/': { prerender: true },
    '/api/**': { cors: true }
  },
  compatibilityDate: '2026-06-30',

  // Netlify SSR: Nitro Netlify preset (publish .output/public + functions)
  nitro: {
    preset: 'netlify'
  },

  vite: {
    build: {
      sourcemap: false
    },
    optimizeDeps: {
      include: [
        'gsap',
        'gsap/ScrollTrigger',
        'gsap/TextPlugin',
        'three'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  // Avoid shipping full icon collections in the Netlify serverless bundle
  icon: {
    serverBundle: {
      collections: ['heroicons']
    },
    clientBundle: {
      scan: true,
      sizeLimitKb: 512,
      icons: [
        'heroicons:sun',
        'heroicons:moon',
        'heroicons:computer-desktop'
      ]
    }
  },

  image: {
    // Portfolio uses few local images; keep Netlify function leaner
    quality: 80,
    format: ['webp']
  }
})
