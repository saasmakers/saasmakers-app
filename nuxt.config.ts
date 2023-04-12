/**************************************************************************
 * NUXT CONFIGURATION
 * https://nuxt.com/docs/api/configuration/nuxt-config
 **************************************************************************/

export default defineNuxtConfig({
  // --> BUILD CONFIGURATION <--

  components: ["~/components/bases"],

  devServer: {
    port: 2023,
  },

  // --> MODULES, PLUGINS AND STYLESHEETS <--

  modules: ["@nuxtjs/tailwindcss"],
});
