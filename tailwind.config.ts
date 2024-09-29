/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss'

import type { PluginAPI } from 'tailwindcss/types/config'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // typography: (theme: PluginAPI['theme']) => ({
      //   DEFAULT: {
      //     css: {
      //       h1: {
      //         fontSize: theme('fontSize.4xl'), // Customize the font size
      //         fontWeight: theme('fontWeight.bold'), // Set bold
      //         color: theme('colors.gray.900'), // Text color
      //         marginBottom: theme('spacing.6'), // Adjust margin for spacing
      //         '@screen md': {
      //           fontSize: theme('fontSize.5xl'), // Responsive at md breakpoint
      //         },
      //         '@screen lg': {
      //           fontSize: theme('fontSize.6xl'), // Larger at lg breakpoint
      //         },
      //       },
      //       p: {
      //         fontSize: theme('fontSize.lg'), // Set paragraph font size
      //         color: theme('colors.gray.600'), // Set text color
      //         marginBottom: theme('spacing.8'), // Add margin below paragraph
      //       },
      //     },
      //   },
      // }),
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}

export default config
