<script setup lang="ts">
import SearchResultCarousel from '@/components/TheSearchResultsCarousel/SearchResultsCarousel.vue'
import Divider from 'primevue/divider'
</script>

<template>
  <div>
    <h2>My recipes</h2>
    <Divider />
    <SearchResultCarousel :recipes-to-show="'owned'" />
  </div>
</template>

<style lang="scss"></style>
