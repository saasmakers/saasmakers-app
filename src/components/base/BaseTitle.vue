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
h1(
  :class=`[
    "c-base-title",
    "c-base-title--" + level,
    "c-base-title--" + tint,
    "c-base-title--" + align,
    "u-title",
    "u-" + weight
  ]`
)
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseTitle",

  props: {
    level: {
      type: String,
      default: "normal",

      validator(x) {
        return ["mini", "small", "normal", "large"].includes(x);
      }
    },

    weight: {
      type: String,
      default: "bold",

      validator(x) {
        return ["light", "regular", "medium", "semibold", "bold"].includes(x);
      }
    },

    tint: {
      type: String,
      default: "dark",

      validator(x) {
        return ["light", "dark"].includes(x);
      }
    },

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
$c: ".c-base-title";

#{$c} {
  // --> LEVELS <--

  &--mini {
    font-size: 26px;
    line-height: 28px;
    letter-spacing: -0.015em;
  }

  &--small {
    font-size: 30px;
    line-height: 35px;
    letter-spacing: -0.03em;
  }

  &--normal {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: -0.03em;
  }

  &--large {
    font-size: 80px;
    line-height: 82px;
    letter-spacing: -0.03em;
  }

  // --> TINTS <--

  &--dark {
    color: $color-black;
  }

  &--light {
    color: $color-white;
  }

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

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  #{$c} {
    &--large {
      font-size: 56px;
      line-height: 56px;
    }

    &--normal {
      font-size: 48px;
      line-height: 48px;
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} {
    &--large {
      font-size: 40px;
      line-height: 40px;
    }

    &--normal {
      font-size: 32px;
      line-height: 32px;
    }
  }
}
</style>
