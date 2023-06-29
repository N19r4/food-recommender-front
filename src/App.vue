<script setup lang="ts">
import { app } from '@/main'
import router from '@/router'
import { computed, onMounted, ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import MainMenu from './components/TheMainMenu/MainMenu.vue'
import Button from 'primevue/button'

const showFooter = ref()
const showContent = ref()

const routeName = computed(() => router.currentRoute.value.fullPath)

watch(routeName, () => {
  getPath()
})

onMounted(() => {
  getPath()
})

const goBack = () => {
  router.push('/login')
}

const getPath = () => {
  showFooter.value = routeName.value !== '/login'
  showContent.value = app.config.globalProperties.userID !== -1 || routeName.value === '/login'
}
</script>

<template>
  <div class="main">
    <RouterView v-if="showContent" />
    <div class="error" v-else>
      <h2>You are not logged in!</h2>
      <h3>Go back!</h3>
      <Button
        icon="pi pi-arrow-left"
        rounded
        aria-label="Go back"
        class="go-back-button"
        @click="goBack()"
      />
    </div>
  </div>
  <div class="footer" v-if="showFooter && showContent">
    <MainMenu />
  </div>
</template>

<style lang="scss" scoped>
.go-back-button {
  background: #ebb222;
  border: none;
}
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
}
</style>
