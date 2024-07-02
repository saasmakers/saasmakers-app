<!--
 * SaaS Makers - Web
 *
 * Copyright 2023, SaaS Makers
 * Author: Valerian Saliou https://valeriansaliou.name/
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
div(
  :class=`[
    "c-page-container",
    {
      "c-page-container--fullscreen": fullscreen
    }
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageContainer",

  props: {
    fullscreen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-container";

#{$c} {
  position: relative;

  // --> BOOLEANS <--

  &--fullscreen {
    position: absolute;
    inset: 0;
  }
}
</style>
