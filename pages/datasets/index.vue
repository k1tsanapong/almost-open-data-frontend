<template>
  <div>
    <v-row class="my-16">
      <v-col cols="12">
        <v-row class="justify-center">
          <div class="text-h6">10,542 found</div>
        </v-row>

        <v-row>
          <v-col cols="2" />

          <v-col cols="12" sm="8" class="d-flex justify-center px-10">
            <v-autocomplete
              class="flex-full-width"
              rounded="lg"
              placeholder="Search...."
              :items="['foo', 'bar']"
              outlined
              variant="outlined"
              append-inner-icon="mdi-magnify"
              hide-details
            >
            </v-autocomplete>
          </v-col>
          <v-col cols="2" />
        </v-row>

        <v-row>
          <v-col class="hidden-sm-and-down" md="6"  />

          <v-col>
            <v-row>
              <v-col class="d-flex align-center justify-end" cols="6" md="6">
                <div class="text-h6">Order by</div>
              </v-col>

              <v-col class="d-flex align-center" cols="6" md="3">
                <v-select
                  variant="outlined"
                  :items="['foo', 'bar']"
                  rounded="lg"
                  placeholder="Select"
                  outlined
                  hide-details=""
                >
                </v-select>
              </v-col>
            </v-row>
          </v-col>

          <v-col class="hidden-md-and-up" cols="1" />


        </v-row>
      </v-col>

      <v-col class="mt-10" cols="12">
        <v-row
          ><v-col cols="1" />

          <v-col class="hidden-sm-and-down" cols="12" md="3">
            <v-col>
              <v-row class="mb-3" justify="center">
                <div class="text-h6 font-weight-bold">Dataset Group</div>
              </v-row>
              <v-row class="px-10 mb-3">
                <v-col
                  class="fill-height pa-5 d-flex justify-center"
                  style="border: 1px solid black"
                >
                  <div style="color: #0f7ab6">School(16)</div>
                </v-col>
              </v-row>

              <v-row class="px-10 mb-3">
                <v-col
                  class="fill-height pa-5 d-flex justify-center"
                  style="border: 1px solid black"
                >
                  <div style="color: #0f7ab6">Centre(9)</div>
                </v-col>
              </v-row>

              <v-row class="px-10 mb-3">
                <v-col class="pa-2 d-flex justify-end bg-blue">
                  <div class="text-body-2" style="color: white">Show more</div>
                </v-col>
              </v-row>
            </v-col>

            <v-col>
              <v-row class="mb-3" justify="center">
                <div class="text-h6 font-weight-bold">Specific Words</div>
              </v-row>
              <v-row class="px-10 mb-3">
                <v-col
                  class="fill-height pa-5 d-flex justify-center"
                  style="border: 1px solid black"
                >
                  <div style="color: #0f7ab6">Budget</div>
                </v-col>
              </v-row>

              <v-row class="px-10 mb-3">
                <v-col
                  class="fill-height pa-5 d-flex justify-center"
                  style="border: 1px solid black"
                >
                  <div style="color: #0f7ab6">Report</div>
                </v-col>
              </v-row>

              <v-row class="px-10 mb-3">
                <v-col class="pa-2 d-flex justify-end bg-blue">
                  <div class="text-body-2" style="color: white">Show more</div>
                </v-col>
              </v-row>
            </v-col>
          </v-col>

          <v-col class="d-flex justify-center" cols="12" md="8">
            <v-col class="pa-0" cols="11">
              
              <div v-for="dataset in datasets.data" :key="dataset.id">
                
               <dataset-preview :dataset="dataset" />

              </div>
              
                </v-col>
            <!-- <span v-for="dataset in datasets.data"> {{ dataset.attributes.title }} </span> -->
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { $datefns} = useNuxtApp()

const value = ref(new Date());

const { data: datasets } = await useMyFetch("/api/datasets?populate[dataset_tags][populate][0]=tag_id&populate[dataset_files][populate][1]=file");
const { data: tags } = await useMyFetch("/api/tags?populate=*");

// // count reason
//       const reasonCount = reason.reduce((acc, appointment) => {
//         const reason = appointment.reason;
//         acc[reason] = (acc[reason] || 0) + 1;
//         return acc;
//       }, {});

//       // reason name
//       this.reasonName = Object.keys(reasonCount);

//       // reason count
//       this.reasonCount = Object.values(reasonCount);


onMounted(() => {

console.log(datasets.value.data[0].attributes.updatedAt);

  console.log('Parsed Date:', $datefns.parseISO(datasets.value.data[0].attributes.updatedAt));
});

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
