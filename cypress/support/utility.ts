export {};

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Asserts that the `fileName` provided exists as a file within the Cypress downloads folder.
       * Recursively runs with a default 15 second timeout. Can be altered with optional `retries` param
       * @param fileName string: Expected download file name
       * @param retries number: Wait timeout, in seconds (default 15)
       *
       * @example
       * // Download example.txt file, then...
       * cy.assertFileDownload('example.txt')
       */
      assertFileDownload(
        fileName: string,
        retries?: number
      ): Chainable<boolean>;

      /**
       * Wrap a new array with length of the parameter num. Useful for looping actions
       * @param times number: Number of times you would like to loop
       * @example
       * cy.loop(10).each(() => { ... })
       */
      loop(times: number): Chainable<any[]>;
    }
  }
}

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

Cypress.Commands.add('loop', (times: number) => {
  cy.wrap(new Array(times));
});
