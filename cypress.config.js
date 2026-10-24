const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportPageTitle: 'Relatório de testes - Automation Exercise',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    baseUrl: 'https://automationexercise.com',
    watchForFileChanges: false,
    // Bloqueia os anúncios do site, que abrem pop-ups e deixam os testes instáveis
    blockHosts: [
      '*googlesyndication.com',
      '*doubleclick.net',
      '*googleadservices.com',
      '*googletagservices.com',
      '*adservice.google.com',
    ],
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
