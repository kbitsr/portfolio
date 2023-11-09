/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',

      },
      gridRowStart: {
        '7': '7',
        '8': '8',
      },
      gridRowEnd: {
        '7': '7',
        '8': '8',
        '9': '9',
      }
    },
  },
  plugins: [],
}