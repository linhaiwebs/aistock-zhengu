/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#000000',
        'dark-secondary': '#1a0a2e',
        'dark-purple': '#2d1b4e',
        'light-green': '#a8e6a1',
        'lighter-green': '#c8f5c3',
        'gold': '#FFD700',
        'gold-dark': '#FFA500',
        'bright-yellow': '#FFC93C',
        'accent-red': '#dc2626',
        'accent-red-dark': '#b91c1c',
        'light-blue': '#e0f2fe',
        'pale-blue': '#dbeafe',
        'deep-blue': '#1e3a8a',
        'medium-blue': '#3b82f6',
        'navy-dark': '#061652',
        'card-dark': '#1c2242',
        'pale-yellow': '#fef9c3',
        'label-green': '#10b981',
        'purple-gradient-start': '#667eea',
        'purple-gradient-end': '#764ba2',
        'text-light': '#F9FAFB',
        'text-muted': '#E5E7EB',
        'border-subtle': '#6B7280',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(to bottom right, #0a0e1a, #111827, #0a0e1a)',
        'red-glow': 'radial-gradient(circle, rgba(220, 38, 38, 0.2), transparent)',
        'white-to-blue': 'linear-gradient(to bottom, #ffffff, #e0f2fe)',
        'blue-horizontal': 'linear-gradient(to right, #1e3a8a, #3b82f6)',
        'blue-radial': 'radial-gradient(circle, #3b82f6, transparent)',
        'purple-main': 'linear-gradient(180deg, #4A4563 0%, #3A3452 100%)',
        'purple-button': 'linear-gradient(135deg, #6B63FF 0%, #8B83FF 100%)',
        'purple-hover': 'linear-gradient(135deg, #5A52E8 0%, #7A73EF 100%)',
      },
      boxShadow: {
        'red-glow': '0 0 20px rgba(220, 38, 38, 0.5)',
        'red-glow-lg': '0 0 40px rgba(220, 38, 38, 0.6)',
        'yellow-glow': '0 0 15px rgba(254, 249, 195, 0.6)',
        'blue-glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'blue-glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.5)',
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-rotate': 'float-rotate 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)' },
        },
        'float-rotate': {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(5deg) translateY(-10px)' },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        'title': ['HYYaKuHeiW', 'Noto Sans JP', 'sans-serif'],
        'subtitle': ['Adobe Heiti Std', 'Hiragino Sans', 'sans-serif'],
      },
      spacing: {
        '7.5': '30px',
      },
      borderRadius: {
        'modern-xl': '20px',
        'modern-lg': '16px',
        'modern-md': '12px',
      },
    },
  },
  plugins: [],
};
