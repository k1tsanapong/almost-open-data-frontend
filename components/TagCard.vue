<template>
  <v-card
    class="mr-5 pa-5 text-white text-center fill-height d-flex align-center justify-center"
    :color="tag.attributes.tag_id.data.attributes.hex_color"
    rounded="0"
    flat
    max-height="40"
  >
    {{tag.attributes.tag_id.data.attributes.title}}
  </v-card>
</template>

<script setup>
const props = defineProps({
  tag: {
    type: Object,
    required: true,
  },
});</script>

<style></style>
