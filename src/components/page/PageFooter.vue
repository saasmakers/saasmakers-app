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
.c-page-footer
  page-wrapper
    .c-page-footer__details
      .c-page-footer__left
        .c-page-footer__copyright
          | © {{ currentYear }} {{ $config.author.name }}

      .c-page-footer__right
        ul.c-page-footer__social
          li.c-page-footer__social-item(
            v-for="socialItem in socialItems"
            :key="'social_' + socialItem.id"
          )
            a(
              :href="socialItem.target"
              :class=`[
                "c-page-footer__social-link",
                "u-medium",
                "c-page-footer__social-link--color-" + socialItem.color
              ]`
              target="_blank"
            )
              base-icon(
                :name="socialItem.id"
                :tint="socialItem.color"
                size="18px"
                class="c-page-footer__social-icon"
              )

              | {{ socialItem.label }}
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
export default {
  name: "PageFooter",

  data() {
    return {
      // --> DATA <--

      currentYear: new Date().getFullYear(),

      socialItems: [
        {
          id: "youtube",
          label: "YouTube",
          color: "red",
          target: this.$config.platforms.youtube.target
        },

        {
          id: "discord",
          label: "Discord",
          color: "blue",
          target: this.$config.platforms.discord.target
        }
      ]
    };
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-page-footer";

.c-page-footer {
  padding: 28px 0;

  #{$c}__left {
    display: flex;
    flex: 1;
  }

  #{$c}__right {
    padding-left: 12px;
    flex: 0 0 auto;
  }

  #{$c}__details {
    display: flex;
    align-items: center;
  }

  #{$c}__copyright {
    color: rgba($color-text-black, 0.4);
    font-size: 14px;
    letter-spacing: 0;
  }

  #{$c}__social {
    display: flex;

    #{$c}__social-item {
      margin-right: 22px;
      flex: 0 0 auto;

      &:last-child {
        margin-right: 0;
      }

      #{$c}__social-link {
        font-size: 13px;
        letter-spacing: -0.1px;
        display: flex;
        align-items: center;

        &:hover {
          text-decoration: underline;
        }

        #{$c}__social-icon {
          margin-right: 4px;
          flex: 0 0 auto;
        }

        &--color-blue {
          color: $color-base-blue-normal;
        }

        &--color-red {
          color: $color-base-red-normal;
        }
      }
    }
  }
}
</style>
