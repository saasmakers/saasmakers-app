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
        )
          base-button(
            icon="youtube"
            tint="red"
            borderless
            bolder
            round
          )
            | {{ $config.platforms.youtube.handle }}
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

  #{$c}__left {
    display: flex;
    flex: 1;
  }

  #{$c}__right {
    padding-left: 12px;
    flex: 0 0 auto;
  }
}
</style>
