<!-- -------------------------------------------------------------------------
     TEMPLATE
     ------------------------------------------------------------------------- -->

<template>
  <div
    :class="{
      // --> DIRECTIONS <--

      'xl:flex-row': direction === 'horizontal',
      'xl:justify-center': direction === 'horizontal' && center,
      'xl:flex-row-reverse': direction === 'horizontal' && reverse,
    }"
    class="section-wrapper flex flex-col"
  >
    <div
      :class="{
        // --> DIRECTIONS <--

        'xl:mb-0 xl:text-left': direction === 'horizontal',
        'xl:flex-1': direction === 'horizontal' && !center,
        'xl:flex-initial': direction === 'horizontal' && center,
        'xl:ml-16': direction === 'horizontal' && reverse,
        'xl:mr-16': direction === 'horizontal' && !reverse,
      }"
      class="mb-10 text-center"
    >
      <slot name="left" />
    </div>

    <div class="flex-initial">
      <slot name="right" />
    </div>
  </div>
</template>

<!-- -------------------------------------------------------------------------
     SCRIPT
     ------------------------------------------------------------------------- -->

<script setup>
defineProps({
  center: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: "vertical",
    validator(x) {
      return ["horizontal", "vertical"].includes(x);
    },
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});
</script>
