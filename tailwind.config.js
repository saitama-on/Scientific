/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: 'blink 0.8s ease-in-out infinite',
      },

      keyframes :{
        blink :{
          '50%' : {opacity : '0'},
        },
      },
    },
  },
  plugins: [],
}