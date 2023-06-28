<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Chips from 'primevue/chips'
import Button from 'primevue/button'
import { ref } from 'vue'

const title = ref(null)
const ingredients = ref(['milk'])
const stepsValues = ref(['Write something here!', 'Add something!'])

const addStep = () => stepsValues.value.push('')

const removeStep = (stepID: number) => {
  stepsValues.value.splice(stepID, 1)
}
</script>

<template>
  <h2>Add new recipe</h2>
  <div class="form__container">
    <span class="p-float-label">
      <InputText id="username" v-model="title" />
      <label for="username">recipe title</label>
    </span>
    <span class="p-float-label">
      <Chips id="chips" v-model="ingredients" separator=" " />
      <label for="chips">ingredients</label>
    </span>
    <div class="steps__container">
      <span v-for="(step, index) in stepsValues" :key="index">
        <Button
          icon="pi pi-minus"
          outlined
          rounded
          aria-label="Remove"
          @click="removeStep(index)"
        />
        <span>{{ `${index + 1}. ${step}` }}</span>

        <!-- <InputText :id="`step${index}`" :placeholder="`step ${index + 1}`" /> -->
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
