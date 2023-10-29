// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app: {
    head: {
      link: [
        {rel:"preconnect" ,href:"https://fonts.googleapis.com" },
        {rel:"preconnect" ,href:"https://fonts.gstatic.com" },
        {href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap", rel:"stylesheet" },
    
    ],
    }
},
    modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-icon',
      '@nuxtjs/i18n',
      
  ],
   colorMode: {
    classSuffix: ''
  },
   i18n: {
    /* module options */
     vueI18n: './i18n.config.ts' 
  },
  devtools: { enabled: false },
    tailwindcss: {
    // Options
  }
})
