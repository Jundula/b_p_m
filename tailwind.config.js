/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgXS: "url('../images/BarberXS.svg')",
        bgS: "url('../images/Barber5.svg')",
      },
      fontFamily: {
        Angkor: ["Angkor", "cursive"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
