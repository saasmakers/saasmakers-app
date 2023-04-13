<template>
  <div :style="{ backgroundImage: 'url(/images/backgrounds/grid.svg)' }" class="layout-default z-50 select-none bg-repeat leading-relaxed tracking-tight text-gray-900 antialiased">
    <the-header />

    <main class="container relative mt-6 sm:mt-8">
      <div class="h-20"></div>
    </main>
  </div>
</template>

<!-- -------------------------------------------------------------------------
     STYLE
     ------------------------------------------------------------------------- -->

<style lang="scss">
html {
  @apply bg-gray-100 #{!important};
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
}

a,
img {
  -webkit-user-drag: none;
}

a {
  @apply outline-none #{!important};

  &:focus {
    &:not(.no-link-focus-style) {
      @apply text-black #{!important};
    }
  }
}

img {
  user-select: none;
}
</style>
