/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#4158D0',
        'custom-pink': '#C850C0',
        'custom-yellow': '#FFCC70',
        'custom-blue-dark': '#0093E9',
        'custom-teal': '#80D0C7',
      },
      rotate: {
        'y-180': 'rotateY(180deg)', // Agregar rotación en el eje Y
      },
      perspective: {
        '1000': '1000px', // Agregar perspectiva
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d', // Agregar estilo de transformaciones 3D
      },
      backfaceVisibility: {
        'hidden': 'hidden', // Agregar visibilidad de la parte posterior
      },
    },
  },
  plugins: [],
}
