/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "var(--dark-blue)",
        "dark-brown": "var(--dark-brown)",
        "f-5ee-84": "var(--f-5ee-84)",
        "light-yellow": "var(--light-yellow)",
        "too-light-yellow": "var(--too-light-yellow)",
        "x-258-3b-42-1d-027414-4b-457-2ac-8e-8-6f-2-5a-3": "var(--x-258-3b-42-1d-027414-4b-457-2ac-8e-8-6f-2-5a-3)",
        yellow: "var(--yellow)",
      },
      fontFamily: {
        "engenharia-de-software": "var(--engenharia-de-software-font-family)",
      },
    },
  },
  plugins: [],
};
