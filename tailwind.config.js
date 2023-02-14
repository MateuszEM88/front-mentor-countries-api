/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkBlue: "hsl(209, 23%, 22%)",
      vDarkBlueDark: "hsl(207, 26%, 17%)",
      vDarkBlueLight: "hsl(200, 15%, 8%)",
      darkGray: "hsl(0, 0%, 52%)",
      vLightGray: "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
