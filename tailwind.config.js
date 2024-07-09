import daisyui from "daisyui"
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      dropShadow: {
        'gena': '0 35px 35px #1db954'
      }
    },
  },
  plugins: [daisyui, flowbite.plugin()],
}

