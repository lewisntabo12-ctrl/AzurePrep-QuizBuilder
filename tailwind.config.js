/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563EB',
          'blue-light': '#3B82F6',
          'blue-dark': '#1D4ED8',
          navy: '#142B4A',
          'navy-light': '#1E3A5F',
          teal: '#0D9488',
          'teal-light': '#14B8A6',
          'teal-dark': '#0F766E',
        },
        surface: {
          page: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        },
        ink: {
          primary: '#1E293B',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        feedback: {
          success: '#15803D',
          'success-bg': '#F0FDF4',
          'success-border': '#BBF7D0',
          error: '#B91C1C',
          'error-bg': '#FEF2F2',
          'error-border': '#FECACA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'fade-in-down': 'fadeInDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.25s ease-out',
        'slide-down': 'slideDown 0.35s ease-out',
        'progress-fill': 'progressFill 0.5s ease-out',
        'shake': 'shake 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          '0%': { opacity: '0', maxHeight: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', maxHeight: '600px', transform: 'translateY(0)' },
        },
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-6px)' },
          '75%': { transform: 'translateX(6px)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,0.07), 0 1px 2px 0 rgba(0,0,0,0.04)',
        'card-hover': '0 8px 25px 0 rgba(0,0,0,0.08), 0 4px 10px 0 rgba(0,0,0,0.04)',
        'elevated': '0 12px 40px 0 rgba(0,0,0,0.10)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
