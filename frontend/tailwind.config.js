/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bigtech: ["Bigtech", "sans-serif"],
        smalltech: ["smalltech", "sans-serif"],
        bignote: ["bignote", "sans-serif"],
        lvreg: ["lvreg", "sans-serif"],
        lvbold: ["lvbold", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        popreg: ["poppinsreg", "sans-serif"]

      },
    },
  },
  plugins: [],
}

