import { fileURLToPath } from "node:url";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  alias: {
    "v-datepicker": fileURLToPath(new URL("../src/index.ts", import.meta.url)),
  },

  vite: {
    server: {
      fs: {
        // Allow Vite to serve files from the root project directory
        allow: [".."],
      },
    },
  },
});
