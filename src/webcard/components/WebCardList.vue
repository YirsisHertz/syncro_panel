<template>
  <div
    v-if="webcards.length <= 0"
    class="flex justify-center items-center h-screen"
  >
    <LoaderSkeleton />
  </div>

  <div v-else class="list">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10">
      <WebCard
        v-for="webcard in webcards"
        :key="webcard.id"
        :webcard="webcard"
      />
    </div>
  </div>

  <div>
    <CreateWebCardFAB />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import LoaderSkeleton from "../../components/LoaderSkeleton.vue";
import type { WebCardEntity } from "../domain";
import { useWebCardStore } from "../stores/webcard.store";
import CreateWebCardFAB from "./CreateWebCardFAB.vue";
import WebCard from "./WebCard.vue";

const webcardStore = useWebCardStore();

const webcards = ref<WebCardEntity[]>([]);

onMounted(async () => {
  const data = await webcardStore.getAllWebCards();

  webcards.value = data;
});
</script>

<style scoped>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100%;
}
</style>
