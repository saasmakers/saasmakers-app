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
span.c-base-space(
  v-html="spacesHtml"
)
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "BaseSpace",

  props: {
    repeat: {
      type: Number,
      default: 1
    }
  },

  computed: {
    spacesHtml() {
      return Array(this.repeat).fill("&nbsp;").join("");
    }
  }
};
</script>
