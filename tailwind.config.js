/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      lg: { max: "1299.99px" },
      md: { max: "1039.99px" },
      sm: { max: "767.99px" },
      xs: { max: "424.99px" },
    },
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
        black: "#000000",
      },
    },
  },
  plugins: [],
};
