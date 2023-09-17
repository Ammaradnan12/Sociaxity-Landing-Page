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
        "outer-space": {
          50: "#f4f6f7",
          100: "#e3e8ea",
          200: "#c9d3d8",
          300: "#a4b4bc",
          400: "#778c99",
          500: "#5c717e",
          600: "#4f5f6b",
          700: "#44505a",
          800: "#3d454d",
          900: "#343a40",
          950: "#21262b",
        },
      },
    },
  },
  plugins: [],
};
