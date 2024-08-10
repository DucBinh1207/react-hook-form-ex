/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        peri: "#6c63ff",
        "custom-gray-checked": "rgba(255, 255, 255, 0.5)",
        "custom-bg": "rgba(0, 0, 0, 0.5)",
      },
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
