/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          dark: '#0f172a',
          navy: '#1e293b',
          slate: '#334155',
          accent: '#0ea5e9',
          'accent-light': '#38bdf8',
          cream: '#f8fafc',
          warm: '#f1f5f9',
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0,0,0,0.06)',
        'card': '0 10px 40px rgba(0,0,0,0.08)',
        'hover': '0 20px 50px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
}
