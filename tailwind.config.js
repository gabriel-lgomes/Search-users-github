/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#eceff4',
        'primary': '#47525e',
        'primary-grey': '#b1b5be'
      }
    },
  },
  plugins: [],
}