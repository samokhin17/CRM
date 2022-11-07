const { defineConfig } = require('cypress')
// npx cypress run --reporter cypress-multi-reporters --spec .\cypress\e2e\CRM\Sidebar_tabs\lists - запуск теста с репортером
// npx mochawesome-merge .\cypress\reports\mocha\*.json | out-file -encoding ascii .\cypress\reports\merged.json - мерж всех json в 1 общий
// npx marge ./cypress/reports/merged.json --reportir ./ --inline - генерация html из общего json
module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: 'true',
      overwrite: 'false',
      html: 'false',
      json: 'true',
    }
  },
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
