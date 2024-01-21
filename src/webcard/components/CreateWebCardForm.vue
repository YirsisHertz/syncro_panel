<template>
  <div class="flex justify-center h-screen items-center">
    <div class="card w-4/5 bg-white text-black">
      <!-- <div class="flex flex-wrap"> -->
      <div class="flex flex-wrap items-center justify-center">
        <div class="card-body w-1/3 flex">
          <h2 class="card-title font-extrabold">Preview</h2>
          <hr />

          <div class="flex justify-around items-center">
            <WebCard class="w-1/3" :webcard="{ ...webcardForm, id: '123' }" />

            <label class="form-control font-extrabold">
              <div class="label">
                <span class="label-text"> Select First Gradient Color </span>
              </div>
              <input
                type="color"
                placeholder="http://localhost:8080"
                class="w-full h-20"
                v-model="webcardForm.colors.primary"
              />
            </label>

            <label class="form-control font-extrabold">
              <div class="label">
                <span class="label-text"> Select Second Gradient Color </span>
              </div>
              <input
                type="color"
                class="w-full h-20"
                v-model="webcardForm.colors.secondary"
              />
            </label>
          </div>
        </div>

        <!-- </div> -->
        <div class="card-body">
          <h2 class="card-title font-extrabold">Add Aplication</h2>
          <form @submit.prevent="createWebCard()">
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5 text-black font-extrabold"
            >
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">What is the aplication name?</span>
                </div>
                <input
                  type="text"
                  placeholder="Dozzle"
                  class="input input-bordered w-full"
                  v-model="webcardForm.name"
                />
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">What is the aplication URL?</span>
                </div>
                <input
                  type="text"
                  placeholder="http://localhost:8080"
                  class="input input-bordered w-full"
                  v-model="webcardForm.url"
                />
              </label>
              <label class="form-control w-full">
                <div class="label">
                  <span class="label-text">
                    What is the aplication Image URL?
                  </span>
                </div>

                <div
                  v-if="webcardForm.imageUrl"
                  class="avatar w-20 mx-auto py-5"
                >
                  <img :src="webcardForm.imageUrl" />
                </div>

                <input
                  type="text"
                  placeholder="https://cdn.svgporn.com/logos/vue.svg"
                  class="input input-bordered w-full"
                  v-model="webcardForm.imageUrl"
                />
              </label>
            </div>

            <button
              class="btn bg-lime-600 hover:bg-lime-500 active:bg-lime-700 text-white font-extrabold w-full"
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { createWebCardDatasourceAdapter } from "../adapters/datasources/createWebCardDatasource.adapter";
import { useWebCardStore } from "../stores/webcard.store";
import WebCard from "./WebCard.vue";

const webcardStore = useWebCardStore();
const router = useRouter();

const webcardForm = reactive({
  imageUrl: "",
  name: "",
  url: "",
  colors: {
    primary: "#878908",
    secondary: "#176729"
  },
  loading: false
});

const createWebCard = async () => {
  try {
    webcardForm.loading = true;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { loading, ...form } = webcardForm;

    Swal.showLoading();

    const datasource = createWebCardDatasourceAdapter(form);

    await webcardStore.createWebCards(datasource);

    await Swal.fire("Success", "Web Card Created", "success");

    router.replace("/");
  } catch (error) {
    Swal.fire("Error", "Error creating", "error");
  } finally {
    Swal.hideLoading();
  }
};
</script>
