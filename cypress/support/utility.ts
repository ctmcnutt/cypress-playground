export {}

declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        loop(times: number): Chainable<any[]>
      }
    }
  }

Cypress.Commands.add('loop', (times: number) => {
   cy.wrap(new Array(times));
})