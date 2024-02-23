import { BasicAuthPage } from '../support/page-objects/basic-auth.po';

describe('Basic Auth Page Functionality', () => {
  it('Should be able to access page with correct credentials', () => {
    // Visit page with correct authentication options loaded in (cannot interact with login browser prompt)
    BasicAuthPage.visitSuccess();

    // Assert successful authentication by visibility of the contents on the page
    BasicAuthPage.getHeader()
      .should('contain.text', 'Basic Auth')
      .and('be.visible');
    BasicAuthPage.getBody()
      .should('contain.text', 'Congratulations!')
      .and('be.visible');
  });

  // This test is being skipped due to a technical limitation with Cypress. The negative case causes an authentication
  // pop-up in the browser, which cannot be interacted with. This test passes with manual intervention
  it.skip('Should not be able to access page with incorrect authentication credentials', () => {
    BasicAuthPage.visitFailure();
    cy.get('body').contains('Not authorized').should('be.visible');
  });
});
