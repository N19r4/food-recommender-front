<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <div class="main__wrapper">
          <component :is="Component" />
        </div>
      </transition>
    </router-view>
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
