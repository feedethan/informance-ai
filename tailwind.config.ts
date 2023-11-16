module.exports = {
  mode: 'jit',

  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      black: '#17181E',
      'gray-dark': '#1F2129',
      white: '#ffffff',
      green: '#D7FF1F',
      'gray-light': 'rgba(255, 255, 255, 0.50)',
      'gray-switch': '#45464B',
      'black-300': '#9B9C9E',
      'black-400': '#686B6E',
      'black-700': '#131619',
      gray: '#1F2129',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
