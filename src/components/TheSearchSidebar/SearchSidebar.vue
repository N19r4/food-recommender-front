<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import Chips from 'primevue/chips'

const value1 = ref()
// import { useToast } from 'primevue/usetoast'
// import { useField, useForm } from 'vee-validate'

// const { handleSubmit, resetForm } = useForm()
// const { value, errorMessage } = useField('value', validateField)
// const toast = useToast()

// validateField = (value) => {
//   if (!value) return 'At least one chip is required.'

//   return true
// }

// const onSubmit = handleSubmit((values) => {
//   if (values.value && values.value.length > 0) {
//     toast.add({
//       severity: 'info',
//       summary: 'Form Submitted',
//       detail: values.value.join(','),
//       life: 3000
//     })
//     resetForm()
//   }
// })

const value = ref(null)
</script>

<template>
  <h2>What dou you want to find?</h2>
  <div class="form__container">
    <Chips v-model="value1" />
  </div>
</template>

<style lang="scss">
// .p-chips {
//   border-radius: 27px;
//   border: 1px solid #ebb222;
//   width: 18rem;
//   height: 3rem;
// }
// .p-chips-token {
//   padding: 5px;
//   background-color: #ebb222;
//   border-radius: 20px;
// }

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
