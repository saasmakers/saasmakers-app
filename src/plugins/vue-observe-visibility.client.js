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
import { defineNuxtPlugin } from '#app'


/**************************************************************************
 * VUE OBSERVE VISIBILITY
 * ************************************************************************* */
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueObserveVisibility)
  })