// Nuxt 2 configuration for EventFlow application

export default {
  // Metadata
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
  },
  
  // CSS configuration
  css: ['~/assets/css/global.css'],
  
  // Build configuration
  build: {
    transpile: []
  },
  
  // Server configuration
  server: {
    port: 3000
  }
}
