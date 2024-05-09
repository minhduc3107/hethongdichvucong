/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      padding: {
        '1030px': '1030px',
        '580px': '580px',
        '530px': '530px',
        '480px': '480px',
        '430px': '430px',
        '380px': '380px',
        '180px': '180px',
        '130px': '130px',
        '115px': '115px',
      },
      margin: {
        '1030px': '1030px',
        '430px': '430px',
        '380px': '380px',
        '180px': '180px',
        '170px': '170px',
        '165px': '165px',
        '130px': '130px',
        '115px': '115px',
      },
      fontFamily: {
       
        'display': ['Times New Roman', 'Times', 'serif'],
        'display1': ['Arial','Helvetica','sans-serif'],
       },
      colors: {
        '#c54250': '#c54250',
        '#f7f8fc': '#f7f8fc',
        '#273b6e': '#273b6e',
        '#fafafa': '#fafafa',
        '#eef0f2': '#eef0f2',
        '#1d3463': '#1d3463',
        '#dc3440': '#dc3440',
        '#0b9c33': '#0b9c33',
      },
      spacing: {
        '1px': '1px',
      },
      backgroundImage: {
        'bokehoachvadautu': "url('https://dichvucong.mpi.gov.vn/assets/bg-header.d78c000b.jpg')",
       }
    },
  },
  plugins: [],
}

