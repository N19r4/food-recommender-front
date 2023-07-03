<script setup lang="ts">
import SearchResultCarousel from '@/components/TheSearchResultsCarousel/SearchResultsCarousel.vue'
import Divider from 'primevue/divider'
</script>

<template>
  <div>
    <h2>Favourites</h2>
    <Divider />
    <SearchResultCarousel :recipes-to-show="'favourite'" />
  </div>
</template>

<style lang="scss"></style>
