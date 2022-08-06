/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Angkor': ['Angkor', 'cursive'],
        'Poppins': ['Poppins', 'sans-serif'] 
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
