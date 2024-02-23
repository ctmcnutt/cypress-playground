import { ABTestPage } from '../support/page-objects/ab-testing.po';
import { HomePage } from '../support/page-objects/home.po';

describe('A/B Testing Page', () => {
  describe('Navigation', () => {
    it('Should be linked correctly from home page', () => {
      // Visit home page and click the correct link
      HomePage.visit();
      cy.get('a').contains(ABTestPage.HOME_LINK_TEXT).click();

      // Assert correct page loads
      cy.url().should('contain', ABTestPage.PAGE_URL);
    });
  });

  describe('Functionality', () => {
    it('Should successfully display page contents', () => {
      // Directly navigate to a/b testing page
      ABTestPage.visit();

      // Assert header contains correct text and is visible
      ABTestPage.getHeader()
        .should('contain.text', ABTestPage.HEADER_TEXT)
        .and('be.visible');

      // Assert body contains correct text and is visible
      ABTestPage.getBody()
        .should('contain.text', ABTestPage.BODY_TEXT)
        .and('be.visible');
    });
  });
});
