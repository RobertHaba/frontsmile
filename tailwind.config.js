module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        'sans':'Nunito'
      }
    },
    colors: {
      dark: '#161D2F',
      'dark-light': '#222538',
      white: '#F5F5F5',
      'white-second': '#FFF',
      'transparent':'rgba(126, 126, 126, 0.5);',
      'transparent-light':'rgba(255, 255, 255, 0.5);',
      main: '#FEC260',
      second: '#A12568',
      'slate-500': 'rgb(100 116 139)',
    },
  },
  plugins: [],
  darkMode: 'class',
};
