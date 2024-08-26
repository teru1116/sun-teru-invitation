/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    // 配色パターン https://colorhunt.co/palette/579bb1e1d7c6ece8ddf8f4ea
    colors: {
      textBlack: '#222222',
      textGray: '#081018b2',
      borderGray: '#DDDDDD',
      primary: '#579BB1',
      secondary: '#E1D7C6',
      light: '#ECE8DD',
      bgGray: '#F8F4EA',
      white: '#FFFFFF',
      errorRed: '#d64000',
    },
    extend: {},
  },
  plugins: [],
}