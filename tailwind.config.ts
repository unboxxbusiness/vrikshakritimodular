import type {Config} from 'tailwindcss';

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
        body: ['Poppins', 'Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
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
        'olive-leaf': {
          DEFAULT: '#606c38',
          '100': '#13160b',
          '200': '#262b16',
          '300': '#394121',
          '400': '#4c562c',
          '500': '#606c38',
          '600': '#88994f',
          '700': '#a9b876',
          '800': '#c5d0a3',
          '900': '#e2e7d1'
        },
        'black-forest': {
          DEFAULT: '#283618',
          '100': '#080b05',
          '200': '#101509',
          '300': '#18200e',
          '400': '#1f2a13',
          '500': '#283618',
          '600': '#547133',
          '700': '#80ac4d',
          '800': '#aac987',
          '900': '#d5e4c3'
        },
        'cornsilk': {
          DEFAULT: '#fefae0',
          '100': '#5d5103',
          '200': '#baa206',
          '300': '#f8dc27',
          '400': '#fbeb84',
          '500': '#fefae0',
          '600': '#fefbe7',
          '700': '#fefced',
          '800': '#fffdf3',
          '900': '#fffef9'
        },
        'sunlit-clay': {
          DEFAULT: '#dda15e',
          '100': '#34210b',
          '200': '#684216',
          '300': '#9d6321',
          '400': '#d1842c',
          '500': '#dda15e',
          '600': '#e4b57f',
          '700': '#ebc79f',
          '800': '#f1dabf',
          '900': '#f8ecdf'
        },
        'copperwood': {
          DEFAULT: '#bc6c25',
          '100': '#251507',
          '200': '#4b2b0f',
          '300': '#704016',
          '400': '#96561e',
          '500': '#bc6c25',
          '600': '#d98840',
          '700': '#e3a570',
          '800': '#ecc3a0',
          '900': '#f6e1cf'
        }
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
