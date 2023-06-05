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
.c-base-video-grid
  slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseVideoGrid"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-video-grid";

.c-base-video-grid {
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 16px;
  display: grid;
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-medium-width-breakpoint) {
  .c-base-video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-base-video-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
