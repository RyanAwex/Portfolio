/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // use class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2b6ef6",
        },
        accent: {
          DEFAULT: "#2563eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
