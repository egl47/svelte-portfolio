/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    keyframes: {
      'fade-in-down': {
          '0%': {
              opacity: '0',
              transform: 'translateY(-10px)'
          },
          '100%': {
              opacity: '1',
              transform: 'translateY(0)'
          },
      }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.7s ease-out'
    },
    fontFamily: {
      'sans': ["Helvetica Neue", 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
}

