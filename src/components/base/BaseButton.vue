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
div(
  :class=`[
    "c-base-button",
    "c-base-button--" + size,
    "c-base-button--" + tint,
    {
      "c-base-button--borderless": borderless,
      "c-base-button--round": round,
      "c-base-button--disabled": disabled
    }
  ]`
)
  button(
    @click="onInnerClick"
    :type="type"
    :class=`[
      "c-base-button__inner",
      {
        [buttonClass]: buttonClass
      }
    ]`
  )
    //- TODO: add this component
    base-icon(
      v-if="icon"
      :name="icon"
      :size="iconSize"
      class="c-base-button__icon"
    )

    div(
      :class=`[
        "c-base-button__label",
        {
          "u-medium": !bolder,
          "u-semibold": bolder
        }
      ]`
    )
      slot
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// CONSTANTS
const AVAILABLE_SIZES = {
  small: {
    icon: "13px"
  },

  medium: {
    icon: "16px"
  },

  large: {
    icon: "17px"
  }
};

export default {
  name: "BaseButton",

  props: {
    type: {
      type: String,
      default: "button",

      validator(x) {
        return ["button", "submit"].includes(x);
      }
    },

    tint: {
      type: String,
      default: "dark",

      validator(x) {
        return ["light", "dark", "red"].includes(x);
      }
    },

    size: {
      type: String,
      default: "medium",

      validator(x) {
        return x in AVAILABLE_SIZES[x];
      }
    },

    icon: {
      type: String,
      default: null
    },

    bolder: {
      type: Boolean,
      default: false
    },

    round: {
      type: Boolean,
      default: false
    },

    borderless: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    buttonClass: {
      type: String,
      default: null
    }
  },

  emits: ["click"],

  computed: {
    iconSize() {
      if (this.icon) {
        const sizeProperties = AVAILABLE_SIZES[this.size];

        // Return icon size for button size?
        if (sizeProperties) {
          return sizeProperties.icon;
        }

        // Return fallback size
        return "15px";
      }

      // No icon set (therefore no icon size)
      return null;
    }
  },

  methods: {
    // --> EVENT LISTENERS <--

    onInnerClick(event) {
      // Re-emit click event
      this.$emit("click", event);
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-base-button";

// VARIABLES
$color-button-dark: $color-base-purple-normal;
$color-button-light: transparent;
$color-button-red: $color-base-red-normal;

$color-shadow-red: #920606;

$size-small-padding-sides: 14px;
$size-medium-padding-sides: 30px;
$size-large-padding-sides: 34px;

.c-base-button {
  display: inline-block;

  #{$c}__inner {
    border: 1px solid rgba($color-black, 0.5);
    outline: 2px solid transparent;
    text-align: center;
    user-select: none;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    transition: all 100ms linear;
    transition-property: transform, box-shadow, background-color, border-color;

    &:active {
      transform: translateY(1px);
    }

    &:focus-visible {
      outline-color: rgba($color-base-purple-normal, 0.3);
      outline-offset: 1px;
    }

    #{$c}__icon {
      margin-inline-end: 10px;
      flex: 0 0 auto;
    }

    #{$c}__label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
    }
  }

  // --> TINTS <--

  &--dark,
  &--red {
    #{$c}__inner {
      #{$c}__icon {
        fill: $color-white;
      }

      #{$c}__label {
        color: $color-white;
      }
    }
  }

  &--dark {
    #{$c}__inner {
      background-color: $color-button-dark;
      box-shadow: 0 4px 4px 0 rgba($color-button-dark, 0.04),
        inset 0 1px 0 0 rgba($color-white, 0.15);

      &:hover {
        background-color: lighten($color-button-dark, 6%);
      }

      &:active {
        background-color: lighten($color-button-dark, 2%);
        box-shadow: 0 1px 1px 0 rgba($color-button-dark, 0.12);
      }
    }
  }

  &--light {
    #{$c}__inner {
      background-color: $color-button-light;
      border-color: rgba($color-black, 0.15);

      #{$c}__icon {
        fill: $color-black;
      }

      #{$c}__label {
        color: $color-black;
      }

      &:hover,
      &:active {
        border-color: rgba($color-black, 0.2);
      }
    }
  }

  &--red {
    #{$c}__inner {
      background-color: $color-button-red;
      box-shadow: 0 8px 26px 0 rgba($color-shadow-red, 0.125),
        inset 0 1px 0 0 rgba($color-white, 0.15);

      &:hover {
        background-color: lighten($color-button-red, 6%);
      }

      &:active {
        background-color: lighten($color-button-red, 2%);
        box-shadow: 0 1px 6px 0 rgba($color-shadow-red, 0.2);
      }
    }
  }

  // --> SIZES <--

  &--small {
    #{$c}__inner {
      font-size: 10px;
      line-height: 25px;
      padding-bottom: 1px;
      padding-inline-start: $size-small-padding-sides;
      padding-inline-end: $size-small-padding-sides;
    }
  }

  &--medium {
    #{$c}__inner {
      font-size: 12.5px;
      line-height: 40px;
      padding-bottom: 2px;
      padding-inline-start: $size-medium-padding-sides;
      padding-inline-end: $size-medium-padding-sides;
    }
  }

  &--large {
    #{$c}__inner {
      font-size: 15px;
      line-height: 48px;
      padding-bottom: 4px;
      padding-inline-start: $size-large-padding-sides;
      padding-inline-end: $size-large-padding-sides;
    }
  }

  // --> BOOLEANS <--

  &--borderless {
    #{$c}__inner {
      border: 0 none;
    }
  }

  &--round {
    #{$c}__inner {
      border-radius: 100px;
    }
  }

  &--disabled {
    cursor: not-allowed;

    #{$c}__inner {
      pointer-events: none;
      opacity: 0.6;
    }
  }
}
</style>
