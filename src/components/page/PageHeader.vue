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
.c-page-header
  page-wrapper
    .c-page-header__inner
      .c-page-header__left
        nuxt-link(
          to="/"
          class="c-page-header__logo"
        )
          base-logo

      .c-page-header__right
        a(
          :href="$config.platforms.youtube.target"
          target="_blank"
          class="c-page-header__platform"
        )
          base-button(
            button-class="c-page-header__platform-button"
            icon="youtube"
            tint="red"
            borderless
            bolder
            round
          )
            span.c-page-header__platform-handle.c-page-header__platform-handle--large
              | {{ $config.platforms.youtube.handle }}

            span.c-page-header__platform-handle.c-page-header__platform-handle--small
              | YT
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageHeader"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-header";

.c-page-header {
  #{$c}__inner {
    padding: 24px 0 36px;
    display: flex;
    align-items: center;
  }

  #{$c}__logo {
    transition: filter 100ms linear;

    &:hover {
      filter: brightness(1.75);
    }

    &:active {
      filter: brightness(1.25);
    }
  }

  #{$c}__platform {
    #{$c}__platform-handle {
      &--large {
        display: block;
      }

      &--small {
        display: none;
      }
    }
  }

  #{$c}__left {
    display: flex;
    flex: 1;
  }

  #{$c}__right {
    padding-left: 12px;
    flex: 0 0 auto;
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-page-header {
    #{$c}__inner {
      padding: 18px 0 28px;
    }

    #{$c}__platform {
      #{$c}__platform-button {
        padding-left: 20px;
        padding-right: 20px;
      }

      #{$c}__platform-handle {
        &--large {
          display: none;
        }

        &--small {
          display: block;
        }
      }
    }
  }
}
</style>
