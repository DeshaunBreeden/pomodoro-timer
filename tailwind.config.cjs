/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontFamily: ["Montserrat", "sans-serif"],
    },

    extend: {
      colors: {
        "pmd-blue-50": "#EE4E34",
        "pmd-blue-100": "#EE4E34",
        "pmd-blue-300": "#EE4E34",
        "pmd-blue-600": "#EE4E34",
        "pmd-blue-800": "#FCEDDA",
        "pmd-blue-900": "#FCEDDA",
        "pmd-red-600": "#FCEDDA",
        "pmd-red-700": "#FCEDDA",
      },
    },
  },
  plugins: [],
};

