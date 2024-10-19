/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{tsx,jsx,ts,js}", "./components/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {
      colors: {
        "shika-red": "#FF0000",
        "shika-blue": "#4345E7",
        "shika-green": "#34A853",
        "shika-yellow": "#FBBC04"
    },
  }
  },
  plugins: [],
}

