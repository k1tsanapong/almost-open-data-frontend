<template>
  <div>
    <v-img src="/mfu_bg.png" cover>
      <v-row class="my-16">
        <v-col cols="2" />

        <v-col cols="12" sm="8">
          <v-row>
            <v-col>
              <div
                class="font-weight-medium text-h6"
                :class="{ 'text-center': $vuetify.display.xs }"
              >
                Request for Dataset form
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card class="fill-height pa-10" rounded="xl">
                <v-row>
                  <v-col class="px-10" cols="12" md="6">
                    <v-row class="mb-1">
                      <div class="font-weight-bold">
                        First Name<span class="text-red">*</span>
                      </div>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="firstName"
                        rounded="lg"
                        bg-color="white"
                        placeholder="Example : John"
                        flat
                        variant="outlined"
                      ></v-text-field>
                    </v-row>
                  </v-col>

                  <v-col class="px-10" cols="12" md="6">
                    <v-row class="mb-1">
                      <div class="font-weight-bold">
                        Last Name<span class="text-red">*</span>
                      </div>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="lastName"
                        rounded="lg"
                        bg-color="white"
                        placeholder="Example : Doe"
                        flat
                        variant="outlined"
                      ></v-text-field>
                    </v-row>
                  </v-col>

                  <v-col class="px-10" cols="12">
                    <v-row class="mb-1">
                      <div class="font-weight-bold">
                        Email<span class="text-red">*</span>
                      </div>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="email"
                        rounded="lg"
                        bg-color="white"
                        placeholder="Example : *@lamduan.mfu.ac.th"
                        flat
                        variant="outlined"
                      ></v-text-field>
                    </v-row>
                  </v-col>

                  <v-col class="px-10" cols="12">
                    <v-row class="mb-1">
                      <div class="font-weight-bold">
                        Name of dataset<span class="text-red">*</span>
                      </div>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="datasetName"
                        rounded="lg"
                        bg-color="white"
                        placeholder="Example: Information about students who did not complete their studies"
                        flat
                        variant="outlined"
                      ></v-text-field>
                    </v-row>
                  </v-col>

                  <v-col class="px-10" cols="12">
                    <v-row class="mb-1">
                      <div class="font-weight-bold">
                        Dataset Details<span class="text-red">*</span>
                      </div>
                    </v-row>
                    <v-row>
                      <v-textarea
                        v-model="datasetDetails"
                        rounded="lg"
                        bg-color="white"
                        placeholder="Example: Data on students who did not complete their studies within the last 5 years, categorized by faculty and major"
                        flat
                        variant="outlined"
                      ></v-textarea>
                    </v-row>
                  </v-col>

                  <v-col class="px-10" cols="12">
                    <v-row class="mb-1">
                      <div class="font-weight-bold">
                        Data Owner<span class="text-red">*</span>
                      </div>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="dataOwner"
                        rounded="lg"
                        bg-color="white"
                        placeholder="Example: Information about students who did not complete their studies"
                        flat
                        variant="outlined"
                      ></v-text-field>
                    </v-row>
                  </v-col>

                  <v-col class="px-10" cols="12">
                    <v-row class="mb-1">
                      <div class="font-weight-bold">
                        Purpose of Use<span class="text-red">*</span>
                      </div>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="purposeOfUse"
                        rounded="lg"
                        bg-color="white"
                        placeholder="Example: For research purposes, for BI (Business Intelligence)"
                        flat
                        variant="outlined"
                      ></v-text-field>
                    </v-row>
                  </v-col>

                  <v-col class="px-10" cols="12">
                    <v-row class="mb-1">
                      <div class="font-weight-bold">
                        Dataset Group<span class="text-red">*</span>
                      </div>
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="datasetGroup"
                        rounded="lg"
                        bg-color="white"
                        placeholder="Example: For research purposes, for BI (Business Intelligence)"
                        flat
                        variant="outlined"
                      ></v-text-field>
                    </v-row>
                  </v-col>
                </v-row>

                <v-row justify="center">
                  <div class="text-h5">*Please fill in all the information</div>
                </v-row>

                <v-row class="mt-10" justify="space-between">
                  <v-col cols="1" />

                  <v-col class="d-flex justify-center">
                    <v-btn
                      class="mr-5"
                      prepend-icon="mdi-close"
                      rounded="lg"
                      color="orange"
                      width="200"
                      height="50"
                    >
                      <div class="text-h6 font-weight-bold">Cancel</div>
                    </v-btn>

                    <v-btn
                      prepend-icon="mdi-send"
                      rounded="lg"
                      color="blue"
                      width="200"
                      height="50"
                    >
                      <div @click="submitForm" class="text-h6 font-weight-bold">
                        Submit
                      </div>
                    </v-btn>
                  </v-col>

                  <v-col cols="1" />
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" />
      </v-row>
    </v-img>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const { $swal } = useNuxtApp();
import { reloadNuxtApp } from "nuxt/app";

const firstName = ref("");
const lastName = ref("");
const email = ref("");
const datasetName = ref("");
const datasetDetails = ref("");
const dataOwner = ref("");
const purposeOfUse = ref("");
const datasetGroup = ref("");

// const { post, response } = useMyFetch();

const submitForm = async () => {
  const formData = {
    requester_first_name: firstName.value,
    requester_last_name: lastName.value,
    // email: email.value,
    dataset_name: datasetName.value,
    dataset_details: datasetDetails.value,
    data_owner: dataOwner.value,
    purpose_of_use: purposeOfUse.value,
    dataset_group: datasetGroup.value,
  };

  console.log(formData);

  try {
    const { data } = await useMyFetch("/api/request-datasets", {
      method: "post",
      body: {
        data: formData,
      },
    });

    $swal.fire({
      title: "Submitted",
      text: "Form submitted successfully",
      icon: "success",
      didClose: () =>
        reloadNuxtApp({
          path: "/data-request",
          ttl: 1000, // default 10000
        }),
    });

    console.log("Form submitted successfully:", data);
    console.log(data);
  } catch (error) {
    $swal.fire({
      title: "Error!",
      icon: "error",
      didClose: () =>
        reloadNuxtApp({
          path: "/data-request",
          ttl: 1000, // default 10000
        }),
    });
    console.error("Error during form submission:", error);
  }
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
