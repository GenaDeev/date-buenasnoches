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
      },
      keyframes: {
        zoomIn: {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        zoomIn: 'zoomIn 0.3s ease-in-out',
      },
    },
  },
  plugins: [daisyui, flowbite.plugin()],
}