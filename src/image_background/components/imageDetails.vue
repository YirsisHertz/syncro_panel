<script lang="ts" setup>
const props = defineProps({
  color: {
    default: "#FFFFFF"
  }
});
</script>

<template>
  <div
    class="image-details fixed bottom-3 left-3 px-10 py-2 rounded opacity-80 hover:opacity-100 hover:cursor-pointer transition ease-in-out delay-75"
    :style="`background-color: ${props.color};`"
  >
    <div class="flex">
      <div class="px-2">
        <h2>
          Author:
          <span class="font-bold">
            <slot name="username"></slot>
          </span>
        </h2>
        <h2>
          Instagram:
          <span class="font-bold">
            <slot name="instagram"></slot>
          </span>
        </h2>
        <h2>
          X:
          <span class="font-bold">
            <slot name="twitter"></slot>
          </span>
        </h2>
      </div>
      <div class="px-2">
        <h2>
          Color:
          <span class="font-bold">
            <slot name="color"></slot>
          </span>
        </h2>
      </div>
    </div>

    <p>
      <slot name="description"></slot>
    </p>
  </div>
</template>

<style scoped>
.image-details {
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
