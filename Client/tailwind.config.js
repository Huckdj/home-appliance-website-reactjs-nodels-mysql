/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'roboto':['Roboto,sans-serif'],
      'sans': ['Arial', 'Helvetica', 'sans-serif'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    boxShadow: {
      '3xl': '0px 4px 8px rgba(0, 0, 0, 0.2);',
      'basicshadow':'0 1px 2px 0 rgb(0 0 0 / 0.05)'
    },
    maxWidth: {
      '50per': '50%',
      '600px': '600px'
      
    }
  },
  plugins: [],
}

