/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
        'sm': '600px',
        'tablet': '750px',
        'laptop': '900px',
        'desktop': '1050px',
        'double': '1250px',
      },
    },
  },
  plugins: [],
}

