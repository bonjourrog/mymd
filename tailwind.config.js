/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "app-black-raisin": "#22232b",
        "app-gray-granite": "#31323c",
        "app-gray-slate": "#41424730"
      }
    },
  },
  plugins: [],
}

