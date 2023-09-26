// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      localeKey: 'locale-key'
    }
  },
  srcDir: 'src/',
  imports: {
    dirs:[
      'composables/**.{ts,js}'
    ]
  }
})
