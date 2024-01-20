<script setup lang="ts">
import { RouterView } from "vue-router";
import RandomImage from "./image_background/components/randomImage.vue";
</script>

<template>
  <RandomImage>
    <RouterView />
  </RandomImage>
</template>
