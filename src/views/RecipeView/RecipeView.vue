<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RecipesData } from '../database'
import { onMounted, ref } from 'vue'
import Loader from '@/components/common/Loader.vue'

const route = useRoute()
const recipe = ref()

onMounted(() => {
  recipe.value = RecipesData.getProductsData().find(
    ({ id }) => id == (route.query.id as unknown as number)
  )
})
</script>

<template>
  <div>
    <div class="recipe" v-if="recipe">
      <div v-if="recipe.isOwned" class="recipe__owned-marker"></div>
      <div class="recipe__image" :style="`background-image: url(${recipe.imageURL});`">
        <div class="recipe__image__overlay">
          <span class="recipe__title">{{ recipe.title }}</span>
          <div class="recipe__tags">
            <div class="recipe__tags__tags">
              <span v-for="tag in recipe.tags">#{{ tag }} </span>
            </div>
            <div class="recipe__tags__cuisines">
              <span v-for="cuisine in recipe.cuisines">#{{ cuisine }} </span>
            </div>
          </div>
        </div>
      </div>
      <div class="recipe__ingredients-section">
        <span class="recipe__ingredients-section__title">Ingredients</span>
        <span v-for="(ingredient, index) in recipe.ingredients">{{
          `${index + 1}. ${ingredient}`
        }}</span>
      </div>
      <div class="recipe__steps-section">
        <span class="recipe__steps-section__title">Steps</span>
        <span v-for="(step, index) in recipe.steps">{{ `${index + 1}. ${step}` }}</span>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<style lang="scss" scoped>
.recipe {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transform: translateY(-5rem);

  &__owned-marker {
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 4rem 4rem 0;
    border-color: transparent #097e2a transparent transparent;
  }

  &__image {
    min-width: 100vw;
    height: 16.125rem;
    border-radius: 0 0 40px 40px;
    background: #d9d9d9;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &__overlay {
      background: rgba(0, 0, 0, 0.36);
      height: 100%;
      width: 100%;
      float: right;
      border-radius: inherit;

      padding: 2rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 1rem;
    }
  }
  &__title {
    color: #fff;
    font-size: 1.25rem;
  }
  &__tags {
    display: flex;
    flex-direction: column;
    &__cuisines,
    &__tags {
      color: #fff;
      font-size: 1rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  }
  &__steps-section,
  &__ingredients-section {
    &__title {
      font-size: 1.5rem;
    }
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100vw;
    padding: 2rem 3rem;
  }
  &__ingredients-section {
    background-color: rgba(131, 131, 131, 0.07);
  }
}
</style>
