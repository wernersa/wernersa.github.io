
module.exports = {
  mode: 'jit', // For overriding prose class
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography')

  ],
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      fontFamily: {
      }
    }
  }
}
