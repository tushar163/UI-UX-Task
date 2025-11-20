// tailwind.config.js
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FF9933",
        secondary: "#FFD700",
        tertiary: "#4B6F44",
        accent: "#1E3A8A",
        default: "#333333",
        info: "#666666"
      }
    },
  },
  darkMode: "class",
  plugins: [heroui(
    {
      theme: {
        extend: {
          colors: {
            primary: "#FF9933",
            secondary: "#FFD700",
            tertiary: "#4B6F44",
            accent: "#1E3A8A",
            default: "#333333",
            info: "#666666"
          }
        }
      }
    }
  )],
};