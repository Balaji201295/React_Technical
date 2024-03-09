/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#114405",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      caveat: ["Caveat", "sans-serif"],
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
};
