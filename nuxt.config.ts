// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const rootDir = dirname(fileURLToPath(import.meta.url))
const piniaEsm = join(rootDir, 'node_modules/pinia/dist/pinia.mjs')

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // Netlify SSR: use Nitro's Netlify preset (dist + serverless functions).
  nitro: {
    preset: 'netlify',
  },
  // Pinia's production Node export is CJS (pinia.prod.cjs) and imports Vue's
  // default export, which breaks Nitro SSR. Force the ESM build instead.
  alias: {
    pinia: piniaEsm,
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/icon',
  ],
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