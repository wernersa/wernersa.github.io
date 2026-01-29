
// https://nuxt.com/docs/api/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2026-01-27',

  ssr: true,

  app: {
    // https://nuxt.com/docs/api/configuration/nuxt-config#head
    head: {
      script: [
        // https://werner.goatcounter.com/
        {
          'data-goatcounter': 'https://werner.goatcounter.com/count',
          async: true,
          src: '//gc.zgo.at/count.js'
        }
      ]
    },
    cdnURL: 'https://www.werner.best/'
  },
  nitro: {
    prerender: {
      routes: ['/404.html', '/api/obfuscated'] // Static 404 error and API route
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/eslint'
  ],

  css: [
    '@/assets/css/main.css'
  ],

  colorMode: {
    classSuffix: ''
  }
})
