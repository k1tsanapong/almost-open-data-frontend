<template>
  <div>
    <v-row class="my-10">
      <v-col cols="1" />

      <v-col>
        <v-row>
          <div class="text-h5" style="color: #070747">
            {{ dataset.data.attributes.title }}
          </div>
        </v-row>

        <v-row class="mt-8">
          <tag-card
            class="mt-3"
            v-for="tag in dataset.data.attributes.dataset_tags.data"
            :key="tag.id"
            :tag="tag"
          />

          <v-card
            class="mt-3 mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
            color="primary"
            max-height="40"
          >
            Add
          </v-card>
        </v-row>

        <v-row class="mt-16">
          <v-col class="pa-0" cols="12" sm="7">
            <div class="fill-height pa-5" style="border: 1px solid black">
              <v-row class="px-10 pt-2">
                <v-col cols="12" sm="4" md="3" class="py-0">
                  <div class="font-weight-bold">Name :</div>
                </v-col>

                <v-col cols="12" sm="7" md="9" class="py-0 pl-10">
                  <div>
                    {{ dataset.data.attributes.title }}
                  </div>
                </v-col>

                <v-col cols="12" class="pa-0 pt-2">
                  <v-divider
                    color="#D9D9D9"
                    thickness="2"
                    class="border-opacity-100"
                  />
                </v-col>
              </v-row>

              <v-row class="px-10 pt-2">
                <v-col cols="12" sm="4" md="3" class="py-0">
                  <div class="font-weight-bold">Resource ID :</div>
                </v-col>

                <v-col cols="12" sm="7" md="9" class="py-0 pl-10">
                  <div>4gdtd37fyf44646</div>
                </v-col>

                <v-col cols="12" class="pa-0 pt-2">
                  <v-divider
                    color="#D9D9D9"
                    thickness="2"
                    class="border-opacity-100"
                  />
                </v-col>
              </v-row>

              <v-row class="px-10 pt-2">
                <v-col cols="12" sm="4" md="3" class="py-0">
                  <div class="font-weight-bold">Data Format :</div>
                </v-col>

                <v-col cols="12" sm="7" md="9" class="py-0 pl-10">
                  <div>CSV , XSLX</div>
                </v-col>

                <v-col cols="12" class="pa-0 pt-2">
                  <v-divider
                    color="#D9D9D9"
                    thickness="2"
                    class="border-opacity-100"
                  />
                </v-col>
              </v-row>

              <v-row class="px-10 pt-2">
                <v-col cols="12" sm="4" md="3" class="py-0">
                  <div class="font-weight-bold">Detailed Information :</div>
                </v-col>

                <v-col cols="12" sm="7" md="9" class="py-0 pl-10">
                  <div>
                    {{ dataset.data.attributes.detailed_information }}
                  </div>
                </v-col>

                <v-col cols="12" class="pa-0 pt-2">
                  <v-divider
                    color="#D9D9D9"
                    thickness="2"
                    class="border-opacity-100"
                  />
                </v-col> </v-row
              ><v-row class="px-10 pt-2">
                <v-col cols="12" sm="4" md="3" class="py-0">
                  <div class="font-weight-bold">Conditions Accessing :</div>
                </v-col>

                <v-col cols="12" sm="7" md="9" class="py-0 pl-10">
                  <div>None</div>
                </v-col>

                <v-col cols="12" class="pa-0 pt-2">
                  <v-divider
                    color="#D9D9D9"
                    thickness="2"
                    class="border-opacity-100"
                  />
                </v-col> </v-row
              ><v-row class="px-10 pt-2">
                <v-col cols="12" sm="4" md="3" class="py-0">
                  <div class="font-weight-bold">Start Date :</div>
                </v-col>

                <v-col cols="12" sm="7" md="9" class="py-0 pl-10">
                  <div>{{ dataset.data.attributes.createdAt }}</div>
                </v-col>

                <v-col cols="12" class="pa-0 pt-2">
                  <v-divider
                    color="#D9D9D9"
                    thickness="2"
                    class="border-opacity-100"
                  />
                </v-col>
              </v-row>

              <v-row class="px-10 pt-2">
                <v-col cols="12" sm="4" md="3" class="py-0">
                  <div class="font-weight-bold">Date of Dataset Update :</div>
                </v-col>

                <v-col cols="12" sm="7" md="9" class="py-0 pl-10">
                  <div>{{ dataset.data.attributes.updatedAt }}</div>
                </v-col>

                <v-col cols="12" class="pa-0 pt-2">
                  <v-divider
                    color="#D9D9D9"
                    thickness="2"
                    class="border-opacity-100"
                  />
                </v-col>
              </v-row>
            </div>
          </v-col>

          <v-col cols="12" sm="5">
            <v-row
              class="mb-5"
              v-for="file_data in dataset.data.attributes.dataset_files.data"
              :key="file_data.id"
              :file_data="file_data"
            >
              <v-col
                cols="12"
                md="4"
                class="pa-0"
                :class="{
                  'mt-3 pl-0': $vuetify.display.xs,
                  'mt-0 pl-3': $vuetify.display.smAndUp,
                }"
              >
                <div class="fill-height pa-3" style="border: 1px solid black">
                  <v-row justify="center">
                    <v-img
                         max-width="150px"
                      max-height="70px"
                      class="mx-3 mt-3"
                      :src="`/icon/${file_ext(file_data.attributes.file.data.attributes.ext)}.png`"
                    />
                  </v-row>

                  <v-row justify="center">
                    <div @click="download(file_data.attributes.file.data.attributes.url)" class="text-h6 font-weight-bold text-center">
                      Download
                    </div>
                  </v-row>
                </div>
              </v-col>
              <v-col
                cols="12"
                md="8"
                class="pa-0"
                :class="{
                  'mt-3 pl-0': $vuetify.display.xs,
                  'mt-3 pl-3': $vuetify.display.sm,
                  'mt-0 pl-3': $vuetify.display.mdAndUp,
                }"
              >
                <div class="fill-height pa-3" style="border: 1px solid black">
                  <div style="color: #070747">
                    {{file_data.attributes.file.data.attributes.name}}
                  </div>
                  <div
                    class="font-weight-bold pl-3"
                    style="color: rgb(var(--v-theme-secondary))"
                    @click="download(file_data.attributes.file.data.attributes.url)"
                  >
                    Download
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="mt-10">
          <div class="text-h6">Related Information</div>
        </v-row>

        <!-- <v-row class="mt-10">
          <v-col class="pa-0" cols="12">
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
        </v-row> -->
      </v-col>

      <v-col cols="1" />
    </v-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
const config = useRuntimeConfig();

const { $datefns } = useNuxtApp();
const route = useRoute();

const value = ref(new Date());

const { data: dataset } = await useMyFetch(
  `/api/datasets/${route.params.id}?populate[dataset_tags][populate][0]=tag_id&populate[dataset_files][populate][1]=file`
);

console.log(dataset.value.data.attributes.dataset_tags.data);

// methods
const formatDate = (date) => {
  return $datefns.format($datefns.parseISO(date), "MMMM dd',' yyyy");
};

const file_ext = (file_surname) => {
  const ext = file_surname.substring(1);
  return ext;
};

// click for download
const download = (url) => {
  console.log(url);
  const file_url = config.public.baseURL+url;

  window.open(file_url, "_blank");
};

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
