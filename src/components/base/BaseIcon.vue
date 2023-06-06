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
span(
  :class=`[
    "c-base-icon",
    "c-base-icon--" + tint
  ]`
  :style=`{
    height: size,
    width: size
  }`
)
  span.c-base-icon__icon(
    v-if="iconHtml"
    v-html="iconHtml"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconYouTube from "~/assets/images/components/base/BaseIcon/youtube.svg?raw";
import ImageIconDiscord from "~/assets/images/components/base/BaseIcon/discord.svg?raw";

export default {
  name: "BaseIcon",

  props: {
    tint: {
      type: String,
      default: "white",

      validator(x) {
        return ["white", "black", "blue", "red"].includes(x);
      }
    },

    name: {
      type: String,
      required: true,

      validator(x) {
        return ["youtube", "discord"].includes(x);
      }
    },

    size: {
      type: String,
      default: "18px"
    }
  },

  computed: {
    iconHtml() {
      switch (this.name) {
        case "youtube": {
          return ImageIconYouTube;
        }

        case "discord": {
          return ImageIconDiscord;
        }

        default: {
          return null;
        }
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-icon";

.c-base-icon {
  display: block;

  #{$c}__icon {
    &,
    svg {
      width: inherit;
      height: inherit;
      display: block;
    }
  }

  // --> TINTS <--

  &--white {
    fill: $color-base-white-normal;
  }

  &--black {
    fill: $color-base-black-normal;
  }

  &--blue {
    fill: $color-base-blue-normal;
  }

  &--red {
    fill: $color-base-red-normal;
  }
}
</style>
