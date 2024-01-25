<template>
  <div>
    <v-img src="/mfu_bg.png" cover>
      <v-row class="my-16">
        <v-col cols="2" />

        <v-col>
          <v-row>
            <v-col>
              <div class="font-weight-medium text-h6">
                Request for Dataset form
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card class="fill-height">
                <v-col>
                  <v-row>
                    <div>First Name</div>
                  </v-row>
                </v-col>
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
