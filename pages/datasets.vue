<template>
  <div>
    <v-row class="mt-10">
      <v-col cols="1" />

      <v-col>
        <v-row>
          <div class="text-h5" style="color: #070747">
            Budgetary Information for Revenue and Expenditure in the Procurement
            Department 2565
          </div>
        </v-row>

        <v-row class="mt-8">
          <v-card
            class="mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
            color="#4EA5F4"
            rounded="0"
            flat
            max-height="40"
          >
            Procurement
          </v-card>

          <v-card
            class="mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
            color="#F4C64E"
            rounded="0"
            flat
            max-height="40"
          >
            Budget 2022
          </v-card>

          <v-card
            class="mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
            color="transparent"
            rounded="0"
            flat
            max-height="40"
          >
            <div style="color: rgb(var(--v-theme-secondary))">
              <v-icon size="x-large"> mdi-chart-line </v-icon>
              3424
            </div>
          </v-card>

          <v-card
            class="mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
            color="primary"
            max-height="40"
          >
            Add
          </v-card>
        </v-row>

        <v-row class="mt-16">
          <v-col cols="8" style="border: 1px solid black"> </v-col>

          <v-col cols="4" class="pl-5">
            <v-row>
              <v-col cols="4" style="border: 1px solid black">
                <v-row>
                  <v-img class="mx-3 mt-3" src="/seki.png" />
                </v-row>

                <v-row>
                  <v-col cols="12" class="text-center">
                    <div class="text-h6 font-weight-bold">Download</div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="7" class="ml-2" style="border: 1px solid black">
                <div style="color: #070747">
                  Budgetary Information for Revenue and Expenditure in the
                  Procurement Department 2565
                </div>
                <div
                  class="font-weight-bold pl-3"
                  style="color: rgb(var(--v-theme-secondary))"
                >
                  Download
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="1" />
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
