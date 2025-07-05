/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        searchBg: '#e5e7e9',
        primary: {
          50: "#caf0f8",
          100: "#ade8f4",
          200: "#90e0ef",
          300: "#48cae4",
          400: "#00b4d8",
          500: "#0096c7",
          600: "#0077b6",
          700: "#023e8a",
          800: "#03045e",
          900: "#0042b3",
        },
        secondary: {
          50: "#e6fff9",
          100: "#ccfff4",
          200: "#99ffe8",
          300: "#66ffdd",
          400: "#33ffd1",
          500: "#00BFA6", // Secondary color
          600: "#00ac95",
          700: "#009985",
          800: "#008574",
          900: "#006054",
        },
        accent: {
          50: "#fff2e6",
          100: "#ffe6cc",
          200: "#ffcc99",
          300: "#ffb366",
          400: "#ff9933",
          500: "#FF7D00", // Accent color
          600: "#e67100",
          700: "#cc6500",
          800: "#b35800",
          900: "#804000",
        },
        success: {
          500: "#10B981", // Success color
        },
        warning: {
          500: "#F59E0B", // Warning color
        },
        error: {
          500: "#EF4444", // Error color
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      // fontFamily: {
      //   sans: ["Inter", "system-ui", "sans-serif"],
      //   lucidacalligraphy: ["Lucida Calligraphy", "cursive"],
      // },
    },
  },
  plugins: [],
}