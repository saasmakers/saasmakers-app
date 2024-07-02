/*
 * SaaS Makers - Web
 *
 * Copyright 2023, SaaS Makers
 * Author: Valerian Saliou https://valeriansaliou.name/
 */

/**************************************************************************
 * IMPORTS
 * ************************************************************************* */

// NPM
import { defineNuxtPlugin } from "#app";

/**************************************************************************
 * EXPORTS
 * ************************************************************************* */

export default defineNuxtPlugin(nuxtApp => {
  const _app = nuxtApp.vueApp;

  // Register all dummy Vue directives (equivalent of those defined in the \
  //   client version)
  // Notice: this is done as the server-side part of Nuxt would fail during \
  //   build since Vue directives are not compatible w/ SSR. Registering dummy \
  //   directives addresses the problem. Those overrides need to be kept in \
  //   sync. with the (real) client directives though, so beware if you add \
  //   one, please also add its dummy variant here.
  // Source: https://github.com/nuxt/nuxt/issues/13382#issuecomment-1541610910
  _app.directive("observe-visibility", {});
});
