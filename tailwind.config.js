/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',

        },

        purple: {
         500: '#7C3AED' 
        }
      },

      fontFamily: {
        sans: 'Titillium Web, sans-serif',
      }
    },
  },
  plugins: [],
}

