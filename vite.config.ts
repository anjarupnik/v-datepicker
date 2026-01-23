import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "tsconfig.json",
      staticImport: true,
      rollupTypes: false,
    }),
  ],
  resolve: {
    alias: {
      "@rupe/v-datepicker": resolve(__dirname, "src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "v-datepicker",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue", "@floating-ui/vue", "@internationalized/date", "@vueuse/core", "@vueuse/shared", "defu", "ohash"],
      output: [
        {
          format: 'es',
          exports: 'named',
          preserveModules: false,
          entryFileNames: '[name].mjs',
          globals: { vue: 'Vue' },
        },
        {
          format: 'cjs',
          exports: 'named',
          preserveModules: false,
          entryFileNames: '[name].cjs',
          globals: { vue: 'Vue' },
        },
      ],
    },
    sourcemap: true,
    minify: false,
  },
});


