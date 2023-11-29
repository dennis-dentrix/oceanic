/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#383634",
        green: "#2afbcc",
        grey: "#edeae7",
        blue: "#0090c6",
        blush: "#E55381",
      },
    },
  },
  plugins: [],
};
