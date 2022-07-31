import { defineNuxtConfig } from 'nuxt'
const SITE_URL = '/werner.best/'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: 'static',
  app: {
    baseURL: SITE_URL,
    cdnURL: `https://wernersa.github.io${SITE_URL}`,
  },
  generate: {
    routes: ['/api/obfuscated']
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
    // TODO: Consider adding store: '@pinia/nuxt',
    // TODO: Consider privacy oriented analytics tools, i.e. Plausible ('vue-plausible') or Umami
  ],
  css: [
    '@/assets/css/main.css'
    // https://color-mode.nuxtjs.org
  ],
  colorMode: {
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['navTitle', 'navigation']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
    }
  }
})
