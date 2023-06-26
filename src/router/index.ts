import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, SearchView, RecipeView, AddRecipeView, SearchResultView } from '@/views'
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
          path: '/add-recipe',
          name: 'add recipe',
          component: AddRecipeView
        },
        {
          path: '/recipe',
          name: 'recipe',
          component: RecipeView
        },
        {
          path: '/search',
          name: 'search',
          component: SearchView
        },
        {
          path: '/search-result',
          name: 'search result',
          component: SearchResultView
        }
      ]
    }
  ]
})

export default router
