import keepPreset from "keep-react/preset";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'theme-color-100': '#00E5CC',
        'theme-color-200': '#ECF9FF',
        'theme-color-300': '#060640',
        'theme-color-400': '#000020'
      },
      fontFamily: {
        customFont: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}