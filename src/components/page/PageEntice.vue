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

      .c-page-entice__form
        p.c-page-entice__form-label.u-semibold
          | Si tu construis un SaaS, rejoins-nous :

        base-button(
          @click="onJoinDiscordClick"
          class="c-page-entice__form-button"
          button-class="c-page-entice__form-button-inner"
          icon="discord"
        )
          | Je rejoins le Discord !
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageEntice",

  methods: {
    // --> ACTIONS <--

    onJoinDiscordClick() {
      window.open("https://www.linkedin.com/in/lecoupa/", "_blank");
    }
  }
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
        user-select: none;
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
      margin-top: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      #{$c}__form-label {
        font-size: 13px;
        line-height: 17px;
        margin-right: 26px;
      }

      #{$c}__form-button {
        flex: 0 0 auto;

        #{$c}__form-button-inner {
          padding-left: 25px;
          padding-right: 25px;
        }
      }
    }
  }
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-small-width-breakpoint) {
  .c-page-entice {
    #{$c}__box {
      padding: 30px 36px;
    }
  }
}

@media (max-width: $screen-tiny-width-breakpoint) {
  .c-page-entice {
    #{$c}__box {
      padding: 28px 30px;

      #{$c}__form {
        flex-direction: column;

        #{$c}__form-label {
          margin-bottom: 12px;
          margin-right: 0;
        }
      }
    }
  }
}

@media (max-width: $screen-lilliput-width-breakpoint) {
  .c-page-entice {
    #{$c}__box {
      text-align: center;
      padding: 26px 24px;
    }
  }
}
</style>
