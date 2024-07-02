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
import VueObserveVisibility from "vue3-observe-visibility";
import { defineNuxtPlugin } from "#app";

/**************************************************************************
 * EXPORTS
 * ************************************************************************* */

export default defineNuxtPlugin(nuxtApp => {
  const _app = nuxtApp.vueApp;

  _app.use(VueObserveVisibility);
});
