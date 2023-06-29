<script setup lang="ts">
import { app } from '@/main'
import router from '@/router'
import { computed, onMounted, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import MainMenu from './components/TheMainMenu/MainMenu.vue'

const showFooter = ref()
const showContent = ref()

const routeName = computed(() => router.currentRoute.value.fullPath)

watch(routeName, () => {
  getPath()
})

onMounted(() => {
  getPath()
})

const getPath = () => {
  showFooter.value = routeName.value !== '/login'
  showContent.value = app.config.globalProperties.userID !== -1 || routeName.value === '/login'
}
</script>

<template>
  <div class="main">
    <RouterView v-if="showContent" />
    <div class="error" v-else>No access</div>
  </div>
  <div class="footer" v-if="showFooter && showContent">
    <MainMenu />
  </div>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
