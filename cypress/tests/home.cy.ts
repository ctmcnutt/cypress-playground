import { HomePage } from '../support/page-objects/home.po';

describe('Home Page Functionality', () => {
  // Page Details defined in home page object. This test will run for all entries in page details array.
  HomePage.pageDetailsList.forEach((page: PageDetails) => {
    it(`Should assert successful navigation to ${page.linkText} page`, () => {
      // Visit home page and click the correct link
      HomePage.visit();
      cy.contains(page.linkText).click();

      // Assert correct page loads
      cy.url().should('contain', page.pageUrl);
    });
  });
});
