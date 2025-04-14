/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-mona-sans)'],
      },
      height: {
        screen: '100dvh',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1.5rem))' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
      },
    },
  },
  plugins: [],
} 