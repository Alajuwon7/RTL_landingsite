/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'primary': ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        // Neutral Background
        'bg-primary': '#272830',
        'bg-secondary': '#1a1b23',
        'bg-elevated': '#2f3038',
        
        // Brand Colors
        'magenta': {
          'base': '#A61470',
          'light': '#C61B8E',
          'dark': '#8A1160',
        },
        'red': {
          'base': '#E2021A',
          'light': '#FF1A33',
          'dark': '#B80115',
        },
        'purple': {
          'base': '#7B2CBF',
          'light': '#9D4EDD',
          'dark': '#5A189A',
        },
        
        // Semantic Colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
        
        // Text Colors
        'text-primary': '#FFFFFF',
        'text-secondary': 'rgba(255, 255, 255, 0.7)',
        'text-tertiary': 'rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #A61470 0%, #E2021A 100%)',
        'gradient-primary-vertical': 'linear-gradient(180deg, #A61470 0%, #E2021A 100%)',
        'hero-background': 'radial-gradient(circle at 50% 20%, rgba(166, 20, 112, 0.15) 0%, rgba(39, 40, 48, 1) 60%)',
        'card-glow': 'radial-gradient(circle at 50% 0%, rgba(166, 20, 112, 0.2) 0%, transparent 70%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(166, 20, 112, 0.1) 0%, rgba(226, 2, 26, 0.1) 100%)',
      },
      spacing: {
        'section-hero-py': 'clamp(4rem, 12vh, 8rem)',
        'section-hero-px': 'clamp(1rem, 5vw, 2rem)',
        'section-standard-py': 'clamp(3rem, 8vh, 6rem)',
        'section-standard-px': 'clamp(1rem, 5vw, 2rem)',
        'section-compact-py': 'clamp(2rem, 5vh, 4rem)',
        'section-compact-px': 'clamp(1rem, 5vw, 2rem)',
      },
      borderRadius: {
        'card': '1.5rem',
      },
      boxShadow: {
        'glow-magenta': '0 0 20px rgba(166, 20, 112, 0.4), 0 0 40px rgba(166, 20, 112, 0.2)',
        'glow-red': '0 0 20px rgba(226, 2, 26, 0.4), 0 0 40px rgba(226, 2, 26, 0.2)',
        'glow-gradient': '0 0 30px rgba(166, 20, 112, 0.3), 0 0 60px rgba(226, 2, 26, 0.2)',
        'card-hover': '0 20px 25px rgba(0, 0, 0, 0.6), 0 0 30px rgba(166, 20, 112, 0.2)',
      },
      backdropBlur: {
        'card': '8px',
        'card-elevated': '12px',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease',
        'slide-in-right': 'slideInRight 0.6s ease',
        'speed-line': 'speedLine 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(166, 20, 112, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(166, 20, 112, 0.6)' },
        },
        speedLine: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(100%)', opacity: '1' },
        },
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}