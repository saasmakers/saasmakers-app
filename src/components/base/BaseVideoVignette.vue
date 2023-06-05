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
    "c-base-video-vignette",
    {
      "c-base-video-vignette--available": vignetteImageUrl,
      "c-base-video-vignette--coming-soon": !vignetteImageUrl
    }
  ]`
  :style=`{
    backgroundImage: (vignetteImageUrl ? ("url(" + vignetteImageUrl + ")") : null)
  }`
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseVideoVignette",

  props: {
    title: {
      type: String,
      required: true
    },

    speakers: {
      type: Array,
      default: null
    },

    id: {
      type: String,
      default: null
    }
  },

  computed: {
    vignetteImageUrl() {
      if (this.id !== null) {
        return `https://img.youtube.com/vi/${this.id}/mqdefault.jpg`;
      }

      return null;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-video-vignette";

.c-base-video-vignette {
  background-color: $color-base-black-light;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  aspect-ratio: 394 / 220;
  border-radius: 16px;
  box-shadow: 0 12px 38px 0 rgba($color-base-black-light, 0.2);
}
</style>
