/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orpheus: ['Orpheus', 'sans-serif'], 
        futura: ['Futura', 'sans-serif'],
      },
      backgroundImage: {
        'dynatac': "url('./bg1.png')",
      },
    },
  },
  plugins: [],
}
