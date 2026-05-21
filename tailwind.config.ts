import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
        body: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        blue: {
          DEFAULT: '#213D79',
          dark: '#162952',
          light: '#2E56A8',
          bg: '#EEF2F9',
        },
        green: {
          DEFAULT: '#25B472',
          dark: '#1C8F5A',
          light: '#34D48A',
          bg: '#EDFBF3',
        },
        dark: {
          DEFAULT: '#080E1C',
          2: '#0F1729',
          3: '#1A2540',
        },
        gray: {
          900: '#1C2A42',
          700: '#3E5068',
          500: '#6E8098',
          300: '#A4B3C4',
          100: '#DFE5ED',
          50: '#F2F5F8',
        },
        red: {
          DEFAULT: '#F04438',
          bg: '#FEF3F2',
        },
        amber: {
          DEFAULT: '#F79009',
          bg: '#FFFAEB',
        },
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '24px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(8,14,28,.06)',
        md: '0 4px 16px rgba(8,14,28,.08)',
        lg: '0 12px 40px rgba(8,14,28,.12)',
        xl: '0 20px 50px rgba(8,14,28,.15)',
      },
    },
  },
  plugins: [],
}
export default config
