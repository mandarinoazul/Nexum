/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)', /* deep-forest-green */
        input: 'var(--color-input)', /* elevated-surface */
        ring: 'var(--color-ring)', /* mandarino-orange */
        background: 'var(--color-background)', /* midnight-green */
        foreground: 'var(--color-foreground)', /* off-white */
        primary: {
          DEFAULT: 'var(--color-primary)', /* mandarino-orange */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* deep-forest-green */
          foreground: 'var(--color-secondary-foreground)', /* off-white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* coral-red */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* deep-forest-green */
          foreground: 'var(--color-muted-foreground)', /* sand-beige */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* emerald-neon */
          foreground: 'var(--color-accent-foreground)', /* midnight-green */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* elevated-surface */
          foreground: 'var(--color-popover-foreground)', /* off-white */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* elevated-surface */
          foreground: 'var(--color-card-foreground)', /* off-white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* emerald-neon */
          foreground: 'var(--color-success-foreground)', /* midnight-green */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* warm-amber */
          foreground: 'var(--color-warning-foreground)', /* midnight-green */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* coral-red */
          foreground: 'var(--color-error-foreground)', /* white */
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'slide-in-left': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}