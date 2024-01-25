<template>
  <div>
    <v-row class="mt-10">
      <v-col cols="1" />

      <v-col> </v-col>
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
