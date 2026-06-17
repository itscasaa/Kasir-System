/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1447dd',
        primaryContainer: '#3b63f6',
        primaryHover: '#315CF6',
        primaryLight: '#EEF3FF',
        background: '#f8f9fb',
        surface: '#FFFFFF',
        surfaceMuted: '#F9FAFB',
        borderBase: '#E5E7EB',
        textPrimary: '#111827',
        textSecondary: '#6B7280',
        textMuted: '#9CA3AF',
        success: '#22C55E',
        warning: '#FB923C',
        error: '#EF4444',
        navbar: '#222222',
      },
      borderRadius: {
        'container': '18px',
        'card': '12px',
        'input': '10px',
      },
      boxShadow: {
        'pos': '0 8px 40px 0 rgba(20,71,221,0.08), 0 2px 8px 0 rgba(0,0,0,0.06)',
        'card': '0 1px 4px 0 rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
}
