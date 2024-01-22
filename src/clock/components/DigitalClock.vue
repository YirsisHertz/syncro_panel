import { computed, onMounted } from 'vue';
<template>
  <h1
    class="clock px-10 py-5 rounded-md bg-white font-extrabold text-3xl text-center"
  >
    {{ time }}
    <br />
    {{ getDate() }}
  </h1>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const time = ref("00:00:00");

const getDate = () => {
  const currentDate = new Date();

  return `${currentDate.toDateString()}`;
};

const getTime = () => {
  const currentDate = new Date();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const finalHours = hours > 12 ? hours - 12 : hours;

  return `${finalHours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
};

const init = () => {
  setInterval(() => {
    time.value = getTime();
  }, 300);
};

onMounted(() => {
  init();
});
</script>

<style scoped>
.clock {
  position: relative;
  width: fit-content;
  top: 4rem;
  left: calc((100vw / 2) - 150px);
}
</style>
