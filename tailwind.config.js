/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/main.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        main0: "#FFF6D6",
        main1: "#FFF2C7",
        main2: "#FFEEB6",
        main3: "#FFE07B",
      },
      keyframes: {
        landing: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(0, 100vh)" },
        },
      },
      animation: {
        landing: "landing 10s linear alternate infinite",
      },
    },
  },
  plugins: [],
};
