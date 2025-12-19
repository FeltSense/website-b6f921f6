import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        secondary: {
          50: '#fefefe',
          100: '#fdfdfd',
          200: '#fafafa',
          300: '#f7f7f7',
          400: '#f1f1f1',
          500: '#e5e5e5',
          600: '#d4d4d4',
          700: '#b3b3b3',
          800: '#8a8a8a',
          900: '#525252',
        },
        accent: {
          50: '#fef7f0',
          100: '#fdeee1',
          200: '#fadac2',
          300: '#f6c199',
          400: '#f19e6e',
          500: '#ec7c44',
          600: '#d8612a',
          700: '#b44a1f',
          800: '#8f3b1e',
          900: '#74321c',
        },
      },
    },
  },
  plugins: [],
};

export default config;
