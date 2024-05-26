/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
export default  withMT({
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',],
    theme: {
    extend: {
      
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
  ],
})

