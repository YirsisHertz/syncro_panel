<template>
  <div>
    Server Status:
    <span :class="status ? 'text-green-600' : 'text-red-700'">{{
      status ? "Live" : "Dead"
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { environment } from "../environments/environments";
const status = ref(false);

const verifyServerStatus = async () => {
  try {
    const res = await fetch(`${environment.webcard_base_url}/healt`);

    if (res.ok && res.status === 200) status.value = true;
    else status.value = false;
  } catch (error) {
    status.value = false;
  }
};

onMounted(() => {
  verifyServerStatus();

  setInterval(() => {
    verifyServerStatus();
  }, 216000);
});
</script>
