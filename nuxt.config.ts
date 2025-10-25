export default defineNuxtConfig({
  compatibilityDate: "latest",
  devtools: { enabled: true },

  modules: [
    "@dxup/nuxt",
    "@nuxt/eslint",
    "@tresjs/nuxt",
    "@nuxtjs/tailwindcss",
  ],

  eslint: { config: { standalone: false } },
})
