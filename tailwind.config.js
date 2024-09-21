/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{js,ts,jsx,tsx,svelte,html}",
  ],
  theme: {
    extend: {},
    colors: {
      "darkblue": "#01216e",
    },
  },
  plugins: [
    daisyui
  ],
}

