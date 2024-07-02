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
nuxt-layout(
  name="simple"
)
  .p-error
    page-main-title
      template(
        v-slot:title
      )
        template(
          v-if="error.statusCode === 404"
        )
          | Page non trouvée

        template(
          v-else
        )
          | Une erreur s'est produite

      template(
        v-slot:description
      )
        template(
          v-if="error.statusCode === 404"
        )
          p.u-medium
            | Cette page n'a pas été trouvée.

          p
            | Revenez à l'accueil pour retrouver votre chemin.

        template(
          v-else
        )
          p(
            v-if="error.message"
          )
            | {{ error.message }}.

          p(
            v-else
          )
            | Une erreur inattendue s'est produite. Essayez à nouveau ?

          p.u-medium
            | Code d'erreur : {{ error.statusCode }}

      template(
        v-slot:action
      )
        nuxt-link(
          to="/"
        )
          base-button(
            size="large"
          )
            | Revenir à l'accueil
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script setup>
// Define props
const props = defineProps({
  error: {
    type: Object,
    required: true
  }
});

// Set page title
useHead({
  title:
    props.error.statusCode === 404
      ? "Page non trouvée"
      : `Erreur ${props.error.statusCode}`
});
</script>
