/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-bg": "#071422",
        "base-label": "#3A536B",
        "brand-blue": "#3294F8",
        "base-span": "#7B96B2",
        "base-input": "#040F1A",
        "base-profile": "#0B1B2B",
        "base-post": "#112131",
        "base-border": "#1C2F41",
        "base-text": "#AFC2D4",
        "base-subtitle": "#C4D4E3",
        "base-title": "#E7EDF4",
      },
      fontFamily: {
        rubik: ["var(--font-rubik)"],
      },
      backgroundImage: {
        "hero-img": "url('./public/cover.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require('@tailwindcss/typography')],
};
