<script lang="ts">
  export let darkMode = false;
</script>

<template>
  <nav class:dark-mode={darkMode}>
    <div class="nav__container">
      <div class="logo">Art Institute</div>
      <ul class="links">
        <li>
          <a href="https://www.artic.edu/">Visit</a>
        </li>
        <li><a href="https://api.artic.edu/docs/#introduction">API</a></li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss">
  nav {
    @apply h-14 w-full z-50 bg-white;
    @apply fixed top-0 left-0 right-0;

    .nav__container {
      @apply h-full max-w-screen-xl;
      @apply mx-auto px-6 box-border;
      @apply flex items-center justify-between;

      .logo {
        @apply font-semibold text-2xl;
      }

      .links {
        @apply flex list-none;
        li {
          @apply px-6 py-4;
        }
      }
    }
  }

  .dark-mode {
    @apply text-white;
  }
</style>
