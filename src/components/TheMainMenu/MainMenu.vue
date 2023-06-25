<script setup lang="ts">
import { ref } from 'vue'
import Dock from 'primevue/dock'
import router from '@/router'

const emit = defineEmits(['open-search-sidebar'])

const items = ref([
  {
    label: 'Home',
    icon: 'src/assets/home.svg',
    command: () => {
      router.push('/')
    }
  },
  {
    label: 'Search',
    icon: 'src/assets/search.svg',
    command: () => {
      emit('open-search-sidebar')
    }
  },
  {
    label: 'Add recipe',
    icon: 'src/assets/add.svg',
    command: () => {
      router.push('/add-recipe')
    }
  }
])

const onDockItemClick = (event: any, item: any) => {
  if (item.command) {
    item.command()
  }
  event.preventDefault()
}
</script>

<template>
  <div class="main-menu">
    <div class="main-menu__wrapper">
      <Dock :model="items">
        <template #item="slotProps">
          <div @click="onDockItemClick($event, slotProps.item)">
            <img :src="slotProps.item.icon" />
          </div>
        </template>
      </Dock>
    </div>
  </div>
</template>

<style lang="scss">
.main-menu {
  all: initial !important;
}
.p-dock {
  background-color: rgb(255, 206, 81);
  height: auto;
}
.p-dock-item {
  background-color: rgb(255, 206, 81);
  border-radius: 100% !important;
  border: 3px solid white;
  transition: 0.2s;
  padding: 10px !important;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .p-menuitem-content,
  img {
    width: 30px;
    height: 30px;
  }
  &-current {
    transform: scale(1.4) !important;
    border: 3.5px solid white;
    &:hover {
      cursor: pointer;
      filter: brightness(110%);
    }
  }
  &-prev,
  &-next {
    transform: scale(1.1) !important;
  }
}
.p-dock-list {
  position: relative;
  bottom: 20px;
  gap: 30px;
  &-container {
    height: 60px;
  }
}
.p-dock.p-dock-top .p-dock-list-container,
.p-dock.p-dock-bottom .p-dock-list-container {
  overflow: visible !important;
}
</style>
