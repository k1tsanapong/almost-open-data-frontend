<template>
  <div class="fill-height pa-5 mb-5" style="border: 1px solid black">
    <v-row>
      <v-col xs="12">
        <div class="font-weight-bold" style="color: #28acf6">
          {{dataset.attributes.title}}
        </div>
      </v-col>

      <v-col class="d-flex justify-end" xs="12">
        <v-card
          class="mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
          color="#F46C4E"
          rounded="0"
          flat
          max-height="40"
        >
          Accounting
        </v-card>

        <v-card
          class="mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
          color="#F4C64E"
          rounded="0"
          flat
          max-height="40"
        >
          ERP
        </v-card>

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
      <v-col>
        <div class="font-weight-bold">Last data update: {{dataset.attributes.updatedAt }}</div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex">
        <v-img class="mr-5" max-width="50px" src="/seki.png" />

        <v-img class="mr-5" max-width="50px" src="/seki.png" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
// implement prop setup
const props = defineProps({
  dataset: {
    type: Object,
    default: 'default value',
    required: true,
  },
})

</script>

<style></style>
