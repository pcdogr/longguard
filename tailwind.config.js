/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0B0A0A',
        'surface-subtle': '#121110',
        'surface-card': '#181716',
        'surface-elevated': '#1F1D1B',
        'bionic-amber': '#F59E0B',
        'bionic-amber-deep': '#D97706',
        'bionic-blue': '#0066CC',
        'titanium': '#E2E8F0',
      },
      fontFamily: {
        display: ['"Inter Tight"', '"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'tungsten-glow': 'radial-gradient(ellipse at 50% 0%, rgba(217, 119, 6, 0.14), transparent 70%)',
        'tungsten-rim': 'radial-gradient(circle at 50% 35%, rgba(245, 158, 11, 0.16), rgba(217, 119, 6, 0.04) 55%, transparent 75%)',
        'metallic-banner': 'linear-gradient(135deg, #181716 0%, #121110 50%, #1C1917 100%)',
      },
      boxShadow: {
        'amber-rim': '0 0 40px -10px rgba(245, 158, 11, 0.22)',
        'card-luxury': '0 24px 60px -15px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
