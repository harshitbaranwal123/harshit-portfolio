/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0D0D0D',
          soft: '#1A1A1A',
          muted: '#2D2D2D',
        },
        cream: {
          DEFAULT: '#F5F0E8',
          soft: '#FAF7F2',
          warm: '#EDE8DF',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E8C878',
          dark: '#9B7A2E',
        },
        sage: {
          DEFAULT: '#7A9E7E',
          light: '#9DB89F',
          dark: '#5A7E5E',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
