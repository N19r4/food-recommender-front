import { createRouter, createWebHistory } from 'vue-router'
import {
  HomeView,
  SearchView,
  RecipeView,
  AddRecipeView,
  SearchResultView,
  EditRecipeView,
  LoginView
} from '@/views'
import ViewWrapper from '@/components/common/ViewWrapper.vue'

const router = createRouter({
  scrollBehavior() {
    return { top: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: ViewWrapper,
      children: [
        {
          path: '',
          name: 'login',
          component: LoginView
        }
      ]
    },

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
          path: '/edit-recipe',
          name: 'edit recipe',
          component: EditRecipeView
        },
        {
          path: '/recipe',
          name: 'recipe',
          component: RecipeView
        },
        {
          path: '/owned-recipe',
          name: 'owned recipe',
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
