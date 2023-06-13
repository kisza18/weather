/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgdark: "var(--bgdark)",
        primarydark: "var(--primarydark)",
        textdark: "var(--textdark)",
        primarybutton: "var(--primarybutton)",
        bglight: "var(--bglight)",
        primarylight: "var(--primarylight)",
        textlight: "var(--textlight)",
      },
    },
  },
  plugins: [],
};
