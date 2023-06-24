<script setup lang="ts">
import InputText from 'primevue/inputtext'
import { ref } from 'vue'
import Chips from 'primevue/chips'

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
  <div class="sidebar">
    <Chips v-model="value" />
  </div>
</template>

<style lang="scss">
.p-chips {
  border-radius: 27px;
  border: 1px solid #ebb222;
  width: 18rem;
  height: 3rem;
}
.p-chips-token {
  padding: 5px;
  background-color: #ebb222;
  border-radius: 20px;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
