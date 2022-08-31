/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      gridRow: {
        "span-8": "span 8",
      },
    },
  },
  plugins: [],
};
