/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: '#43D9FF',
          50: '#E6F9FF',
          100: '#B3EEFF',
          200: '#80E2FF',
          300: '#4DD7FF',
          400: '#26Cfff',
          500: '#43D9FF',
          600: '#00B4E6',
          700: '#0088B3',
          800: '#005C80',
          900: '#003040',
        },
        ice: {
          DEFAULT: '#A6E9F5',
          light: '#E6F9FF',
          dark: '#294252',
        },
        navy: {
          DEFAULT: '#07111F',
          main: '#07111F',
          section: '#0B1928',
          card: '#102334',
          surface: '#102334',
          border: '#294252',
          muted: '#8AA2B2',
        },
        aureolin: {
          DEFAULT: '#43D9FF',
          50: '#E6F9FF',
          100: '#B3EEFF',
          200: '#80E2FF',
          300: '#4DD7FF',
          400: '#26Cfff',
          500: '#43D9FF',
          600: '#00B4E6',
          700: '#0088B3',
          800: '#005C80',
          900: '#003040',
        },
        bistre: {
          DEFAULT: '#0B1928',
          deep: '#07111F',
          dark: '#0B1928',
          card: '#102334',
          surface: '#102334',
          border: '#294252',
          light: '#162C3F',
          muted: '#8AA2B2',
        },
        violet: {
          DEFAULT: '#102334',
          dark: '#0B1928',
          deep: '#07111F',
          light: '#162C3F',
          glow: '#43D9FF',
          accent: '#A6E9F5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'glow-yellow': '0 0 25px -4px rgba(67, 217, 255, 0.55)',
        'glow-yellow-lg': '0 0 50px -5px rgba(67, 217, 255, 0.45)',
        'glow-cyan': '0 0 25px -4px rgba(67, 217, 255, 0.55)',
        'glow-cyan-lg': '0 0 50px -5px rgba(67, 217, 255, 0.45)',
        'glow-violet': '0 0 35px -5px rgba(67, 217, 255, 0.3)',
        'glow-ice': '0 0 30px -5px rgba(166, 233, 245, 0.4)',
        'card-dark': '0 12px 35px -8px rgba(0, 7, 18, 0.9)',
        'inner-light': 'inset 0 1px 1px 0 rgba(67, 217, 255, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
