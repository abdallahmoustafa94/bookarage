module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryRedColor: {
          hover: '#f35532',
          default: '#f2421b',
        },
        mainBgColor: {
          hover: '#325a8f',
          default: '#244066',
        },
        secondary: {
          hover: '#ACB274',
          DEFAULT: '#958a5f',
        },
        labelColor: '#5b626b',
      },
    },
    screens: {
      xs: {min: '0', max: '639px'},
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
    margin: ['responsive', 'direction'],
    padding: ['responsive', 'direction'],
    inset: ['responsive', 'direction'],
    translate: ['responsive', 'direction'],
    display: ['responsive', 'direction'],
    textAlign: ['responsive', 'direction'],
    flexDirection: ['responsive', 'direction'],
  },
  plugins: [require('tailwindcss-dir')()],
}
