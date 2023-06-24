import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, SearchView } from '@/views'
import ViewWrapper from '@/components/common/ViewWrapper.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewWrapper,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/search',
          name: 'search',
          component: SearchView
        }
      ]
    }
  ]
})

export default router
