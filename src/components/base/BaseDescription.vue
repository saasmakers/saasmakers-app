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
    "c-base-description",
    "c-base-description--" + align
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDescription",

  props: {
    align: {
      type: String,
      default: "left",

      validator(x) {
        return ["left", "center", "right"].includes(x);
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-description";

.c-base-description {
  color: $color-text-grey;
  font-size: 15px;
  line-height: 22px;

  // --> ALIGNS <--

  &--left {
    text-align: left;
  }

  &--center {
    text-align: center;
  }

  &--right {
    text-align: right;
  }
}
</style>
