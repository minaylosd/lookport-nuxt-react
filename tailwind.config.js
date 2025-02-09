/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        geometria: ["var(--font-geometria)"],
        ag: ["var(--font-ag)"],
      },
      colors: {
        pagebg: "#0A0A0A"
      },
      screens: {
        "3xl": '1680px',
      }
    },
  },
  plugins: [],
};
