/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      bigelow: ["Bigelow Rules", "cursive"],
    },
    colors: {
      primary: {
        100: "#f8c476",
        200: "#f6b148",
        300: "#F49D1A",
        400: "#c37e15",
        500: "#925e10",
      },
      accent: "#EA047E",
      accent2: "#FCE700",
      transparent: "transparent",
      current: "currentColor",
      black: {
        100: "#121212",
        200: "#101010",
        300: "#0a0a0a",
        400: "#050505",
        500: "#000000",
      },
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
  },
  plugins: [],
}
