// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // CSS configuration
  css: ['~/assets/css/global.css'],
  
  // Build configuration
  build: {
    transpile: []
  },
  
  // App configuration
  app: {
    head: {
      title: 'EventFlow - Your Event Discovery Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Discover and explore amazing events happening near you' 
        }
      ]
    }
  },
  
  // Rendering configuration for better SEO
  ssr: true,
  
  // Route rules for optimization
  routeRules: {
    '/': { cache: { maxAge: 60 * 10 } },
    '/events/**': { cache: { maxAge: 60 * 5 } }
  }
})
