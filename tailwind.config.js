module.exports = {
  mode: "jit",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* First attempt
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
        fadeOut: "fadeOut 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },*/
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [],
};
