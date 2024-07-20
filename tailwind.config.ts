import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        2: 'repeat(2, minmax(80px, 1fr))',
        4: 'repeat(4, minmax(128px, 1fr))',
       },
      colors: {
        primary: {
          50: '#edc4cc',
          100: '#e8b0bb',
          200: '#e29da9',
          300: '#dc8998',
          400: '#d67687',
          500: '#d06276',
          600: '#c03951',
          700: '#b1354c',
          800: '#9d2f43',
          900: '#89293b',
          950: '#762332',
        },
        secondary: {
          50: '#b3c4e5',
          100: '#8da6d8',
          200: '#7a97d1',
          300: '#6788cb',
          400: '#547ac4',
          500: '#416bbe',
          600: '#3b60ab',
          700: '#21355f',
          800: '#1A2B4C',
          900: '#142039',
          950: '#0d1526',
        }
      },
    },
  },
  plugins: [],
};
export default config;
