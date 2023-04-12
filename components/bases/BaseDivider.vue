<!-- -------------------------------------------------------------------------
     TEMPLATE
     ------------------------------------------------------------------------- -->

<template>
  <div
    :class="{
      // --> BORDER COLORS <--

      'border-black': borderColor === 'black',
      'border-gray-300': borderColor === 'gray',

      // --> BORDER-STYLES <--

      'border-dashed': borderStyle === 'dashed',
      'border-dotted': borderStyle === 'dotted',
      'border-none': borderStyle === 'none',
      'border-solid': borderStyle === 'solid',
    }"
    class="base-divider relative block w-full border-t text-center"
    style="height: 1px"
  >
    <span
      v-if="title"
      :class="{
        // --> BACKGROUNDS <--

        'bg-gray-100': background === 'gray',
        'bg-white': background === 'white',

        // --> SIZES <--

        'text-xs': size === 'sm',
        'text-sm': size === 'base',
      }"
      class="absolute -mt-2.5 inline-block -translate-x-1/2 transform px-4 text-center font-bold uppercase leading-normal tracking-tighter"
    >
      {{ title }}
    </span>

    <slot v-if="$slots.default" />
  </div>
</template>

<!-- -------------------------------------------------------------------------
     SCRIPT
     ------------------------------------------------------------------------- -->

<script setup>
defineProps({
  background: {
    type: String,
    default: "gray",
    validator(x) {
      return ["gray", "white"].includes(x);
    },
  },
  borderColor: {
    type: String,
    default: "gray",
    validator(x) {
      return ["black", "gray"].includes(x);
    },
  },
  borderStyle: {
    type: String,
    default: "dashed",
    validator(x) {
      return ["dashed", "dotted", "none", "solid"].includes(x);
    },
  },
  size: {
    type: String,
    default: "sm",
    validator(x) {
      return ["sm", "base"].includes(x);
    },
  },
  title: {
    type: String,
    default: null,
  },
});
</script>
