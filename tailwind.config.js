/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {
       transform: {
        'preserve-3d': 'preserve-3d',
        'rotateY-180': 'rotateY(180deg)',
      },
      animation: {
    'spin-slow': 'spin 8s linear infinite',
  },
       transformOrigin: ['group-hover'],
  transitionProperty: {
    transform: 'transform',
  }
    },
  },
  plugins: [],
}
