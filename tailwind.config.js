/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#eeeeee",
          foreground: "#cf0a0a",
        },
        footer: {
          first: "#618b4a",
          second: "#000000",
        },
        light: "#ffffff",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
