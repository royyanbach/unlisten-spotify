/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#84cc16',
          // secondary: '#d6d3d1',
          // accent: '#22d3ee',
          // neutral: '#3D4451',
          // 'base-100': '#FFFFFF',
          // info: '#3ABFF8',
          // success: '#36D399',
          // warning: '#FBBD23',
          // error: '#F87272',
        },
      },
    ],
  },
};
