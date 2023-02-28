export default defineNuxtConfig({
  css: [
    '@/assets/styles/default.scss'
  ],
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
 
  modules: [
    '@element-plus/nuxt',
    'nuxt-windicss',
  ],
  elementPlus: { /** Options */ }
})