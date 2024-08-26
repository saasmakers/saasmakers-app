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
    .c-page-footer__story
      .c-page-footer__avatars
        span(
          v-for="avatar in storyAvatars"
          :key="'avatar_' + avatar.id"
          :class=`[
            "c-page-footer__avatar",
            "c-page-footer__avatar--" + avatar.id
          ]`
          :style=`{
            backgroundImage: ("url(" + avatar.image + ")")
          }`
        )

      .c-page-footer__purpose
        h4.c-page-footer__purpose-title.u-semibold
          | Vidéos réalisées par

          base-space

          a(
            :href="$config.public.url.twitter_julien"
            target="_blank"
            class="u-bold"
          )
            | Julien

          base-space

          | &amp;

          base-space

          a(
            :href="$config.public.url.twitter_valerian"
            target="_blank"
            class="u-bold"
          )
            | Valerian

        .c-page-footer__purpose-text
          p
            | Chaque mois, nous parlons d’un sujet SaaS avec un expert du domaine.

    .c-page-footer__details
      .c-page-footer__left
        .c-page-footer__copyright
          | © {{ currentYear }} {{ $config.public.author.name }}

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
// CONSTANTS
import ImageJulien from "@/assets/images/components/page/PageFooter/julien.webp";
import ImageValerian from "@/assets/images/components/page/PageFooter/valerian.jpg";

export default {
  name: "PageFooter",

  data() {
    return {
      // --> DATA <--

      currentYear: new Date().getFullYear(),

      storyAvatars: [
        {
          id: "julien",
          image: ImageJulien
        },

        {
          id: "valerian",
          image: ImageValerian
        }
      ],

      socialItems: [
        {
          id: "youtube",
          label: "YouTube",
          color: "red",
          target: this.$config.public.platforms.youtube.target
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

// VARIABLES
$story-avatar-size: 68px;
$story-avatar-border-width: 4px;

#{$c} {
  padding: 28px 0;

  #{$c}__left {
    display: flex;
    flex: 1;
  }

  #{$c}__right {
    padding-left: 12px;
    flex: 0 0 auto;
  }

  #{$c}__story {
    margin-bottom: 60px;
    display: flex;
    align-items: center;

    #{$c}__avatars {
      margin-right: 24px;
      flex: 0 0 auto;

      #{$c}__avatar {
        background-color: $color-base-blue-ultra-light;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border: $story-avatar-border-width solid $color-base-white-normal;
        width: $story-avatar-size;
        height: $story-avatar-size;
        margin-left: (-1 * ((2 * $story-avatar-border-width) + 8px));
        border-radius: $story-avatar-size;
        display: inline-block;
        position: relative;

        &:nth-child(1) {
          margin-left: (-1 * $story-avatar-border-width);
          z-index: 1;
        }

        &:nth-child(2) {
          z-index: 0;
        }
      }
    }

    #{$c}__purpose {
      flex: 1;

      #{$c}__purpose-title {
        color: $color-text-black;
        font-size: 15px;

        a {
          color: $color-base-purple-light;

          &:hover {
            color: lighten($color-base-purple-light, 14%);
          }

          &:active {
            color: lighten($color-base-purple-light, 8%);
          }
        }
      }

      #{$c}__purpose-text {
        color: rgba($color-text-black, 0.8);
        margin-top: 11px;

        p {
          color: rgba($color-text-black, 0.8);
          font-size: 13px;
          line-height: 18px;
        }
      }
    }
  }

  #{$c}__details {
    display: flex;
    align-items: center;

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
}

// --> MEDIA-QUERIES <--

@media (max-width: $screen-lilliput-width-breakpoint) {
  #{$c} {
    #{$c}__story {
      flex-direction: column;

      #{$c}__avatars {
        margin-right: 0;
      }

      #{$c}__purpose {
        text-align: center;
        margin-top: 25px;
      }
    }
  }
}
</style>
