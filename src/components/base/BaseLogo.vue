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
  span.c-base-logo__brand
</template>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-logo";

// VARIABLES
$icon-size: 34px;

$brand-width: 248px;
$brand-height: 40px;

#{$c} {
  display: flex;
  align-items: center;

  #{$c}__icon,
  #{$c}__brand {
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    flex: 0 0 auto;
    display: inline-block;
  }

  #{$c}__icon {
    background-image: url("@/assets/images/components/base/BaseLogo/icon.png");
    width: $icon-size;
    height: $icon-size;
    margin-right: 10px;
  }

  #{$c}__brand {
    background-image: url("@/assets/images/components/base/BaseLogo/brand.png");
    width: auto;
    width: $brand-width;
    height: $brand-height;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} {
    #{$c}__icon {
      display: none;
    }
  }
}
</style>
