/**************************************************************************
 * NUXT CONFIGURATION
 * https://nuxt.com/docs/api/configuration/nuxt-config
 **************************************************************************/

export default defineNuxtConfig({
  // --> BUILD CONFIGURATION <--

  components: ["~/components/bases", "~/components/layouts", "~/components/sections"],

  devServer: {
    port: 2023,
  },

  // --> MODULES, PLUGINS AND STYLESHEETS <--

  modules: ["@nuxtjs/i18n", "@nuxtjs/tailwindcss"],

  // --> MODULES CONFIGURATION <--

  i18n: {
    defaultLocale: "en",
    langDir: "./locales/",
    lazy: true,
    strategy: "prefix_except_default",

    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: "en",
    },

    locales: [
      {
        code: "en",
        iso: "en",
        file: "en.js",
      },
      {
        code: "fr",
        iso: "fr",
        file: "fr.js",
      },
    ],

    vueI18n: {
      fallbackLocale: "en",
      silentTranslationWarn: true,
    },
  },
});
