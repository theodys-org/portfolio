/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CF63FF",
        secondary: "#F3F4F7",
      },
    },
  },
  plugins: [],
};
