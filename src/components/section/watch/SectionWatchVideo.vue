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
.c-section-watch-video
  iframe(
    :src="embedFrameUrl"
    type="text/html"
    frameborder="0"
    class="c-section-watch-video__frame"
  )

  .c-section-watch-video__controls
    .c-section-watch-video__left
      a.c-section-watch-video__control.u-medium(
        :href="controlOpenUrl"
        target="_blank"
      )
        | Open in YouTube

        base-icon(
          name="open-external"
          size="14px"
          class="c-section-watch-video__control-icon"
        )

    .c-section-watch-video__right
      a.c-section-watch-video__control.u-medium(
        :href="controlChannelUrl"
        target="_blank"
      )
        base-icon(
          name="youtube"
          class="c-section-watch-video__control-icon"
        )

        | Subscribe to channel
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "SectionWatchVideo",

  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    embedFrameUrl() {
      return `https://www.youtube.com/embed/${this.id}?autoplay=1&rel=0`;
    },

    controlOpenUrl() {
      return `https://www.youtube.com/watch?v=${this.id}`;
    },

    controlChannelUrl() {
      return this.$config.platforms.youtube.target;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-watch-video";

.c-section-watch-video {
  display: flex;
  flex-direction: column;

  #{$c}__left,
  #{$c}__right {
    display: flex;
    align-items: center;
  }

  #{$c}__left {
    flex: 1;
  }

  #{$c}__right {
    margin-left: 12px;
    flex: 0 0 auto;
  }

  #{$c}__frame {
    background-color: $color-black;
    width: 100%;
    overflow: hidden;
    flex: 1;
    border-radius: 6px;
    box-shadow: 0 14px 34px 0 rgba($color-black, 0.08);
  }

  #{$c}__controls {
    margin-top: 20px;
    padding: 0 4px;
    display: flex;
    flex: 0 0 auto;

    #{$c}__control {
      color: $color-text-white;
      font-size: 12.5px;
      opacity: 0.6;
      display: flex;
      align-items: center;

      &:hover {
        opacity: 0.9;
      }

      &:active {
        opacity: 0.8;
      }

      #{$c}__control-icon {
        margin: 0 5px;
        flex: 0 0 auto;
      }
    }
  }
}
</style>
