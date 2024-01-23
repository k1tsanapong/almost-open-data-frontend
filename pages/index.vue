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
        <v-card class="text-center py-3" flat color="transparent">
          <v-icon size="48">mdi-home-outline</v-icon>
          <div>Home</div>
        </v-card>
      </v-col>

      <v-col v-ripple cols="1">
        <v-card class="text-center py-3" flat color="transparent">
          <v-icon size="48">mdi-folder-open-outline</v-icon>
          <div>Datasets</div>
        </v-card>
      </v-col>

      <v-col v-ripple cols="1">
        <v-card class="text-center py-3" flat color="transparent">
          <v-icon size="48"> mdi-folder-cog-outline</v-icon>
          <div>Data Inventory</div>
        </v-card>
      </v-col>

      <v-col v-ripple cols="1">
        <v-card class="text-center py-3" flat color="transparent">
          <v-icon size="48">mdi-folder-file-outline</v-icon>
          <div>Data Request</div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="ma-0">
      <v-img src="/mfu_bg.png" cover max-height="30rem">
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
      <v-row align="center">
        <v-col>
          <v-divider style="opacity: 1" color="secondary " thickness="4">
          </v-divider>
        </v-col>

        <v-col cols="1">
          <div class="text-center text-h5">Group</div>
        </v-col>

        <v-col>
          <v-divider style="opacity: 1" color="secondary " thickness="4">
          </v-divider>
        </v-col>
      </v-row>
    </v-row>

    <v-row>

  


      <v-col class="corner-row" cols="2" />

        <v-col cols="2">
          <v-card class="custom-card" color="red" dark>
            <v-card-text class="text-center">
              <div class="text-h6">School</div>
            </v-card-text>
          </v-card>
        </v-col>


        <v-col cols="1" />


        <v-col cols="2">
          <v-card class="custom-card" color="red" dark>
            <v-card-text class="text-center">
              <div class="text-h6">Centre</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="1" />


        <v-col cols="2">
          <v-card class="custom-card" color="red" dark>
            <v-card-text class="text-center">
              <div class="text-h6">Institution</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="corner-row" cols="2" />

        <v-col class="corner-row" cols="2" />

<v-col cols="2">
  <v-card class="custom-card" color="red" dark>
    <v-card-text class="text-center">
      <div class="text-h6">Academic Office</div>
    </v-card-text>
  </v-card>
</v-col>


<v-col cols="1" />


<v-col cols="2">
  <v-card class="custom-card" color="red" dark>
    <v-card-text class="text-center">
      <div class="text-h6">Central Administrative Office</div>
    </v-card-text>
  </v-card>
</v-col>

<v-col cols="1" />


<v-col cols="2">
  <v-card class="custom-card" color="red" dark>
    <v-card-text class="text-center">
      <div class="text-h6">University Council Office</div>
    </v-card-text>
  </v-card>
</v-col>

<v-col class="corner-row" cols="2" />

 <v-col class="corner-row" cols="2" />

        <v-col cols="2">
          <v-card class="custom-card" color="red" dark>
            <v-card-text class="text-center">
              <div class="text-h6">Internal Audit

</div>
            </v-card-text>
          </v-card>
        </v-col>


        <v-col cols="1" />


        <v-col cols="2">
          <v-card class="custom-card" color="red" dark>
            <v-card-text class="text-center">
              <div class="text-h6">Property and Asset Management Office</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="1" />


        <v-col cols="2">
          <v-card class="custom-card" color="red" dark>
            <v-card-text class="text-center">
              <div class="text-h6">Special Unit</div>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col class="corner-row" cols="2" />
        


  



    </v-row>
  </v-container>
</template>

<script setup></script>

<style scoped>
.custom-card {
  background: linear-gradient(
    to bottom,
    rgb(var(--v-theme-primary)) 80%,
    rgb(var(--v-theme-secondary)) 100%
  );
}
</style>
