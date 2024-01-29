<template>
  <div class="fill-height pa-5 mb-5" style="border: 1px solid black">
    <v-row>
      <v-col cols="12">
        <nuxt-link :to="`/datasets/${dataset.id}`" class="text-decoration-none">
          <div class="text-h6 link-to" style="color: #28acf6">
            {{ dataset.attributes.title }}
          </div>
        </nuxt-link>
      </v-col>

      <v-col class="d-flex justify-end" cols="12">
        <tag-card
          v-for="tag in dataset.attributes.dataset_tags.data"
          :key="tag.id"
          :tag="tag"
        />

        <v-card
          class="mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
          color="primary"
          max-height="40"
        >
          Add
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <!-- <div class="font-weight-bold">Employee info in the Accounting</div> -->
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-end" >
        <div class="font-weight-bold">
          Last data update:
          {{
            $datefns.format(
              $datefns.parseISO(dataset.attributes.updatedAt),
              "MMMM dd',' yyyy"
            )
          }}
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-end" >
        <!-- <v-img class="mr-5" max-width="50px" src="/seki.png" /> -->

        <icon-download
          v-for="file_data in dataset.attributes.dataset_files.data"
          :key="file_data.id"
          :file_data="file_data"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { defineProps, ref, watch } from "vue";
const { $datefns } = useNuxtApp();

// implement prop setup
const props = defineProps({
  dataset: {
    type: Object,
    required: true,
  },
});

// watch props
watch(
  () => props.dataset,
  (val, oldVal) => {
    console.log("props.dataset changed", val, oldVal);
  }
);

// watch reactive
// const dataset = ref(props.dataset)
// watch(dataset, (val, oldVal) => {
//   console.log('dataset changed', val, oldVal)
// })

onMounted(() => {
  console.log("mounted");
});
</script>

<style>
.link-to:hover,
.link-to:active {
  text-decoration: underline;
}
</style>
