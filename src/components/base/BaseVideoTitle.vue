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
.c-base-video-title
  h2.c-base-video-title__main
    span.c-base-video-title__main-index.u-medium
      | {{ index }}.

    base-space.c-base-video-title__main-space

    span.c-base-video-title__main-icon
      | {{ icon }}

    base-space.c-base-video-title__main-space

    span.c-base-video-title__main-title.u-bold
      slot

  span.c-base-video-title__badge
    span.c-base-video-title__badge-count.u-medium
      | {{ badgeText }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseVideoTitle",

  props: {
    icon: {
      type: String,
      required: true
    },

    index: {
      type: Number,
      required: true
    },

    count: {
      type: Number,
      required: true
    }
  },

  computed: {
    badgeText() {
      // Empty?
      if (this.count === 0) {
        return "Vide";
      }

      // Singular?
      if (this.count === 1) {
        return "1 sujet";
      }

      // Plural
      return `${this.count} sujets`;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-video-title";

// VARIABLES
$badge-count-line-height: 32px;

.c-base-video-title {
  display: flex;
  align-items: center;

  #{$c}__main {
    flex: 0 0 auto;
    display: flex;
    align-items: center;

    #{$c}__main-space,
    #{$c}__main-index,
    #{$c}__main-icon {
      user-select: none;
    }

    #{$c}__main-index {
      font-size: 20px;
      margin-right: 8px;
    }

    #{$c}__main-icon {
      font-size: 26px;
      margin-right: 7px;
    }

    #{$c}__main-title {
      font-size: 22px;
    }
  }

  #{$c}__badge {
    flex: 1;
    user-select: none;
    display: flex;
    align-items: center;

    &:before {
      content: "";
      background-color: $color-base-blue-ultra-light;
      height: 1.5px;
      margin-left: 22px;
      flex: 1;
    }

    #{$c}__badge-count {
      background-color: $color-base-blue-ultra-light;
      color: rgba($color-text-black, 0.6);
      font-size: 12px;
      line-height: $badge-count-line-height;
      padding: 0 18px;
      flex: 0 0 auto;
      border-radius: $badge-count-line-height;
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-base-video-title {
    #{$c}__badge {
      #{$c}__badge-count {
        display: none;
      }
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-base-video-title {
    text-align: center;
    display: block;

    #{$c}__main {
      margin-left: -2px;
      display: inline-block;
    }

    #{$c}__badge {
      display: none;
    }
  }
}
</style>
