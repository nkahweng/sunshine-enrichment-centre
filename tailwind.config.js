/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      maxWidth: {
        content: "960px",
        wide: "1400px",
      },
      colors: {
        orange: "#F7941F",
        yellow: "#FAC946",
        darkblue: "#14264D",
        green: "#37B376",
        red: "#F44640",
        grey: "#727272",
      },
      fontFamily: {
        leagueSpartan: ["'League Spartan'", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        wide: "1440px",
      },
      backgroundImage: {
        "orange-yellow": "linear-gradient(to right, #F7941F, #FAC946)",
        "radial-darkblue": "radial-gradient(circle at 30%, #14264D, #2E58B3)",
        "linear-darkblue-top": "linear-gradient(to top, #14264D, #2E58B3)",
        "linear-darkblue": "linear-gradient(to right, #14264D, #2E58B3)",
        "linear-grey": "linear-gradient(to right, #727272, #D8D8D8)",
        "linear-green": "linear-gradient(to right, #184D33, #37B376)",
        "linear-red": "linear-gradient(to right, #8E2925, #F44640)",
        "linear-yellow": "linear-gradient(to right, #947729, #FAC946)",
        "linear-orange": "linear-gradient(to right, #915712, #F7941F)",
        "linear-light-orange": "linear-gradient(to right, #FDFBF6, #F6C72A)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(36px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-96px)" },
          "100%": { transform: "translateX(0)" },
        },
        popUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out forwards",
        slideRight: "slideRight 1s ease-out forwards",
        popUp: "popUp 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
