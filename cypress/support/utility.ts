export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Wrap a new array with length of the parameter num. Useful for looping actions
       * @example cy.loop(10).each(() => { ... })
       */
      loop(times: number): Chainable<any[]>;
    }
  }
}

Cypress.Commands.add('loop', (times: number) => {
  cy.wrap(new Array(times));
});
