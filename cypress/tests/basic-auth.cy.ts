const PAGE_URL = 'basic_auth';
const AUTH_CREDS = {
  username: 'admin',
  password: Cypress.env('BASIC_AUTH_PASSWORD')
};
const BAD_CREDS = {
  username: 'wrong',
  password: 'creds'
};

describe('Basic Auth Page Functionality', () => {
  it('Should be able to access page with correct credentials', () => {
    // Visit page with authentication options loaded in (cannot interact with login browser prompt)
    cy.visit(PAGE_URL, { auth: AUTH_CREDS });

    // Assert successful authentication by visibility of the contents on the page
    cy.get('h3').contains('Basic Auth').should('be.visible');
    cy.get('#content > .example > p')
      .should('contain.text', 'Congratulations!')
      .and('be.visible');
  });

  // This test is being skipped due to a technical limitation with Cypress. The negative case causes an authentication
  // pop-up in the browser, which cannot be interacted with. This test passes with manual intervention
  it.skip('Should not be able to access page with incorrect authentication credentials', () => {
    cy.visit(PAGE_URL, { auth: BAD_CREDS, failOnStatusCode: false }); // failOnStatusCode: false required to stop test from auto-failing
    cy.get('body').contains('Not authorized').should('be.visible');
  });
});
