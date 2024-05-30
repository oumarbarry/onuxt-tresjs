export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@tresjs/nuxt",
  ],

  eslint: { config: { standalone: false } },

  tres: { devtools: true },
})
