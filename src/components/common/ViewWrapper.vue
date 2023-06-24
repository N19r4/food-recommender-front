<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss">
.wrapper {
  margin: 40px 0;
  background-color: rgb(255, 255, 255);
  border-top: 1px solid #e6e4d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0;
  overflow-x: hidden;
}
</style>
