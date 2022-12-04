/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(29, 155, 240)",
        "primary-dark": "rgb(26, 138, 214)",
        "primary-disabled": "rgba(29, 155, 240, 0.5)",
        "opacity-shadow": "rgba(0, 0, 0, 0.05)"
      }
    },
  },
  plugins: [require("daisyui")],
};
