module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      sm: '375px',
      // => small mobile phones view

      md: '768px',
      // => bigger mobile phones view

      lg: '1024px',
      // => tablet view

      xl: '1280px',
      // => laptop view

      xxl: '1536px',
      // => desktop view
    },
  },
  plugins: [require('daisyui')],
  daisyui: {},
}
