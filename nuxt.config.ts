// https://nuxt.com/docs/api/configuration/nuxt-config
import addRouteRules from './scripts/dir'
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      localeKey: 'locale-key'
    }
  },
  srcDir: 'src/',
  hooks: {
    'pages:extend'(pages){
      addRouteRules(pages)
    }
  }
})
