<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Chips from 'primevue/chips'
import Button from 'primevue/button'
import { ref } from 'vue'

const title = ref(null)
const ingredients = ref(['milk'])
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
      <Chips id="chips" v-model="ingredients" separator=" " />
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

<style lang="scss" scoped></style>
