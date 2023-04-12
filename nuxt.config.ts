/**************************************************************************
 * NUXT CONFIGURATION
 * https://nuxt.com/docs/api/configuration/nuxt-config
 **************************************************************************/

export default defineNuxtConfig({
  // --> BUILD CONFIGURATION <--

  components: ["~/components/bases"],

  // --> MODULES, PLUGINS AND STYLESHEETS <--

  modules: ["@nuxtjs/tailwindcss"],
});
