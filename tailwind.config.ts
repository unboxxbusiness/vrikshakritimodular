import type {Config} from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      fontSize: {
        'xs': 'clamp(0.75rem, 0.17vw + 0.71rem, 0.84rem)',
        'sm': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
        'base': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
        'lg': 'clamp(1.13rem, 0.52vw + 1rem, 1.42rem)',
        'xl': 'clamp(1.27rem, 0.71vw + 1.09rem, 1.69rem)',
        '2xl': 'clamp(1.42rem, 0.94vw + 1.18rem, 2rem)',
        '3xl': 'clamp(1.6rem, 1.22vw + 1.29rem, 2.38rem)',
        '4xl': 'clamp(1.8rem, 1.55vw + 1.41rem, 2.83rem)',
        '5xl': 'clamp(2.03rem, 1.95vw + 1.55rem, 3.38rem)',
        '6xl': 'clamp(2.28rem, 2.42vw + 1.7rem, 4.02rem)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        'molten-lava': { DEFAULT: '#780000', 100: '#180000', 200: '#310000', 300: '#490000', 400: '#620000', 500: '#780000', 600: '#c80000', 700: '#ff1616', 800: '#ff6464', 900: '#ffb1b1' },
        'brick-red': { DEFAULT: '#c1121f', 100: '#260406', 200: '#4d070c', 300: '#730b12', 400: '#990e17', 500: '#c1121f', 600: '#eb2330', 700: '#f05a64', 800: '#f59198', 900: '#fac8cb' },
        'papaya-whip': { DEFAULT: '#fdf0d5', 100: '#593c04', 200: '#b17908', 300: '#f5ae22', 400: '#f9cf7b', 500: '#fdf0d5', 600: '#fdf2dc', 700: '#fef5e5', 800: '#fef9ed', 900: '#fffcf6' },
        'deep-space-blue': { DEFAULT: '#003049', 100: '#00090e', 200: '#00131d', 300: '#001c2b', 400: '#002539', 500: '#003049', 600: '#00679f', 700: '#00a0f7', 800: '#50c2ff', 900: '#a7e0ff' },
        'steel-blue': { DEFAULT: '#669bbc', 100: '#122028', 200: '#233f51', 300: '#355f79', 400: '#477fa2', 500: '#669bbc', 600: '#85afc9', 700: '#a4c3d7', 800: '#c2d7e4', 900: '#e1ebf2' }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
