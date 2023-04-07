/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px", // xtra small screen
      ss: "620px", // slightly small screen
      sm: "768px", // small screen
      md: "1060px", // medium screen
      lg: "1200px", // large screen
      xl: "1700px", // xtra large screen
    },
  },
  plugins: [],
};
