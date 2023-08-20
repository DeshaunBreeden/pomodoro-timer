/** @type {import('tailwindcss').Config} */
module.exports =  {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fonFamily: {
      fontFamily: ["Montserrat", "sans-serif"],
    },
    colors: {
      'pmd-blue-100': '#FCEDDA',
      'pmd-blue-600': '#EE4E34',     
      'pmd-blue-800': '#1e2140',
      'pmd-blue-900': '#151932',
      'pmd-red-700': '#262a57',
    },
    extend: {},
  },
  plugins: [],
};

