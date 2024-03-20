/*
 * SaaS Makers - Web
 *
 * Copyright 2023, SaaS Makers
 * Author: Valerian Saliou https://valeriansaliou.name/
 */

/**************************************************************************
 * IMPORTS
 * ************************************************************************* */
import { defineNuxtPlugin } from '#app'

// NPM

/**************************************************************************
 * VUE OBSERVE VISIBILITY
 * ************************************************************************* */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive("observe-visibility", {});
  })