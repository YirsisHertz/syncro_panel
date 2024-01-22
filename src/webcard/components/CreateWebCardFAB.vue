<template>
  <button
    @click="goToCreate()"
    class="fixed text-3xl btn btn-square bottom-5 end-5"
  >
    <i class="bi bi-file-earmark-plus-fill"></i>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToCreate = () => router.push({ name: "create-webcard" });
</script>
