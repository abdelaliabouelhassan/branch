/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#ffba19",
        primaryLight:"#ffd675",
        secondary:"#001f3f",
        secondaryLight:"#001f3f",
        headerColor:"#1a1a1a",
        bodyTextColor:"#4e4b66",
        bodyTextColorWhite:"#fafbfc"
      },
      screens:{
        mdd:"857px",
      }
    },
  },
  plugins: [],
}