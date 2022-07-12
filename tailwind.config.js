/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          light: "#c05050",
          DEFAULT: "#3f92a9ed",
          dark: "#c05050",
        },
        primary: {
          light: "#0000",
          DEFAULT: "#FFFF",
          dark: "#010101",
        },
        secondary: {
          DEFAULT: "#474747",
          dark: "#EFEFEF",
        },
        background: {
          DEFAULT: "#F9F9F9",
          dark: "#0A0A0A",
        },
        foreground: {
          DEFAULT: "#EFEDED",
          dark: "#161616",
        },
      },
      screens: {
        xs: "500px",
      },
      height:{
        quatre:"80vh"
      }
    },
  },
  plugins: [],
};
