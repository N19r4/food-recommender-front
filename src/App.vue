<script setup lang="ts">
import { app } from '@/main'
import router from '@/router'
import { computed, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import MainMenu from './components/TheMainMenu/MainMenu.vue'

const showFooter = ref()

const routeName = computed(() => router.currentRoute.value.fullPath)

watch(routeName, () => {
  getPath()
})

const getPath = () => {
  showFooter.value = routeName.value !== '/login'
}
</script>

<template>
  <div class="main">
    <RouterView />
  </div>
  <div class="footer" v-if="showFooter">
    <MainMenu />
  </div>
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
