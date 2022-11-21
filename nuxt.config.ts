
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    cdnURL: 'https://www.werner.best/'
  },
  generate: {
    routes: ['/api/obfuscated']
  },
  nitro: {
    prerender: {
      routes: ['/404.html'] // Hacky way of rendering a static 404 error from the [slug].vue
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
    // TODO: Update after workaround fixed 'floating-vue/nuxt'
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
