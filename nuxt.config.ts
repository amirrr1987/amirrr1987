export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  colorMode: {
    preference: 'dark'
  },

  css: ['~/assets/css/main.css'],

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
    '@vueuse/nuxt',
    '@nuxtjs/site-config',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/schema-org',
    '@nuxtjs/seo-utils',
    '@nuxtjs/og-image',
    '@nuxtjs/link-checker'
  ],

  siteConfig: {
    url: 'https://amirmaghami.ir',
    name: 'Amir Maghami - Full stack Developer',
    description: 'Creative modern spatial portfolio of Amir Maghami, a Frontend Developer specializing in Vue.js and Nuxt.js.',
    language: 'en',
    ogImage: {
      url: '/og-image.jpg',
      alt: 'Amir Maghami - Full stack Developer'
    }
  },

  app: {
    head: {
      title: 'Amir Maghami - Full stack Developer',
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth'
      },
      meta: [
        { name: 'theme-color', content: '#8B5CF6' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
        { rel: 'canonical', href: 'https://amirmaghami.ir/' }
      ]
    }
  },

  sitemap: {
    enabled: true,
    autoI18n: true,
    sitemaps: {
      default: {
        includeAppSources: true,
        chunks: 2000,
        sitemapName: 'main-sitemap.xml'
      }
    },
    defaultSitemapsChunkSize: 2000,
    excludeAppSources: ['nuxt:prerender', '@nuxt/content:document-driven'],
    runtimeCacheStorage: {
      driver: 'redis',
      host: 'localhost',
      port: 6379
    },
    xsl: '/custom-style.xsl',
    xslTips: false
  },

  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        sitemap: 'https://amirmaghami.ir/sitemap.xml'
      }
    ]
  },

  schemaOrg: {
    host: 'https://amirmaghami.ir',
    canonicalHost: 'https://amirmaghami.ir',
    defaultEntity: {
      '@type': 'Person',
      name: 'Amir Maghami',
      jobTitle: 'Full Stack Developer',
      url: 'https://amirmaghami.ir',
      image: {
        '@type': 'ImageObject',
        url: 'https://amirmaghami.ir/og-image.jpg'
      },
      sameAs: [
        'https://github.com/amirrr1987',
        'https://www.linkedin.com/in/amirrr1987',
        'https://stackoverflow.com/users/amirrr1987'
      ]
    }
  },

  ogImage: {
    // تنظیمات پیش‌فرض Open Graph image
    provider: 'twemoji',
    fonts: ['Inter'],
    presets: {
      default: {
        title: 'Amir Maghami',
        description: 'Frontend Developer | Vue.js | Nuxt.js',
        theme: 'dark'
      }
    }
  },

  seoUtils: {
    // Auto meta generation, canonical, etc.
    canonicalHost: 'https://amirmaghami.ir'
  },

  linkChecker: {
    failOn404: false,
    failOnRedirect: false
  }
})
