import { computed, onMounted } from 'vue';
<template>
  <div class="clock font-extrabold text-center">
    <h1 class="px-10 relative top-10 py-5 rounded-md">
      <span class="text-3xl">
        {{ time }}
        <br />
        {{ getDate() }}
      </span>

      <ServerStatus />
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ServerStatus from "../../components/ServerStatus.vue";

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
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

h1 {
  background-color: rgba(255, 250, 250, 0.8);
}
</style>
