/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary accent: Vibrant Red (#EF4444)
        cyan: {
          DEFAULT: '#EF4444',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        // Secondary accent: Silver / Light Grey (#E5E7EB)
        ice: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
          dark: '#9CA3AF',
        },
        // Black & Charcoal Grey Palette
        navy: {
          DEFAULT: '#0A0A0A',     // Main background: Pitch Black (#0A0A0A)
          main: '#0A0A0A',        // Pitch Black (#0A0A0A)
          section: '#121212',     // Section backgrounds: Dark Charcoal (#121212)
          card: '#18181B',        // Cards and containers: Deep Zinc/Grey-Black (#18181B)
          surface: '#18181B',     // Deep Zinc/Grey-Black (#18181B)
          border: '#27272A',      // Borders and dividers: Muted Dark Grey (#27272A)
          muted: '#A1A1AA',       // Secondary text: Cool Grey (#A1A1AA)
        },
        // Theme Aliases to ensure 100% site-wide consistency
        aureolin: {
          DEFAULT: '#EF4444',
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        bistre: {
          DEFAULT: '#121212',
          deep: '#0A0A0A',        // Pitch Black (#0A0A0A)
          dark: '#121212',        // Section backgrounds: Dark Charcoal (#121212)
          card: '#18181B',        // Cards and containers: Deep Zinc/Grey-Black (#18181B)
          surface: '#18181B',     // Deep Zinc/Grey-Black (#18181B)
          border: '#27272A',      // Borders: Muted Dark Grey (#27272A)
          light: '#27272A',
          muted: '#A1A1AA',       // Secondary text: Cool Grey (#A1A1AA)
        },
        violet: {
          DEFAULT: '#18181B',
          dark: '#121212',
          deep: '#0A0A0A',
          light: '#27272A',
          glow: '#EF4444',
          accent: '#E5E7EB',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Caveat"', 'cursive', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'glow-yellow': '0 0 25px -4px rgba(239, 68, 68, 0.55)',
        'glow-yellow-lg': '0 0 50px -5px rgba(239, 68, 68, 0.45)',
        'glow-cyan': '0 0 25px -4px rgba(239, 68, 68, 0.55)',
        'glow-cyan-lg': '0 0 50px -5px rgba(239, 68, 68, 0.45)',
        'glow-violet': '0 0 35px -5px rgba(239, 68, 68, 0.3)',
        'glow-ice': '0 0 30px -5px rgba(229, 231, 235, 0.4)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.85)',
        'inner-light': 'inset 0 1px 1px 0 rgba(229, 231, 235, 0.15)',
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
