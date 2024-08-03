/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
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
        background: 'var(--nds-background)',
        foreground: 'var(--nds-foreground)',

        primary: {
          DEFAULT: 'var(--nds-primary-color)',
          light: 'var(--nds-primary-light)',
          dark: 'var(--nds-primary-dark)',
          foreground: 'var(--nds-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--nds-secondary-color)',
          light: 'var(--nds-secondary-light)',
          dark: 'var(--nds-secondary-dark)',
          foreground: 'var(--nds-secondary-foreground)',
        },
        alternative: {
          DEFAULT: 'var(--nds-alternative-color)',
          light: 'var(--nds-alternative-light)',
          dark: 'var(--nds-alternative-dark)',
          foreground: 'var(--nds-alternative-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--nds-destructive-color)',
          light: 'var(--nds-destructive-light)',
          dark: 'var(--nds-destructive-dark)',
          foreground: 'var(--nds-destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--nds-muted)',
          foreground: 'var(--nds-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--nds-accent)',
          foreground: 'var(--nds-accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--nds-popover)',
          foreground: 'var(--nds-popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--nds-card)',
          dark: 'var(--nds-card-dark)',
          foreground: 'var(--nds-card-foreground)',
        },
        border: 'var(--nds-border)',
        input: 'var(--nds-input)',
        ring: 'var(--nds-ring)',
      },
      borderRadius: {
        lg: 'var(--nds-radius)',
        md: 'calc(var(--nds-radius) - 2px)',
        sm: 'calc(var(--nds-radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        progressbar: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        progressbar: 'progressbar 3s',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
