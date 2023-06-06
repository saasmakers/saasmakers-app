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
    "c-form-field",
    "c-form-field--" + type,
    "c-form-field--" + size,
    {
      "c-form-field--focused": isFocused,
      "c-form-field--disabled": disabled
    }
  ]`
)
  input(
    @keydown="onFieldKeyDown"
    @keyup="onFieldKeyUp"
    @input="onFieldInput"
    @focus="onFieldFocus"
    @blur="onFieldBlur"
    :type="type"
    :name="name"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :class=`[
      "c-form-field__inner",
      "c-form-field__inner--input",
      {
        [fieldClass]: fieldClass
      }
    ]`
    ref="field"
  )
</template>

<!-- **********************************************************************
     SCRIPT
     ********************************************************************** -->

<script>
// NPM
import { codes as keyCodes } from "keycode";

export default {
  name: "FormField",

  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },

    type: {
      type: String,
      default: "text",

      validator(x) {
        return ["text", "password", "number", "email", "url"].includes(x);
      }
    },

    size: {
      type: String,
      default: "medium",

      validator(x) {
        return ["small", "medium", "large"].includes(x);
      }
    },

    name: {
      type: String,
      default: null
    },

    placeholder: {
      type: String,
      default: null
    },

    submittable: {
      type: Boolean,
      default: false
    },

    autofocus: {
      type: Boolean,
      default: false
    },

    disabled: {
      type: Boolean,
      default: false
    },

    fieldClass: {
      type: String,
      default: null
    }
  },

  emits: ["update:modelValue", "keystroke", "submit"],

  data() {
    return {
      // --> STATE <--

      isFocused: false,

      value: ""
    };
  },

  watch: {
    modelValue: {
      immediate: true,

      handler(value) {
        this.value = value;
      }
    }
  },

  mounted() {
    // Apply auto-focus?
    if (this.autofocus === true) {
      this.focusField();
    }
  },

  methods: {
    // --> HELPERS <--

    /**
     * Triggers when field is focused
     * @public
     * @return {undefined}
     */
    focusField() {
      const field = this.$refs.field || null;

      if (field !== null) {
        field.focus();
      }
    },

    // --> EVENT LISTENERS <--

    onFieldKeyDown(event) {
      // Submittable field? Handle key presses.
      if (this.submittable === true) {
        // Handle 'Enter' key press? (if not new line)
        if (event.keyCode === keyCodes.enter && event.shiftKey !== true) {
          event.preventDefault();

          // Trigger field submit event
          this.$emit("submit");
        }
      }
    },

    onFieldKeyUp(event) {
      // Propagate key event
      this.$emit("keystroke", event.target.value);
    },

    onFieldInput() {
      let inputValue = this.$refs.field.value || "";

      // Convert raw input value to number?
      if (inputValue && this.type === "number") {
        inputValue = Number(inputValue);
      }

      // Update model value
      this.$emit("update:modelValue", inputValue);
    },

    onFieldFocus() {
      this.isFocused = true;
    },

    onFieldBlur() {
      this.isFocused = false;
    }
  }
};
</script>

<!-- **********************************************************************
     STYLE
     ********************************************************************** -->

<style lang="scss">
$c: ".c-form-field";

// VARIABLES
$form-field-outline-width: 2px;
$form-field-border-radius: 8px;

$form-field-small-padding-sides: 10px;
$form-field-medium-padding-sides: 18px;
$form-field-large-padding-sides: 22px;

.c-form-field {
  position: relative;

  &:before,
  #{$c}__inner {
    transition-duration: 150ms;
    transition-timing-function: linear;
  }

  &:before {
    content: "";
    border: $form-field-outline-width solid transparent;
    inset: (-1 * $form-field-outline-width);
    position: absolute;
    pointer-events: none;
    transition-property: border-color;
    border-radius: ($form-field-border-radius + $form-field-outline-width);
  }

  #{$c}__inner {
    background-color: $color-white;
    border: 1px solid rgba($color-black, 0.1);
    outline: 0 none;
    color: $color-text-black;
    font-family: inherit;
    width: 100%;
    transition-property: box-shadow, border-color;
    border-radius: $form-field-border-radius;
    box-sizing: border-box;
    box-shadow: 0 3px 4px 0 rgba($color-black, 0.01),
      inset 0 1px 2px 0 rgba($color-black, 0.04);

    &--input {
      text-align: left;
    }

    &::placeholder {
      color: rgba($color-text-grey, 0.8);
      opacity: 1;
    }

    &:hover {
      border-color: rgba($color-base-purple-normal, 0.5);
    }

    &:focus {
      border-color: $color-base-purple-normal;
      box-shadow: 0 3px 4px 0 rgba($color-black, 0.1),
        inset 0 1px 2px 0 rgba($color-black, 0.04);
    }
  }

  // --> TYPES <--

  &--input {
    display: inline-block;
  }

  // --> SIZES <--

  &--small {
    #{$c}__inner {
      font-size: 11px;
      padding-left: $form-field-small-padding-sides;
      padding-right: $form-field-small-padding-sides;

      &--input {
        line-height: 25px;
      }
    }
  }

  &--medium {
    #{$c}__inner {
      font-size: 12.5px;
      padding-left: $form-field-medium-padding-sides;
      padding-right: $form-field-medium-padding-sides;

      &--input {
        line-height: 42px;
      }
    }
  }

  &--large {
    #{$c}__inner {
      font-size: 14px;
      padding-left: $form-field-large-padding-sides;
      padding-right: $form-field-large-padding-sides;

      &--input {
        line-height: 48px;
      }
    }
  }

  // --> BOOLEANS <--

  &--disabled {
    cursor: not-allowed;

    #{$c}__inner {
      background-color: rgba($color-text-grey, 0.05);
      color: $color-text-grey;
      pointer-events: none;

      &::placeholder {
        color: rgba($color-text-grey, 0.6);
      }
    }
  }

  &--focused {
    &:before {
      border-color: rgba($color-base-purple-normal, 0.2);
    }
  }
}
</style>
