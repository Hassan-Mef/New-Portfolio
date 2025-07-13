/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       transform: {
        'preserve-3d': 'preserve-3d',
        'rotateY-180': 'rotateY(180deg)',
      },
    },
  },
  plugins: [],
}
