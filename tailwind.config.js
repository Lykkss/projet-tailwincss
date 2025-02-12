/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FAB637",
        secondary: "#FF4848",
        dark: "#232628",
        light: "#ECEFF3",
        accent: "#CC6119",
        blue: "#6C98E1",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

