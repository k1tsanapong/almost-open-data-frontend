<template>
  <div>
    <v-app>
      <v-main>
        <slot />
      </v-main>

      <v-footer class="bg-primary mt-10">
        <v-row class="ma-0">
          <v-col class="hidden-sm-and-down" md="2" />

          <v-col class="py-16" cols="12" md="4">
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
