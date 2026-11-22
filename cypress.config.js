const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://diogomasc.github.io/e-commerce-e2e-testing-lab",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
