/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bigtech: ["Bigtech", "sans-serif"],
        // 2026 refresh: these names now use Inter / Bricolage Grotesque.
        // The original fonts are kept as fallbacks.
        smalltech: ["Inter", "smalltech", "sans-serif"],
        bignote: ["Bricolage Grotesque", "bignote", "sans-serif"],
        display: ["Bricolage Grotesque", "sans-serif"],
        body: ["Inter", "sans-serif"],
        lvreg: ["lvreg", "sans-serif"],
        lvbold: ["lvbold", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        popreg: ["Inter", "poppinsreg", "sans-serif"],
        worksans: ["Inter", "worksans", "sans-serif"]

      },
      colors: {
        accent: { DEFAULT: "#6D28D9", light: "#C4B5FD", soft: "#EDE9FE" },
        cream: "#F6F4F1",
      },
    },
  },
  plugins: [],
}

