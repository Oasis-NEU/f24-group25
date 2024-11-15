/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  daisyui: {
    themes: [
      {
        light: {
          'background' : '#FFFFFF',
          'primary': '#E71A1A',
          'base-100' : '#E9E8E8',
          'accent': '#E71A1A',
          'neutral' : "black"
        },
        dark: {
          
        }
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'body' : ['Gabarito', 'sans-serif']
      },
      colors: {
        'background': '#FFFFFFF',
        'accent': '#E71A1A',
        'cardBg' : '#E9E8E8',
        'base-100' : '#E9E8E8'
      }
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio')
  ],
}

