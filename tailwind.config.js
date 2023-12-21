/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "black-gradient":"linear-gradient(to top , #041529 70%, #028cb6 150%)",
        "profile":"url('./assets/profile.jpg')",
        "map":"url('./assets/map.png')",
      },

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
      },
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
      },
      fontFamily:{
        "Poppins":"Poppins"
      },
      animation: {
        'lights': 'lights 4s linear infinite',
      },
      keyframes: {
        lights: {
          "0%, 30.1%, 70%, 90%":{
            color: '#082a34',
            textShadow:'none'
          },
          "18.1%, 20.1%,  50%, 100%":{
            color: 'white',
            textShadow: '0 0 10px #03bcf4, 0 0 20px #03bcf4, 0 0 40px #03bcf4, 0 0 70px #03bcf4',
          },
        },
    },
  },
  plugins: [
  ],
}
}