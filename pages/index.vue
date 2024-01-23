<template>
  <v-container fluid class="pa-0">
    <v-row class="fill-height mt-2" no-gutters align="center">
      <v-col cols="1">
        <v-img
          class="d-flex justify-end"
          src="/mfu_logo.png"
          max-height="5rem"
        />
      </v-col>

      <v-col cols="3">
        <div class="text-h3">MFU Open Data</div>
      </v-col>

      <v-spacer />

      <v-col cols="1"> TH | EN </v-col>

      <v-col cols="1"> Developer </v-col>

      <V-col cols="1"> Staff </V-col>
    </v-row>

    <v-row
      class="bg-red fill-height mt-5"
      no-gutters
      align="center"
      justify="center"
    >
      <v-col v-ripple cols="1">
        <v-card class="text-center my-3" flat color="transparent">
          <v-icon size="48">mdi-home-outline</v-icon>
          <div>Home</div>
        </v-card>
      </v-col>

      <v-col v-ripple cols="1">
        <v-card class="text-center my-3" flat color="transparent">
          <v-icon size="48">mdi-folder-open-outline</v-icon>
          <div>Datasets</div>
        </v-card>
      </v-col>

      <v-col v-ripple cols="1">
        <v-card class="text-center my-3" flat color="transparent">
          <v-icon size="48"> mdi-folder-cog-outline</v-icon>
          <div>Data Inventory</div>
        </v-card>
      </v-col>

      <v-col v-ripple cols="1">
        <v-card class="text-center my-3" flat color="transparent">
          <v-icon size="48">mdi-folder-file-outline</v-icon>
          <div>Data Request</div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="ma-0">
      <v-img src="/mfu_bg.png" cover max-height="50rem">
        <v-row no-gutters align="center" justify="center" class="fill-height">
          <v-col cols="12" md="6" lg="5" sm="6">
            <v-text-field
              rounded="lg"
              bg-color="white"
              label="Search Datasets"
              variant="solo"
            ></v-text-field>

            <div class="mt-5 d-flex justify-center"></div>

            <div class="mt-5 d-flex justify-center"></div>
          </v-col>
        </v-row>
      </v-img>
    </v-row>

    <v-row class="fill-height mt-2" no-gutters align="center">

    <!--    Horizontal divider with text in the middle?-->

    <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
  <span style="font-size: 40px; background-color: #F3F5F6; padding: 0 10px;">
    Section Title <!--Padding is optional-->
  </span>
</div>

    </v-row>

  </v-container>
</template>

<script setup></script>

<style>
</style>
