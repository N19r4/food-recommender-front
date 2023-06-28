<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RecipesData } from './data/recipesData'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(() => {
  RecipesData.getProducts().then((data: any) => (recipes.value = data))
})

const recipes = ref()

const goToRecipe = (recipeId: number, isOwned: boolean) => {
  router.push({
    path: '/recipe',
    query: {
      id: recipeId,
      editable: isOwned ? '1' : '0'
    }
  })
}
</script>
<template>
  <div class="search-results-carousel__wrapper">
    <div
      class="recipe"
      v-for="{ id, imageURL, title, courses, cuisines, isOwned } in recipes"
      @click="goToRecipe(id, isOwned)"
    >
      <div class="recipe__image" :style="`background-image: url(${imageURL});`">
        <div class="recipe__image__overlay">
          <span class="recipe__title">{{ title }}</span>
          <div class="recipe__tags">
            <div class="recipe__tags__courses">
              <span v-for="course in courses">#{{ course }} </span>
            </div>
            <div class="recipe__tags__cuisines">
              <span v-for="cuisine in cuisines">#{{ cuisine }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-results-carousel__wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 5px 10px 2px rgba(119, 119, 119, 0.436);
    }

    border-radius: 22px;
    transition: 0.5s;

    &__image {
      width: 14.55581rem;
      height: 10.271rem;
      border-radius: 22px;
      background: #d9d9d9;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      &__overlay {
        background: rgba(13, 13, 13, 0.61);
        height: 100%;
        width: 75%;
        float: right;
        border-radius: inherit;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;

        padding: 2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
    &__title {
      color: #fff;
      font-size: 1rem;
    }
    &__tags {
      display: flex;
      flex-direction: column;
      &__cuisines,
      &__courses {
        color: #fff;
        font-size: 0.8rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
    }
  }
}
</style>