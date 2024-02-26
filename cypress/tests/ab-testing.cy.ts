import { ABTestPage } from '../support/page-objects/ab-testing.po';

describe('A/B Testing Page Functionality', () => {
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
