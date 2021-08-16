<script lang="ts">
  import ImageCard from "./ImageCard.svelte";
  import type { Artwork, PayloadRecords } from "./types";

  const artworkFields = [
    "id",
    "title",
    "artist_display",
    "place_of_origin",
    "dimensions",
    "medium_display",
    "image_id",
    "term_titles",
    "last_updated_source",
    "last_updated",
    "timestamp",
  ].join(",");

  const fetchArtworks: Promise<PayloadRecords<Artwork[]>> = (async () => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?query[exists][field]=image_id&page=1&limit=20&fields=${artworkFields}`
    );
    return await response.json();
  })();
</script>

<template>
  <div class="image-grid">
    {#await fetchArtworks}
      <div class="loading">Loading...</div>
    {:then artworksResponse}
      {#each artworksResponse.data as artwork}
        <ImageCard {artwork} />
      {/each}
    {/await}
  </div>
</template>

<style lang="scss">
  .image-grid {
    @apply w-full max-w-screen-xl mx-auto my-14 px-6;
    column-count: 4;

    .loading {
      @apply w-full flex items-center justify-center;
    }
  }

  @media only screen and (max-width: 1000px) {
    .image-grid {
      column-count: 3;
    }
  }

  @media only screen and (max-width: 800px) {
    .image-grid {
      column-count: 2;
    }
  }

  @media only screen and (max-width: 400px) {
    .image-grid {
      column-count: 1;
    }
  }
</style>
