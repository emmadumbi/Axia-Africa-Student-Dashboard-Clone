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
        levelOne: '13px',
        levelTwo: '15px',
        levelThree: '18px',
        levelFour: '23px',
      }
    },
  },
  plugins: [],
}

