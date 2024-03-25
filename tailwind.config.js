/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        uber: "UberMoveText",
      },
      boxShadow: {
        bottomSheet: "0 -6px 10px rgba(0,0,0,0.1)",
      },
      animation: {
        fadeIn: "fadeIn .3s",
        steapProgress: "steapProgress 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        steapProgress: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
