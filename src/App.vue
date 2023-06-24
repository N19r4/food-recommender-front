<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainMenu from './components/TheMainMenu/MainMenu.vue'
import SearchSidebar from '@/components/TheSearchSidebar/SearchSidebar.vue'
import { ref } from 'vue'

const isSearchSidebarVisible = ref(false)
</script>

<template>
  <div class="main">
    <RouterView />
  </div>
  <div class="footer">
    <MainMenu @open-search-sidebar="isSearchSidebarVisible = !isSearchSidebarVisible" />
  </div>
  <Transition>
    <SearchSidebar v-if="isSearchSidebarVisible" />
  </Transition>
</template>

<style scoped>
/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
