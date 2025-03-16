const flowbite = require("flowbite-react/tailwind");

/*eslint-env node*/

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin(), require("@tailwindcss/typography")],
  darkMode: "class",
};
