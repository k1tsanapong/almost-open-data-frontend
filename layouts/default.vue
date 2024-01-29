<template>
  <div>
    <v-app>
      <v-row class="mt-2" no-gutters align="center" style="max-height: 80px">
        <v-col cols="2" md="1">
          <v-img
            class="d-flex justify-end"
            src="/mfu_logo.png"
            max-height="5rem"
          />
        </v-col>

        <v-col cols="4" md="3">
          <div class="text-md-h5 text-lg-h4 font-weight-bold">
            MFU Open Data
          </div>
        </v-col>

        <v-spacer />

        <v-col cols="2" md="1">
          <v-row>
            <v-icon> mdi-xml </v-icon>

            Developer
          </v-row>
        </v-col>

        <v-col class="hidden-lg-and-up" cols="1"> </v-col>

        <V-col cols="2" md="1">
          <v-row>
            <v-icon> mdi-exit-to-app </v-icon>
            Staff
          </v-row>
        </V-col>
      </v-row>

      <v-row
        class="bg-red mt-5"
        no-gutters
        align="center"
        justify="center"
        style="max-height: 80px"
      >
        <v-col v-ripple class="cursor-pointer" md="2">
          <nuxt-link to="/" class="text-decoration-none">
            <v-card
              class="text-center py-3"
              flat
              :class="{
                active: isRouteActive('/'),
                inactive: !isRouteActive('/'),
              }"
            >
              <v-icon size="40">mdi-home-outline</v-icon>
              <div>Home</div>
            </v-card>
          </nuxt-link>
        </v-col>

        <v-col v-ripple class="cursor-pointer" md="2">
          <nuxt-link to="/datasets" class="text-decoration-none">
            <v-card
              class="text-center py-3 not-active"
              flat
              :class="{
                active: isRouteActive('/datasets'),
                inactive: !isRouteActive('/datasets'),
              }"
            >
              <v-icon size="40">mdi-folder-open-outline</v-icon>
              <div>Datasets</div>
            </v-card>
          </nuxt-link>
        </v-col>

        <!-- <v-col v-ripple class="cursor-pointer" md="2">
          <nuxt-link to="/data-inventory" class="text-decoration-none">
            <v-card
              class="text-center py-3 not-active"
              flat
              :class="{
                active: isRouteActive('/data-inventory'),
                inactive: !isRouteActive('/data-inventory'),
              }"
            >
              <v-icon size="40">mdi-folder-cog-outline</v-icon>
              <div>Data Inventory</div>
            </v-card>
          </nuxt-link>
        </v-col> -->

        <v-col v-ripple class="cursor-pointer" md="2">
          <nuxt-link to="/data-request" class="text-decoration-none">
            <v-card
              class="text-center py-3 not-active"
              flat
              :class="{
                active: isRouteActive('/data-request'),
                inactive: !isRouteActive('/data-request'),
              }"
            >
              <v-icon size="40">mdi-folder-file-outline</v-icon>
              <div>Data Request</div>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>

      <v-main>
        <v-container fluid class="pa-0">
          <slot />
        </v-container>
      </v-main>

      <v-footer class="bg-primary" style="max-height: mt-25rem">
        <v-row class="ma-0">
          <v-col class="hidden-sm-and-down" md="2" />

          <v-col class="pt-16" cols="12" md="4">
            <v-row justify="center">
              <div style="height: 100px">
                <v-divider
                  style="opacity: 1"
                  thickness="4"
                  color="secondary"
                  vertical
                  length="80"
                />
              </div>
              <div class="pl-5">
                Information Management Unit
                <v-divider
                  style="opacity: 1"
                  thickness="2"
                  color="secondary"
                  length="215"
                />
                Mae Fah Luang University
              </div>
            </v-row>
          </v-col>

          <v-col class="px-10" cols="12" md="4">
            Contact Us
            <v-divider style="opacity: 1" thickness="2" color="secondary" />

            <p>
              Information Management Unit Mae Fah Luang University <br />
              C1 - 108 <br />
              333 Moo1, Thasud, Muang, Chiang Rai 57100 <br />
              Tel: 0 5391 7141, 0 5391 6532-33 <br />
              Email: imu@mfu.ac.th <br />
            </p>
          </v-col>

          <v-col class="hidden-sm-and-down" md="2" />
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>

<style scoped>
/* Add custom styles for router-link-active class */

.active {
  background: white;
  color: black;
  border-radius: 0%;
}

.inactive {
  background: transparent;
  color: white;
  border-radius: 0%;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    isRouteActive(link) {
      if (this.$route.path == "/" && link == "/") {
        return true;
      } else if (this.$route.path.includes(link) && link != "/") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
