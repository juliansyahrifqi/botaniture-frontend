const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B8765",
        "primary-20": "rgba(107, 135, 101, 20%)",
        sidebar: "#EDF0DA",
        hero: "A0B29B",
        "hero-40": "rgba(160, 178, 155, 40%)",
        secondary: "#9A9A9A",
        black: "#393939",
        "hero-primary": "#496341",
        "hero-secondary": "#73826D",
        white: "#ECEEF7",
        gold: "#FFAF37"
      },
    },
    fontFamily: {
      roboto: ['var(--font-roboto)'],
      sansation: ['var(--font-sansation)'],
    }
  },
  plugins: [],
};
