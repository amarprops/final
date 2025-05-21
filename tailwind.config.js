module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        earth: '#A0844F',
        gold: '#D4AF37',
        black: '#0D0D0D',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Open Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}