/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B6CFF",
        secondary: "#7B3FE4",
        background: "#0F172A"
      }
    },
  },
  plugins: [],
}