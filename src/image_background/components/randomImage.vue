<template>
  <main :style="reactiveStyles">
    <slot></slot>

    <ImageDetails :color="unsplashImage?.color">
      <template v-slot:username>
        {{ unsplashImage?.user.username || "Unknow" }}
      </template>
      <template v-slot:instagram>
        {{ unsplashImage?.user.instagram || "Unknow" }}
      </template>
      <template v-slot:twitter>
        {{ unsplashImage?.user.twitter || "Unknow" }}
      </template>
      <template v-slot:color>
        {{ unsplashImage?.color || "#FFFFFF" }}
      </template>
      <template v-slot:description>
        {{ unsplashImage?.alt }}
      </template>
    </ImageDetails>
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import type { ImageAdaptedEntity } from "../adapters/presenters/randomImage.adapter";
import { useUnsplashStore } from "../stores/unsplash.store";

import ImageDetails from "./imageDetails.vue";

const unsplashStore = useUnsplashStore();

const unsplashImage = ref<ImageAdaptedEntity>();

const reactiveStyles = computed(
  () =>
    `background: url("${unsplashImage.value?.url || unsplashStore.getDefaultImage()}") no-repeat fixed; background-size: 100% 100%;`
);

onMounted(async () => {
  const data = await unsplashStore.getRandomImage();
  unsplashImage.value = data;
});
</script>
