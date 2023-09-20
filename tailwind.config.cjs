/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        darkPurple : "#c77e6b", // Dark Red
        darkGrey : "#FFF5E0", // Orange
        offWhite : "#040D12", // Orange-Red
        transparent: "#00000059",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "868px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
