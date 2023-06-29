<script setup lang="ts">
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Chips from 'primevue/chips'
import Button from 'primevue/button'
import { ref } from 'vue'

const title = ref(null)
const ingredients = ref(['milk'])
const tags = ref(['asian', 'easy'])
const stepsValues = ref(['Add more steps!'])
const enteredStep = ref('')
const enteredPrepTime = ref(0)

const addStep = () => {
  stepsValues.value.push(enteredStep.value)
  enteredStep.value = ''
}

const removeStep = (stepID: number) => {
  stepsValues.value.splice(stepID, 1)
}
</script>

<template>
  <h2>Add new recipe</h2>
  <div class="form__container">
    <span class="p-float-label">
      <InputText id="username" v-model="title" />
      <label for="username">Recipe title</label>
    </span>
    <span class="p-float-label">
      <Chips id="chips" v-model="ingredients" separator=" " />
      <label for="chips">Ingredients</label>
    </span>
    <div class="steps__container">
      <label>Steps</label>
      <span v-for="(step, index) in stepsValues" :key="index" class="step">
        <Button
          icon="pi pi-minus"
          outlined
          rounded
          aria-label="Remove"
          @click="removeStep(index)"
        />
        <span>{{ `${index + 1}. ${step}` }}</span>
      </span>
      <InputText v-model="enteredStep" placeholder="Write here next step" />
      <Button
        icon="pi pi-plus"
        rounded
        aria-label="Add"
        :disabled="enteredStep.length <= 0 ? true : false"
        @click="addStep()"
      />
    </div>
    <div class="additional-info">
      <label for="prep-time">Prep Time</label>
      <InputNumber
        input-id="prep-time"
        v-model="enteredPrepTime"
        :min="0"
        :max="600"
        suffix=" mins"
      />
    </div>
    <span class="p-float-label">
      <Chips id="chips" v-model="tags" separator=" " />
      <label for="chips">Tags</label>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.step {
  display: flex;
  gap: 1rem;
}
</style>
