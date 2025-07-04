// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  colorMode: {
    preference: 'dark'
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    'v-gsap-nuxt',
  ],

  site: {
    url: 'https://amirmaghami.ir/',
    name: 'Amir Maghami | Full stack Developer'
  },
  
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Amir Maghami | Full stack Developer',
      meta: [
        {
          name: 'description',
          content:
            'Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.'
        },
        { name: 'theme-color', content: '#8B5CF6' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
        { rel: 'canonical', href: 'https://amirmaghami.ir/' }
      ],
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth'
      }
    }
  }
})