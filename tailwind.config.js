/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212D55",
        primaryDarker: "#656D89",
        blue: "#31BEF4",
        bluehover: "#2CABDC",
        gray: "#F9FCFD",
      },
      padding: {
        shorter4: "1vw",
        shorter3: "2vw",
        shorter2: "3vw",
        shorter: "4vw",
        normal: "6vw",
        longer: "8vw",
        longer2: "10vw",
        longer3: "12vw",
        longer4: "14vw",
        longer5: "16vw",
        longer6: "18vw",
        longer7: "20vw",
        longer8: "22vw",
        longer9: "24vw",
        longer10: "26vw",
      },
      margin: {
        shorter4: "1vw",
        shorter3: "2vw",
        shorter2: "3vw",
        shorter: "4vw",
        normal: "6vw",
        longer: "8vw",
        longer2: "10vw",
        longer3: "12vw",
        longer4: "14vw",
        longer5: "16vw",
        longer6: "18vw",
        longer7: "20vw",
        longer8: "22vw",
        longer9: "24vw",
        longer10: "26vw",
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
    },
  },
  plugins: [],
};
