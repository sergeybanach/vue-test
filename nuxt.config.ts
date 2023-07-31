// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "My title",
    },
    
  },
  
  runtimeConfig: {
    apiSecret: '123',
    public: {
      apiBase: process.env.apiBase || "apiBase"
    }
  }
});
