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
//- Notice: as the 'error' layout behaves as a page as per Nuxt rules, we \
//-   therefore treat it as a page here (inheriting the 'default' layout).
.p-error
  page-main-title
    template(
      slot="title"
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
      slot="description"
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

    nuxt-link(
      to="/"
      slot="action"
    )
      base-button(
        size="large"
      )
        | Revenir à l'accueil
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "ErrorLayout",

  layout: "simple",

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title:
        this.error.statusCode === 404
          ? "Page non trouvée"
          : `Erreur ${this.error.statusCode}`
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".p-error";
</style>
