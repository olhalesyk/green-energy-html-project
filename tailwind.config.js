/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./post.html", "./js/**/*.js"],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/imgs/icons/lime-dot.svg")',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        13: "repeat(13, minmax(100px, 1fr))",
        14: "repeat(14, minmax(100px, 1fr))",
        14: "repeat(15, minmax(100px, 1fr))",
        16: "repeat(16, minmax(100px, 1fr))",
        17: "repeat(17, minmax(100px, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
        "span-17": "span 17 / span 17",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
    },
    container: {
      center: true,
    },
    colors: {
      primary: "#1D1F1E",
      secondary: "#646A69",
      lowContrast: "#929C9A",
      greensection: "#022c22",
    },
    fontFamily: {
      body: ['"Figtree"', "sans-serif"],
    },
  },
  plugins: [
    require("flowbite/plugin"),
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    "prettier-plugin-tailwindcss",
  ],
};
