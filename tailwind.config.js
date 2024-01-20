/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      tableLayout: ["hover", "focus"],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
