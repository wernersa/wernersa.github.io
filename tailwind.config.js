
module.exports = {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')
  ],
  content: [
    'content/**/*.{md,yml,json,json5,csv}',
    'components/**/*.{vue,js,ts}',
    'pages/**/*.{vue,js,ts}',
    'app.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
      }
    }
  }
}
