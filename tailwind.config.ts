import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: '#8B1A2B',
        'maroon-dark': '#5C0A15',
        'maroon-light': '#C81C1C',
        gold: '#D4AF37',
        'gold-light': '#F5D76E',
        'gold-dark': '#A0850C',
        sandal: '#F5DEB3',
        cream: '#FFF8F0',
        'deep-brown': '#3D1A0A',
        saffron: '#FF6B2B',
        'temple-orange': '#E8590C',
      },
      fontFamily: {
        tamil: ['var(--font-tamil)', 'serif'],
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'petal-fall': 'petalFall 8s ease-in infinite',
        'bounce-gentle': 'bounceGentle 2.5s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
        'scale-in': 'scaleIn 0.6s ease forwards',
        'draw-line': 'drawLine 2s ease forwards',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'kolam-draw': 'kolamDraw 4s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%': { textShadow: '0 0 8px rgba(212,175,55,0.4), 0 0 15px rgba(212,175,55,0.2)' },
          '100%': { textShadow: '0 0 20px rgba(212,175,55,1), 0 0 40px rgba(212,175,55,0.6), 0 0 80px rgba(212,175,55,0.3)' },
        },
        petalFall: {
          '0%': { transform: 'translateY(-5vh) translateX(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(105vh) translateX(100px) rotate(720deg)', opacity: '0' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(212,175,55,0.3), 0 0 30px rgba(212,175,55,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(212,175,55,0.7), 0 0 60px rgba(212,175,55,0.4)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.7)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '1' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.2)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.15)' },
          '70%': { transform: 'scale(1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
          '50%': { opacity: '0.6', transform: 'scale(1.3) rotate(180deg)' },
        },
        kolamDraw: {
          '0%': { strokeDashoffset: '2000', opacity: '0' },
          '5%': { opacity: '1' },
          '100%': { strokeDashoffset: '0', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #D4AF37 0%, #F5D76E 50%, #D4AF37 100%)',
        'gradient-maroon': 'linear-gradient(135deg, #5C0A15 0%, #8B1A2B 50%, #5C0A15 100%)',
        'gradient-temple': 'linear-gradient(180deg, #FFD9A0 0%, #FFBB66 50%, #FF8C22 100%)',
        'gradient-radial-gold': 'radial-gradient(circle at center, #F5D76E 0%, #D4AF37 50%, #A0850C 100%)',
      },
    },
  },
  plugins: [],
}

export default config
