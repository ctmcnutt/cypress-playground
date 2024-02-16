import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com/',
    specPattern: 'cypress/tests/*.cy.ts'
  }
});
