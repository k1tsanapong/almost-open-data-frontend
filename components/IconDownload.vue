<template>
  <v-img
    class="mr-5 cursor-pointer	"
    max-width="50px"
    :src="`/icon/${file_name}.png`"
    :alt="file_data.attributes.file.data.attributes.name"
    @click="download"
  />
</template>

<script setup>
import { defineProps, ref, watch, computed } from "vue";
const config = useRuntimeConfig();

const { $datefns } = useNuxtApp();

// implement prop setup
const props = defineProps({
  file_data: {
    type: Object,
    required: true,
  },
});

const file_name = computed(() => {
  const full_ext = props.file_data.attributes.file.data.attributes.ext;
  //   remove dot
  const ext = full_ext.substring(1);
  return ext;
});

// click for download
const download = () => {
  const file_url = config.public.baseURL+props.file_data.attributes.file.data.attributes.url;

  window.open(file_url, "_blank");
};
</script>

<style></style>
