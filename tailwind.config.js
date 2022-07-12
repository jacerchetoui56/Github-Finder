/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgb(31,42,72)',
          200: 'rgb(20,28,47)'
        }
      }
    },
  },
  plugins: [],
}
