// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "http://localhost:1337",
    },
  },

  router: {
    options: {
      linkActiveClass: "custom-active-link",
      linkExactActiveClass: "custom-exact-active-link",
    },
  },

  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: "assets/settings.scss",
            },
          })
        );
      });
    },
    //...

    "@nuxtjs/google-fonts",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  googleFonts: {
    // Options
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    download: false,
    useStylesheet: true,
  },
});
