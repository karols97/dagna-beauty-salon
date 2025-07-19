/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/elements/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#FBF6F0",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        gloock: ["GloockRegular", "serif"],
      },
      backgroundImage: {
        gradientImage: "url('/static/gradient.png')",
      },
    },
  },
  plugins: [],
};
