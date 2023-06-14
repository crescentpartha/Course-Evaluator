/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  daisyui: {
    // themes: ["light"],
    themes: [
      {
        mytheme: {
          "primary": "#59A8F1",
          "secondary": "#262626",
          "accent": "#079073",
          "neutral": "#D9D9D9",
          "info": "#EDEDED",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'lato': ["Lato, sans-serif"],
        'lobster': ["Lobster, cursive"],
        'opensans': ["Open Sans, sans-serif"]
      }
    },
  },
  plugins: [require("daisyui")],
}

