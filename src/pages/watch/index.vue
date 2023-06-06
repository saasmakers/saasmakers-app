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
.p-watch-index
  section-watch-header(
    :title="title"
    :speakers="['Baptiste Jamin', 'Valérian Saliou', 'Julien Le Coupanec']"
    class="p-watch-index__header"
  )

  section-watch-video(
    :id="'vingWLFhYTQ'"
    class="p-watch-index__video"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const VIDEO_TITLE = "SaaS Backend, Sécurité, Arnaques";

export default {
  name: "WatchIndexPage",

  layout: "theater",

  data() {
    return {
      // --> DATA <--

      title: VIDEO_TITLE
    };
  },

  head: {
    title: `${VIDEO_TITLE} — SaaS Makers`
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-watch-index";

.p-watch-index {
  padding: 38px 50px;
  display: flex;
  flex-direction: column;
  position: absolute;
  inset: 0;

  #{$c}__header {
    margin-bottom: 44px;
    flex: 0 0 auto;
  }

  #{$c}__video {
    padding-bottom: 24px;
    flex: 1;
  }
}
</style>
