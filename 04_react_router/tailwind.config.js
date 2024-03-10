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
      xs: "425px",
      ss: "600px",
      sm: "768px",
      md: "991px",
      lg: "1199px",
      xl: "1600px",
    },
  },
  plugins: [],
};
