<script lang="ts" setup>
const gradient = () => {
  return `background: linear-gradient(to right, red, blue)`;
};
</script>

<template>
  <a href="https://angular.dev" target="_blank">
    <div :style="gradient()" class="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          class="px-5 py-3 w-36"
          src="https://cdn.svgporn.com/logos/angular-icon.svg"
          alt="Angular Icon"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Angular Docs</h2>
        <p class="underline">https://angular.dev</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card {
  box-shadow: inset 50px 0 80px #111;
  color: white;
  text-shadow:
    1px 0 #000,
    -1px 0 #000,
    0 1px #000,
    0 -1px #000,
    1px 1px #000,
    -1px -1px #000,
    1px -1px #000,
    -1px 1px #000;
}
</style>
