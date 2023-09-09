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
.c-page-content
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageContent"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-content";

.c-page-content {
  padding-top: 20px;
  padding-bottom: 110px;
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-page-content {
    padding-top: 14px;
    padding-bottom: 80px;
  }
}
</style>
