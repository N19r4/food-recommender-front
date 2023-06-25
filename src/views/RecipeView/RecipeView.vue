<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <h2>Recipe {{ route.query.id }}</h2>
</template>
