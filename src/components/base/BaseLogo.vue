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
span.c-base-logo
  span.c-base-logo__icon

  image-brand.c-base-logo__brand
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageBrand from "~/assets/images/components/base/BaseLogo/brand.svg?inline";

export default {
  name: "BaseLogo",

  components: { ImageBrand }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-logo";

// VARIABLES
$icon-size: 30px;

.c-base-logo {
  display: flex;
  align-items: center;

  #{$c}__icon,
  #{$c}__brand {
    flex: 0 0 auto;
  }

  #{$c}__icon {
    background-image: url("~/assets/images/components/base/BaseLogo/icon.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    width: $icon-size;
    height: $icon-size;
    margin-right: 11px;
    display: inline-block;
  }

  #{$c}__brand {
    width: auto;
    height: 18px;
  }
}
</style>
