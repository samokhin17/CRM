const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  viewportWidth: 1920,
  viewportHeight: 1080,
  numTestsKeptInMemory: 10000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://beta.crm.trueconf.com',
    specPattern: 'cypress/e2e/**/**/*.{js,jsx,ts,tsx}',
  },
})
