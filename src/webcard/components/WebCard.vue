<template>
  <div :style="gradient()" class="card card-side bg-base-100 shadow-xl">
    <button
      @click="shareSite()"
      class="absolute end-1 top-1 btn btn-circle glass font-bold text-black"
    >
      <i class="bi bi-share-fill"></i>
    </button>
    <a :href="webcard.url" class="flex" target="_blank">
      <figure>
        <img
          class="px-5 py-3 w-36"
          :src="webcard.imageUrl"
          :alt="webcard.name"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ webcard.name }}</h2>
        <p class="underline">{{ webcard.url }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
import type { WebCardEntity } from "../domain";

const { webcard } = defineProps<{ webcard: WebCardEntity }>();

const gradient = () => {
  return `background: linear-gradient(to right, ${webcard.colors.primary}, ${webcard.colors.secondary})`;
};

const shareSite = async () => {
  await navigator.share({
    text: `Descubre el servicio: ${webcard.name}`,
    title: webcard.name,
    url: webcard.url
  });
};
</script>

<style scoped>
.card {
  box-shadow: inset 30px 0 50px #111;
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
