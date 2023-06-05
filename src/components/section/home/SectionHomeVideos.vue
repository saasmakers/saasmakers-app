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
.c-section-home-videos
  page-wrapper
    .c-section-home-videos__nest(
      v-for="nest, index in nests"
      :key="'nest_' + index"
    )
      base-video-title(
        :index="index + 1"
        :count="nest.videos.length"
        :icon="nest.icon"
        class="c-section-home-videos__title"
      )
        | {{ nest.title }}

      base-video-grid(
        class="c-section-home-videos__grid"
      )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// PROJECT: CONTENT
import homeVideos from "~/content/home/videos.json";

export default {
  name: "SectionHomeVideos",

  data() {
    return {
      // --> DATA <--

      nests: homeVideos
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-section-home-videos";

.c-section-home-videos {
  #{$c}__nest {
    #{$c}__title {
      margin-bottom: 26px;
    }

    #{$c}__grid {
    }
  }
}
</style>
