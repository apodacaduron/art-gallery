<script lang="ts">
  let scrollY = 0;

  $: backgroundParallax = `transform: translate3d(0, ${scrollY / 4}px, 0)`;
</script>

<svelte:window bind:scrollY />

<template>
  <div id="header" class="header">
    <div class="header__container__title">
      <h1 class="header__title">Discover outstanding pieces of art</h1>
    </div>
    <img
      class="header__background"
      src="assets/background.jpg"
      alt="Art background"
      style={backgroundParallax}
    />
    <div class="header__solid-background" />
  </div>
</template>

<style lang="scss">
  .header {
    @apply w-full h-3/4 relative overflow-hidden;
    @apply flex items-center justify-center;

    &__container {
      &__title {
        @apply text-4xl capitalize leading-none font-semibold text-white;
        @apply z-10 max-w-screen-sm text-center;
      }
    }

    &__background {
      @apply w-full h-full object-cover select-none;
      @apply absolute top-0 z-0;
    }
    &__solid-background {
      @apply w-full h-full bg-green-900;
      @apply absolute top-0 mix-blend-multiply;
    }
  }

  @media only screen and (max-width: 800px) {
    .header {
      &__container {
        &__title {
          @apply text-2xl leading-none;
        }
      }
    }
  }
</style>
