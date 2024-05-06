/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#d4e7d3",
        secondary: "#487454",
        tertiary: "#151030",
        "black-100": "white",
        "black-200": "#487454",
        "white-100": "white",
        'bg-green': '#c8cdcd',
        'orange' : '#D37B36',
        'back' : '#C7FFDC' 
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        xl : "1200px",
        lg: '1440px'
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        
      },
    },
  },
  plugins: [],
};