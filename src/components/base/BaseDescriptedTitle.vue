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
    "c-base-descripted-title",
    "c-base-descripted-title--" + align
  ]`
)
  base-title(
    :align="align"
    level="small"
    class="c-base-descripted-title__title"
  )
    slot(
      name="title"
    )

  base-description(
    :align="align"
    class="c-base-descripted-title__description"
  )
    slot(
      name="description"
    )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseDescriptedTitle",

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
$c: ".c-base-descripted-title";

.c-base-descripted-title {
  #{$c}__description {
    margin-top: 15px;
  }

  // ALIGNS

  &--center {
    #{$c}__title {
      max-width: 700px;
      margin: 0 auto;
    }
  }
}
</style>
