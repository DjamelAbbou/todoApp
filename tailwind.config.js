/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: '#161616',
  '50': '#C3C3C3',
  '100': '#B9B9B9',
  '200': '#A5A5A5',
  '300': '#909090',
  '400': '#7C7C7C',
  '500': '#686868',
  '600': '#535353',
  '700': '#3F3F3F',
  '800': '#2A2A2A',
  '900': '#161616'
        }
      }
    },
  },
  plugins: [],
}