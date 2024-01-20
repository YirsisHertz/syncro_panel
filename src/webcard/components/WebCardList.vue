<script lang="ts" setup>
import WebCard from "./WebCard.vue";
</script>

<template>
  <div class="list">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
      <WebCard />
      <WebCard />
      <WebCard />
      <WebCard />
      <WebCard />
      <WebCard />
      <WebCard />
    </div>
  </div>
</template>

<style scoped>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
}
</style>
