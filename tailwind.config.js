/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040812',
          900: '#07101E',
          850: '#0B172C',
          800: '#0F203C',
          750: '#142A4E',
          700: '#1B3766',
          600: '#254E8D',
          500: '#3268BC',
          400: '#4B88E8',
          300: '#7BAEFC',
          200: '#BAE0FD',
          100: '#E0F0FE',
          50: '#F0F7FF',
        },
        cobalt: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E40AF',
          glow: '#60A5FA',
        },
        editorial: {
          paper: '#0A1322',
          card: '#0D1B2E',
          border: '#1A2F4C',
          muted: '#8A99AD',
          highlight: '#2DD4BF',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'glitch': 'glitch 1s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

