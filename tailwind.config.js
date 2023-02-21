/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{html,js}"],
  theme: {
    extend: {},
    colors:{
      "gr":"#d7d4d4",
      "gry":"#737373",
      "gry_txt":"#d1d5db",
      "gryy":"#a9a9a9",
      "bw":"#010001",
      "pink":"#F9CDCD"
    },
    fontFamily:{
      "grotesk" : ['Hanken Grotesk', 'sans-serif'],
      "cormorant":['Cormorant Garamond', 'serif'],
      "proza":["Proza Libre", "sans-serif"],
      "dm":['DM Sans', 'sans-serif']
    }
  },
  plugins: [],
}
