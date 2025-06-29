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
    'v-gsap-nuxt',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Amir Maghami - Full stack Developer',
      meta: [
        { name: 'description', content: 'Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.' },
        { name: 'theme-color', content: '#8B5CF6' },

        // SEO Tags
        { name: 'author', content: 'Amir Maghami' },
        { name: 'keywords', content: 'Amir Maghami, frontend developer, Vue.js developer, Nuxt.js portfolio, TypeScript developer, JavaScript, Nuxt 3, Nuxt UI, creative developer, Iran developer portfolio' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Amir Maghami - Full stack Developer' },
        { property: 'og:description', content: 'Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.' },
        { property: 'og:image', content: 'https://amirmaghami.ir/og-image.jpg' },
        { property: 'og:url', content: 'https://amirmaghami.ir/' },
        { property: 'og:site_name', content: 'Amir Maghami Portfolio' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Amir Maghami - Full stack Developer' },
        { name: 'twitter:description', content: 'Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.' },
        { name: 'twitter:image', content: 'https://amirmaghami.ir/og-image.jpg' },
        { name: 'twitter:creator', content: '@amirrr1987' }
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
