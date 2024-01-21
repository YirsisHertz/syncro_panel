<script setup lang="ts">
import { RouterView } from "vue-router";
import RandomImage from "./image_background/components/randomImage.vue";
</script>

<template>
  <main>
    <RandomImage>
      <RouterView />
    </RandomImage>
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  height: 100%;
}
</style>
