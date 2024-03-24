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
    },
  },
  plugins: [],
};
