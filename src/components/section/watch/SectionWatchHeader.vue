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
.c-section-watch-header
  .c-section-watch-header__text
    h1.c-section-watch-header__title.u-bold
      | {{ title }}

    p.c-section-watch-header__speakers.u-medium(
      v-if="speakersText"
    )
      | {{ speakersText }}

  .c-section-watch-header__actions
    nuxt-link(
      to="/"
      class="c-section-watch-header__action"
    )
      image-icon-close
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: IMAGES
import ImageIconClose from "~/assets/images/components/section/watch/SectionWatchHeader/icon-close.svg?inline";

export default {
  name: "SectionWatchHeader",

  components: { ImageIconClose },

  props: {
    title: {
      type: String,
      required: true
    },

    speakers: {
      type: Array,
      default: null
    }
  },

  computed: {
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
$c: ".c-section-watch-header";

.c-section-watch-header {
  padding: 0 2px;
  display: flex;
  align-items: center;

  #{$c}__text {
    flex: 1;

    #{$c}__title {
      color: $color-text-white;
      font-size: 19px;
    }

    #{$c}__speakers {
      color: rgba($color-text-white, 0.6);
      font-size: 15px;
      margin-top: 13px;
    }
  }

  #{$c}__actions {
    flex: 0 0 auto;

    #{$c}__action {
      opacity: 0.6;

      &:hover {
        opacity: 1;
      }

      &:active {
        opacity: 0.85;
      }

      svg {
        width: auto;
        height: 24px;
      }
    }
  }
}
</style>
