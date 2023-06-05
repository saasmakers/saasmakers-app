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
.c-page-entice
  page-wrapper
    .c-page-entice__box
      h6.c-page-entice__title.u-bold
        span.c-page-entice__title-icon
          | 👋

        | Rejoins la communauté Discord SaaS Makers !

      .c-page-entice__text
        p
          | Boostrapper son SaaS est une activité où l’on est souvent seul. Il existe pourtant beaucoup de SaaS Makers comme toi, à toute étape de la construction de leur produit. Nous avons créé un Discord pour échanger et organiser des évènements IRL.

        p.u-medium
          | Si tu construis un SaaS, rejoins-nous ! Nous avons besoin de connaître ton email et ton site :

      .c-page-entice__form
        form-field(
          name="name"
          placeholder="Ton nom?"
        )

        form-field(
          type="email"
          name="email"
          placeholder="Entre ton email..."
        )

        form-field(
          type="url"
          name="website"
          placeholder="your-saas-website.com"
        )

        base-button(
          class="c-page-entice__form-button"
        )
          | Je rejoins le Discord !
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageEntice"
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-entice";

.c-page-entice {
  #{$c}__box {
    background: $color-background-white;
    border: 1px solid rgba($color-base-black-light, 0.1);
    color: $color-text-black;
    letter-spacing: 0;
    padding: 32px 45px;
    border-radius: 12px;
    box-shadow: 0 12px 38px 0 rgba($color-base-black-light, 0.05);

    #{$c}__title {
      font-size: 17.5px;

      #{$c}__title-icon {
        font-size: 22px;
        vertical-align: middle;
        margin-top: -2px;
        margin-right: 11px;
        display: inline-block;
      }
    }

    #{$c}__text {
      margin-top: 20px;

      p {
        font-size: 13.5px;
        line-height: 19px;
        margin-bottom: 14px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    #{$c}__form {
      margin-top: 25px;
      padding-right: 60px;
      display: flex;
      align-items: center;

      > * {
        margin-right: 5px;
        flex: 0 0 auto;

        &:nth-child(1) {
          flex: 0.25;
        }

        &:nth-child(2),
        &:nth-child(3) {
          flex: 0.3;
        }

        &:nth-child(4) {
          flex: 0.15;
        }
      }

      #{$c}__form-button {
        margin-left: 16px;
      }
    }
  }
}
</style>
