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
        )
          base-logo

      .c-page-header__right
        //- TODO
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
    padding: 30px 0;
    display: flex;
    align-items: center;
  }

  #{$c}__left {
    display: flex;
    flex: 1;
  }

  #{$c}__right {
    padding-left: 20px;
    flex: 0 0 auto;
  }
}
</style>
