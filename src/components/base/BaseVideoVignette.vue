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
      "c-base-video-vignette--available": isPlayable,
      "c-base-video-vignette--coming-soon": !isPlayable
    }
  ]`
  :style=`{
    backgroundImage: (vignetteImageUrl ? ("url(" + vignetteImageUrl + ")") : null)
  }`
)
  .c-base-video-vignette__details
    .c-base-video-vignette__details-aside
      image-icon-play(
        v-if="isPlayable"
        class="c-base-video-vignette__details-play"
      )

    .c-base-video-vignette__details-text
      h6.c-base-video-vignette__details-title.u-bold
        | {{ title }}

      p.c-base-video-vignette__details-speakers.u-medium(
        v-if="speakersText"
      )
        | {{ speakersText }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconPlay from "~/assets/images/components/base/BaseVideoVignette/icon-play.svg?inline";

export default {
  name: "BaseVideoVignette",

  components: { ImageIconPlay },

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
    },

    isPlayable() {
      return this.vignetteImageUrl !== null;
    },

    speakersText() {
      if (this.speakers !== null && this.speakers.length > 0) {
        return this.speakers.join(", ");
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
  overflow: hidden;
  position: relative;

  #{$c}__details {
    padding: 18px 18px;
    display: flex;
    flex-direction: column;
    position: absolute;
    inset: 0;

    #{$c}__details-aside {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      #{$c}__details-play {
        height: 30px;
        width: auto;
        margin-top: -4px;
      }
    }

    #{$c}__details-text {
      flex: 0 0 auto;

      #{$c}__details-title {
        color: $color-text-white;
        font-size: 14.5px;
        line-height: 18px;
      }

      #{$c}__details-speakers {
        color: rgba($color-text-white, 0.6);
        font-size: 12px;
        line-height: 15px;
        margin-top: 5px;
      }
    }
  }

  // --> BOOLEANS <--

  &--available {
    &:hover {
      #{$c}__details {
        opacity: 1;
        visibility: visible;

        #{$c}__details-aside {
          #{$c}__details-play {
            transform: scale(1.3);
            transition: transform 150ms linear 50ms;
          }
        }
      }
    }

    #{$c}__details {
      background-color: rgba($color-base-black-light, 0.6);
      opacity: 0;
      visibility: hidden;
      backdrop-filter: blur(6px);
      transition: opacity 100ms linear;
    }
  }
}
</style>
