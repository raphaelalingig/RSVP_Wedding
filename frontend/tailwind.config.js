/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        aniyah: ["Aniyah Personal Use", "sans-serif"], // Add your font here
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
