export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Wrap a new array with length of the parameter num. Useful for looping actions
       * @example cy.loop(10).each(() => { ... })
       */
      loop(times: number): Chainable<any[]>;

      regexFormat(text: string): Chainable<string>;

      assertFileDownload(
        fileName: string,
        retries?: number
      ): Chainable<boolean>;
    }
  }
}

Cypress.Commands.add('loop', (times: number) => {
  cy.wrap(new Array(times));
});

Cypress.Commands.add('regexFormat', (text: string) => {
  return cy.wrap(text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
});

Cypress.Commands.add(
  'assertFileDownload',
  (fileName: string, retries: number = 15) => {
    cy.task(
      'checkFileExists',
      `${Cypress.config().downloadsFolder}/${fileName}`
    ).then((exists) => {
      if (exists) {
        return true;
      } else if (!retries) {
        throw Error('File was never downloaded');
      } else {
        return cy.wait(1000).assertFileDownload(fileName, retries - 1);
      }
    });
  }
);
