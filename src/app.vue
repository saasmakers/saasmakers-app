<!--
 * SaaS Makers - Web
 *
 * Copyright 2024, SaaS Makers
 * Author: Valerian Saliou https://valeriansaliou.name/
 -->

<!-- **********************************************************************
     TEMPLATE
     ********************************************************************** -->

<template lang="pug">
nuxt-layout(
  layout="default"
)
  nuxt-loading-indicator(
    :throttle="250"
    :duration="3000"
    :height="3"
    color="#ff88a3"
    error-color="#db0031"
  )

  nuxt-page
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
// Set page title (default title if none set)
useHead({
  title: "SaaS Makers"
});
</script>
