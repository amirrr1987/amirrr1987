// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
<<<<<<< Updated upstream

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
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

  nitro: {
    preset: 'netlify',
    // Every page is prerendered to static HTML, so the CDN serves the site
    // even if the serverless function is unavailable.
    prerender: {
      crawlLinks: true,
      routes: ['/', '/200.html', '/404.html'],
      failOnError: false
    }
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
  }
=======
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
>>>>>>> Stashed changes
})
