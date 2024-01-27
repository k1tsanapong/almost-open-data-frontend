<template>
  <div>
    <v-row class="my-16">
      <v-col cols="12">
        <v-row class="justify-center">
          <div class="text-h6">10,542 found</div>
        </v-row>

        <v-row>
          <v-col cols="2" />

          <v-col cols="12" sm="8" class="d-flex justify-center">
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
          <v-spacer />

          <v-col class="d-flex justify-end">
            <v-row>
              <v-col class="d-flex align-center justify-end" cols="6">
                <div class="text-h6">Order by</div>
              </v-col>

              <v-col class="d-flex align-center" cols="3">
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
        </v-row>
      </v-col>

      <v-col class="mt-10" cols="12">
        <v-row
          ><v-col cols="1" />

          <v-col cols="12" md="3">
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
                  <div class="text-body-2" style="color: white">
                    Show more
                  </div>
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
                  <div class="text-body-2" style="color: white">
                    Show more
                  </div>
                </v-col>
              </v-row>

            </v-col>
          </v-col>

          <v-col cols="12" md="8">
            <v-col class="pa-0" cols="11">
              <div class="fill-height pa-5" style="border: 1px solid black">
                <v-row>
                  <v-col xs="12">
                    <div class="font-weight-bold" style="color: #28acf6">
                      Employee information in the Accounting department 2022
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
                    <div class="font-weight-bold">
                      Employee info in the Accounting
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <div class="font-weight-bold">
                      Last data update: October 24, 2022
                    </div>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="d-flex">
                    <v-img class="mr-5" max-width="50px" src="/seki.png" />

                    <v-img class="mr-5" max-width="50px" src="/seki.png" />
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-col>
        </v-row>
      </v-col>
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
