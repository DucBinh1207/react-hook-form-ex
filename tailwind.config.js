/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arial: ("Arial", "Helvetica", "sans-serif"),
      },
      gridTemplateRows: {
        form: "repeat(6, 100px)",
      },
      gridTemplateColumns: {
        form: "repeat(2, 415px)",
      },
    },
  },
  plugins: [],
};
