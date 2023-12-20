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
    "c-page-header",
    {
      "c-page-header--floating": isFloating
    }
  ]`
)
  .c-page-header__sticky
    .c-page-header__bar
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

  .c-page-header__ghost
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const SCROLLED_THRESHOLD_VERTICAL = 30;

export default {
  name: "PageHeader",

  data() {
    return {
      // --> STATE <--

      isFloating: false
    };
  },

  beforeMount() {
    // Bind scroll listener
    window.addEventListener("scroll", this.onWindowScroll);
  },

  mounted() {
    // Process first scroll event (eg. the page is reloaded on a scrolled \
    //   page, therefore we need to emulate a scroll event to compute first \
    //   state)
    this.onWindowScroll();
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onWindowScroll);
  },

  methods: {
    // --> EVENT LISTENERS <--

    /**
     * Triggers when window scrolls
     * @public
     * @return {undefined}
     */
    onWindowScroll() {
      const _isFloating = window.scrollY >= SCROLLED_THRESHOLD_VERTICAL;

      // Update reactive marker? (only if changed)
      if (_isFloating !== this.isFloating) {
        this.isFloating = _isFloating;
      }
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-header";

.c-page-header {
  padding-bottom: 12px;

  #{$c}__sticky,
  #{$c}__ghost,
  #{$c}__bar {
    height: $page-header-height-normal;
  }

  #{$c}__sticky,
  #{$c}__ghost {
    border-bottom: 1px solid transparent;
  }

  #{$c}__sticky,
  #{$c}__bar {
    transition: all 250ms linear;
    transition-property: background-color, border-color;
  }

  #{$c}__sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
  }

  #{$c}__bar {
    display: flex;
    align-items: center;
  }

  #{$c}__inner {
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

  // --> BOOLEANS <--

  &--floating {
    #{$c}__sticky {
      border-bottom-color: rgba($color-base-black-light, 0.1);
    }

    #{$c}__bar {
      background-color: rgba($color-background-white, 0.75);
      backdrop-filter: blur(6px) saturate(160%) contrast(45%) brightness(140%);
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-page-header {
    #{$c}__sticky,
    #{$c}__ghost,
    #{$c}__bar {
      height: $page-header-height-small;
    }

    #{$c}__left {
      #{$c}__logo {
        margin: 0 auto;
      }
    }

    #{$c}__right {
      display: none;
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
