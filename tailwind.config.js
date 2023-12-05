/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
   
     fontSize:{
       12:"0.75rem",
       14:'0.875rem',
       24:'1.5rem'
     },
    extend: {
        colors:{
        myColor : '#1C1C1C',
        white:'#FFFFFF',
        border:'#1C1C1C',
        lightGreen:'#E3F5FF',
        lightBlue:'#E5ECF6',
        lighterBlue:'F7F9FB',
        transparent : 'transparent',
        bgchart:"#F7F9FB",
        lineColor:"#A8C5DA",
        tableColor : "#777"
      },
      opacity:{
        helf:'.05',
       
      },
    },
  },
  plugins: [],
}

