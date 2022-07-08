/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        "img-size": "1600px",
        "rectangle-width": "3rem",
        "modal-img-width": "100px",
      },
    },
  },
  plugins: [],
};
