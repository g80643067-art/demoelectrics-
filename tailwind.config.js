/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent: Electric Cyan (#43D9FF)
        cyan: {
          DEFAULT: '#43D9FF',
          50: '#f0fbff',
          100: '#e0f7fe',
          200: '#baeffd',
          300: '#7ee3fc',
          400: '#43D9FF',
          500: '#0fc4f5',
          600: '#00a3d4',
          700: '#0282ab',
          800: '#086b8b',
          900: '#0d5972',
        },
        // Secondary accent: Ice Blue (#A6E9F5)
        ice: {
          DEFAULT: '#A6E9F5',
          light: '#d6f6fc',
          dark: '#6ad5eb',
        },
        // Midnight Navy Palette
        navy: {
          DEFAULT: '#07111F',     // Main background: Deep Midnight Navy (#07111F)
          main: '#07111F',        // Deep Midnight Navy (#07111F)
          section: '#0B1928',     // Section backgrounds: Dark Navy (#0B1928)
          card: '#102334',        // Cards and containers: Deep Blue-Black (#102334)
          surface: '#102334',     // Deep Blue-Black (#102334)
          border: '#294252',      // Borders and dividers: Subtle Blue-Grey (#294252)
          muted: '#B8C5D1',       // Secondary text: Soft Grey (#B8C5D1)
        },
        // Theme Aliases to ensure 100% site-wide consistency
        aureolin: {
          DEFAULT: '#43D9FF',
          50: '#f0fbff',
          100: '#e0f7fe',
          200: '#baeffd',
          300: '#7ee3fc',
          400: '#43D9FF',
          500: '#0fc4f5',
          600: '#00a3d4',
          700: '#0282ab',
          800: '#086b8b',
          900: '#0d5972',
        },
        bistre: {
          DEFAULT: '#0B1928',
          deep: '#07111F',        // Deep Midnight Navy (#07111F)
          dark: '#0B1928',        // Section backgrounds: Dark Navy (#0B1928)
          card: '#102334',        // Cards and containers: Deep Blue-Black (#102334)
          surface: '#102334',     // Deep Blue-Black (#102334)
          border: '#294252',      // Borders: Subtle Blue-Grey (#294252)
          light: '#1b344b',
          muted: '#B8C5D1',       // Secondary text: Soft Grey (#B8C5D1)
        },
        violet: {
          DEFAULT: '#102942',
          dark: '#0a1b2d',
          deep: '#061423',
          light: '#173b5e',
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
        'card-dark': '0 10px 30px -10px rgba(0, 7, 18, 0.85)',
        'inner-light': 'inset 0 1px 1px 0 rgba(166, 233, 245, 0.15)',
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
