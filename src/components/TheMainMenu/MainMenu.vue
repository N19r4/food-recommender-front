<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue'
import Dock from 'primevue/dock'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

type label =
  | 'Go Back'
  | 'Home'
  | 'Search'
  | 'Add Recipe'
  | 'Save Added Recipe'
  | 'Save Edited Recipe'
  | 'Edit Recipe'
  | 'Delete Recipe'
  | 'Discard Changes'

type item = {
  label: label
  icon: string
  command: () => any
}

type menuConf = {
  path: string
  buttons: label[]
}

const menuConfigurations: menuConf[] = [
  {
    path: '/login',
    buttons: []
  },
  {
    path: '/',
    buttons: ['Add Recipe', 'Search']
  },
  {
    path: '/add-recipe',
    buttons: ['Go Back', 'Save Added Recipe']
  },
  {
    path: '/edit-recipe',
    buttons: ['Delete Recipe', 'Discard Changes', 'Save Edited Recipe']
  },
  {
    path: '/recipe',
    buttons: ['Add Recipe', 'Home']
  },
  {
    path: '/owned-recipe',
    buttons: ['Add Recipe', 'Home', 'Edit Recipe']
  },
  {
    path: '/search',
    buttons: ['Go Back']
  },
  {
    path: '/search-result',
    buttons: ['Home', 'Add Recipe', 'Search']
  }
]

const routeName = computed(() => router.currentRoute.value.fullPath)
const currentButtonsArray = ref()

watch(routeName, (newVal) => {
  currentButtonsArray.value = menuConfigurations.find(
    (conf) => conf.path === newVal.split('?')[0]
  )?.buttons
})

const items: Ref<item[]> = ref([
  {
    label: 'Go Back',
    icon: 'src/assets/arrow-back.svg',
    command: () => {
      router.go(-1)
    }
  },
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
      router.push('/search')
    }
  },
  {
    label: 'Add Recipe',
    icon: 'src/assets/add.svg',
    command: () => {
      router.push('/add-recipe')
    }
  },
  {
    label: 'Save Added Recipe',
    icon: 'src/assets/bookmark-tick.svg',
    command: () => {
      // new id should be taken from database
      router.push({
        path: '/owned-recipe',
        query: {
          id: Math.floor(Math.random() * 100)
        }
      })
    }
  },
  {
    label: 'Save Edited Recipe',
    icon: 'src/assets/bookmark-tick.svg',
    command: () => {
      alert('Recipe saved.')
      router.push({
        path: '/owned-recipe',
        query: {
          id: route.query.id
        }
      })
    }
  },
  {
    label: 'Edit Recipe',
    icon: 'src/assets/edit.svg',
    command: () => {
      router.push({
        path: '/edit-recipe',
        query: {
          id: route.query.id
        }
      })
    }
  },
  {
    label: 'Delete Recipe',
    icon: 'src/assets/delete.svg',
    command: () => {
      alert('Recipe deleted.')
      router.push('/')
    }
  },
  {
    label: 'Discard Changes',
    icon: 'src/assets/undo.svg',
    command: () => {
      router.push({
        path: '/owned-recipe',
        query: {
          id: route.query.id
        }
      })
    }
  }
])

const onDockItemClick = (event: any, item: any) => {
  if (item.command) {
    item.command()
  }
  event.preventDefault()
}

const checkIfIncludes = (label: any) => {
  const arr = currentButtonsArray.value
  if (!arr) {
    const path = router.currentRoute.value.fullPath
    currentButtonsArray.value = menuConfigurations.find(
      (conf) => conf.path === path.split('?')[0]
    )?.buttons
  }
  return currentButtonsArray.value.includes(label)
}
</script>

<template>
  <div class="main-menu">
    <div class="main-menu__wrapper">
      <Dock :model="items">
        <template #item="slotProps">
          <div
            v-if="checkIfIncludes(slotProps.item.label)"
            @click="onDockItemClick($event, slotProps.item)"
          >
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
  li:not(:has(.p-menuitem-content div)) {
    display: none;
  }
  li[aria-label='Edit Recipe'] {
    background-color: #097e2a !important;
  }
  li[aria-label='Delete Recipe'] {
    background-color: #c11818 !important;
  }
}
</style>
