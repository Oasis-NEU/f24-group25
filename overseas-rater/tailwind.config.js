/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'body' : ['Gabarito', 'sans-serif']
      },
      colors: {
        'background': '#FFFFFFF',
        'accent': '#E71A1A',
        'cardBg' : '#E9E8E8'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio')
  ],
}

