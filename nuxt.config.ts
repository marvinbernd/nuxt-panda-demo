import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  alias: {
    "styled-system": resolve("./styled-system"),
  },

  css: ["@/assets/css/global.css"],

  postcss: {
    plugins: {
      "@pandacss/dev/postcss": {},
    },
  },

  modules: [
    "@nuxtjs/prismic",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "@nuxt/fonts",
  ],

  fonts: {
    families: [
      { name: "Roboto", provider: "google", weights: ["400", "600"] },
      { name: "Roboto Serif", provider: "google", weights: ["400", "500"] },
    ],
  },

  prismic: {
    endpoint: apiEndpoint || repositoryName,
  },
});
