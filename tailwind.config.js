module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      beige: "#EAE3CD",
      blue: "#353C42",
      pink: "#C86B7B",
      grey: "#9F9797",
      white: "#fff",
      linkBlue: "#3366CC",
    },
    fontSize: {
      paragraph: "1.125rem",
      subheading: "1.375rem",
      heading: "2.25rem",
    },
    fontFamily: {
      novaSlim: "nova_slim",
      quicksand: "quicksand",
    },
    screens: {
      tablet: "900px",
      slides: "1000px",
      slides2: "1100px",
      slides3: "1275px",
      desktop: "1400px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
