/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundColor: {
        heroColor: "#08162B",
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(108.27deg, rgba(255, 255, 255, 0.5) 3.59%, rgba(255, 255, 255, 0.2) 98.72%)",
      },
      colors: {
        white: "#FFFFFF",
        orange: "#F29494",
      },
    },
  },
  plugins: [],
};
