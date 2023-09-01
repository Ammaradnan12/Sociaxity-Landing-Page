/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "governor-bay": {
          50: "#edf3ff",
          100: "#deeaff",
          200: "#c3d8ff",
          300: "#9fbdff",
          400: "#7897ff",
          500: "#5971fb",
          600: "#3a47f1",
          700: "#2d36d5",
          800: "#2a34b6",
          900: "#283287",
          950: "#171a4f",
        },
      },
    },
  },
  plugins: [],
};
