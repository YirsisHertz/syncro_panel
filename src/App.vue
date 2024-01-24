<script setup lang="ts">
import { RouterView } from "vue-router";
import DigitalClock from "./clock/components/DigitalClock.vue";
import RandomImage from "./image_background/components/randomImage.vue";
import ReloadPrompt from './components/ReloadPrompt.vue'
</script>

<template>
  <main>
    <RandomImage>
      <DigitalClock />

      <RouterView />
    </RandomImage>

    <ReloadPrompt />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  height: 100%;
}
</style>
