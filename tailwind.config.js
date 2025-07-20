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
        "project-beige-0": "#FBF6F0",
        "project-beige-100": "#E9DCCB",
        "project-beige-200": "#C3B4A1",
        "project-grey": "#858585",
        "project-black": "#252730",
        "project-blue-0": "#EEF0F1",
        "project-blue-100": "#DDE9F8",
        "project-blue-200": "#BFD3EB",
        "project-blue-300": "#91B2DB",
        "project-blue-400": "#719ED6",
        "project-blue-500": "#4877B1",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        gloock: ["GloockRegular", "serif"],
      },
      backgroundImage: {
        gradientImage: "url('/gradient.png')",
      },
    },
  },
  plugins: [],
};
