<!--
 * SaaS Makers - Web
 *
 * Copyright 2023, SaaS Makers
 * Author: Valerian Saliou https://valeriansaliou.name/
 -->

<!--OK OK OK-->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
.c-section-home-videos
  page-wrapper
    .c-section-home-videos__nest(
      v-for="nest, nestIndex in nests"
      :key="'nest_' + nestIndex"
    )
      base-video-title(
        :index="nestIndex + 1"
        :count="nest.videos.length"
        :icon="nest.icon"
        class="c-section-home-videos__title"
      )
        | {{ nest.title }}

      base-video-grid(
        class="c-section-home-videos__grid"
      )
        template(
          v-for="video, videoIndex in nest.videos"
        )
          a(
            v-if="video.id"
            :href="'https://www.youtube.com/watch?v=' + video.id"
            target="_blank"
            class="c-section-home-videos__link"
          )
            base-video-vignette(
              :key="'nest_' + nestIndex + '_video_' + videoIndex"
              :title="video.title"
              :speakers="video.speakers"
              :id="video.id"
              class="c-section-home-videos__vignette"
            )

          base-video-vignette(
            v-else
            :key="'nest_' + nestIndex + '_video_' + videoIndex"
            :title="video.title"
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
    margin-bottom: 56px;

    &:last-child {
      margin-bottom: 0;
    }

    #{$c}__title {
      margin-bottom: 24px;
    }

    #{$c}__grid {
      #{$c}__link {
        transition: transform 100ms linear;

        &:hover {
          transform: scale(1.01);
        }

        &:active {
          transform: scale(0.99);
        }

        #{$c}__vignette {
          display: block;
        }
      }
    }
  }
}
</style>
