<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Chips from 'primevue/chips'
import Button from 'primevue/button'
import { ref } from 'vue'

const title = ref(null)
const ingredients = ref([])
const steps = ref(1)
const stepValue = ref(null)

const addStep = () => steps.value++
</script>

<template>
  <h2>Add new recipe</h2>
  <div class="form__container">
    <span class="p-float-label">
      <InputText id="username" v-model="title" />
      <label for="username">recipe title</label>
    </span>
    <span class="p-float-label">
      <Chips id="chips" v-model="ingredients" separator="," />
      <label for="chips">ingredients</label>
    </span>
    <div class="steps__container">
      <span v-for="(step, index) in steps">
        <InputText :id="`step${index}`" v-model="stepValue" :placeholder="`step ${index + 1}`" />
      </span>
    </div>

    <Button icon="pi pi-plus" outlined rounded aria-label="Add" @click="addStep" />
  </div>
</template>

<style lang="scss">
.form__container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  .p-inputtext {
    max-width: 70vw;
    border: none;
    border-bottom: 1px solid #a2a2a2;
    border-radius: 0;
    input:focus {
      outline: none;
    }
  }
  .steps__container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
.p-chips .p-chips-multiple-container .p-chips-token {
  background-color: rgb(255, 206, 81) !important;
  padding: 0.5rem !important;
  margin-bottom: 0.5rem !important;
}
.p-button.p-button-outlined {
  color: rgb(255, 206, 81) !important;
}
.p-button.p-button-rounded {
  width: 1.5rem !important;
  height: 1.5rem !important;
  padding: 0;
}
</style>
