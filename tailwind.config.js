module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          25: "#FFF6D6",
        },
        red: {
          1000: "#4d0302",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
