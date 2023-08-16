const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#222222',
        secondary: '#E1A55D',
        tertiary: '#506D93',
      },
      maxWidth: {
        410: '102.5rem',
      },
      screens: {
        max: '1640px',
      },
      fontFamily: {
        josefin: ['var(--font-josefin-sans)', ...fontFamily.sans], // light & normal
        roboto: ['var(--font-roboto)', ...fontFamily.serif], // light & medium
        redhat: ['var(--font-red-hat)', ...fontFamily.sans], // medium
      },
    },
  },
  plugins: [],
};
