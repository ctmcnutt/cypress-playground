import { BasicAuthPage } from '../support/page-objects/basic-auth.po';

// Valid auth credentials
const VALID_CREDS: Credentials = {
  username: 'admin',
  password: Cypress.env('BASIC_AUTH_PASSWORD')
};

describe('Basic Auth Page Functionality', () => {
  it('Should be able to access page with correct credentials', () => {
    // Visit page with correct authentication options loaded in (cannot interact with login browser prompt)
    BasicAuthPage.visit(VALID_CREDS.username, VALID_CREDS.password);

    // Assert successful authentication by visibility of the contents on the page
    BasicAuthPage.getHeader()
      .should('contain.text', BasicAuthPage.HEADER_TEXT)
      .and('be.visible');
    BasicAuthPage.getBody()
      .should('contain.text', BasicAuthPage.BODY_TEXT)
      .and('be.visible');
  });

  it('Should not be able to access page with incorrect authentication credentials', () => {
    BasicAuthPage.visit('Invalid', 'Invalid');
    cy.get('body').contains('Not authorized').should('be.visible');
  });
});
