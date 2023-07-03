<script setup lang="ts">
import CarouselOfRecipes from '@/components/TheCarousel/CarouselOfRecipes.vue'
import { ref } from 'vue'
import Divider from 'primevue/divider'

// name should be taken from api
const userName = ref('Cukinia')
const randomEmojis = ['😃', '😍', '😎', '😋', '😉', '👇']
</script>

<template>
  <div>
    <div class="headers">
      <h2>Welcome back {{ userName }}!</h2>
      <h3>
        Check out this recipes!
        {{ randomEmojis[Math.floor(Math.random() * (randomEmojis.length - 1))] }}
      </h3>
    </div>

    <Divider />
    <CarouselOfRecipes />
  </div>
</template>

<style lang="scss"></style>
