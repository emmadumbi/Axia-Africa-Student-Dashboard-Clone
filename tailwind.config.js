/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      backgroundColor: {
        Gray: 'rgb(242, 244, 247)',
        biroBlue: 'rgb(65, 65, 163)',
        blackishBlue: 'rgb(29, 41, 57)',
        profileBg: '#e46f1c',
      },
      colors: {
        borderColor: 'rgb(222, 222, 247)',
        Gray: 'rgb(242, 244, 247)',
        blackishBlue: 'rgb(29, 41, 57)',
        biroBlue: 'rgb(65, 65, 163)',
      },
      fontSize: {
        levelOne: 'clamp(0.813rem, 0.759rem + 0.268vw, 1rem)',
        levelTwo: 'clamp(0.938rem, 0.884rem + 0.268vw, 1.125rem)',
        levelThree: 'clamp(1.125rem, 1.089rem + 0.179vw, 1.25rem)',
        levelFour: 'clamp(1.438rem, 1.402rem + 0.179vw, 1.563rem)',
      },
      screens: {
        sm: '31.25em',
        md: '42.5em',
        lg: '56.25em',
        xl: '75em',
      }
    },
  },
  plugins: [],
}

