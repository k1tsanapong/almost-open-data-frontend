<template>
  <div>
    <v-row class="my-16">
      <v-col cols="1" />

      <v-col cols="10">
        <v-row class="d-flex">
          <v-col class="pa-0 d-flex" cols="12" md="6" v-for="dataset in datasets.data" :key="dataset.id">
            <v-col class="d-flex justify-center" cols="1">
              <!-- create a checkbox -->
              <input type="checkbox" id="checkbox" v-model="checked" />
            </v-col>

            <v-col cols="11">
               <dataset-preview-2 :dataset="dataset" />              
            </v-col>
          </v-col>
        </v-row>

        <v-row class="mt-10" justify="space-between">
          <v-col cols="1" />

          <v-col class="d-flex justify-center">
            <v-btn class="mr-5" rounded="lg" color="orange">
              <div>Clear All</div>
            </v-btn>

            <v-btn class="mr-5" rounded="lg" color="orange">
              <div >Clear</div>
            </v-btn>

            <v-btn class="mr-5" rounded="lg" color="green">
              <div >Download All</div>
            </v-btn>

            <v-btn class="mr-5" rounded="lg" color="green">
              <div >Download</div>
            </v-btn>
          </v-col>

          <v-col cols="1" />
        </v-row>
      </v-col>

      <v-col cols="1" />
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { data: datasets } = await useMyFetch("/api/datasets?populate[dataset_tags][populate][0]=tag_id&populate[dataset_files][populate][1]=file");

const value = ref(new Date());
</script>

<style scoped>
.custom-card {
  background: linear-gradient(
    to bottom,
    rgb(var(--v-theme-primary)) 80%,
    rgb(var(--v-theme-secondary)) 100%
  );
}

.sometest {
  color: red;
}
</style>
