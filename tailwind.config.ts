import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary))',
        secondary: 'rgba(var(--secondary))',
        neutral1: 'rgba(var(--neutral-1))',
        neutral2: 'rgba(var(--neutral-2))',
        neutral3: 'rgba(var(--neutral-3))',
        neutral4: 'rgba(var(--neutral-4))',
        black: 'rgba(var(--black))',
      },
      fontFamily: {
        gilda: 'var(--font-gilda)',
        jost: 'var(--font-jost)',
      },
    },
  },
  plugins: [],
};
export default config;
