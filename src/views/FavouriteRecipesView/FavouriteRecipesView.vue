<script setup lang="ts">
import SearchResultCarousel from '@/components/TheSearchResultsCarousel/SearchResultsCarousel.vue'
</script>

<template>
  <div>
    <h2>Liked recipes</h2>
    <SearchResultCarousel :recipes-to-show="'favourite'" />
  </div>
</template>

<style lang="scss"></style>
