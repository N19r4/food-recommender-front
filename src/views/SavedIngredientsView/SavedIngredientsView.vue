<script setup lang="ts">
import { ref, watch } from 'vue'
import Checkbox from 'primevue/checkbox'

const checkedIngredients = ref(localStorage.ingredients.split(','))
const ingredients = ref(localStorage.ingredients.split(','))

watch(ingredients, (newVal) => {
  localStorage.ingredients = newVal
})
</script>

<template>
  <div>
    <h2>Shopping list</h2>
    <div class="ingredients-section__list">
      <div v-for="(value, index) in checkedIngredients" :key="index">
        <Checkbox
          v-model="ingredients"
          :inputId="`ingredient-${index}`"
          :name="value"
          :value="value"
        />
        <label :for="`ingredient-${index}`"> {{ value }} </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.ingredients-section {
  &__title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  display: flex;
  gap: 0.5rem;
  width: 100vw;
  padding: 3rem 3rem;
}
.ingredients-section {
  background-color: rgba(131, 131, 131, 0.07);
  border-radius: 0 0 3rem 3rem;
  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > div {
      display: flex;
      gap: 0.5rem;
    }
  }
}
</style>
