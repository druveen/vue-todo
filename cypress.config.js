import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    specPattern: "src/pages/**/e2e/**/*.e2e.js",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
