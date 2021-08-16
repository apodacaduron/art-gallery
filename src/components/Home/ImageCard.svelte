<script lang="ts">
  import type { Artwork } from "./types";

  export let artwork: Artwork = undefined;

  let artworkImage = `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`;
</script>

<template>
  <div class="image-card">
    <img src={artworkImage} alt={artwork.title} />
  </div>
</template>

<style lang="scss">
  .image-card {
    img {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
</style>
