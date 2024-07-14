/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#53B6FE",
        secondary: "#F3F4F7",
      },
    },
  },
  plugins: [],
};
