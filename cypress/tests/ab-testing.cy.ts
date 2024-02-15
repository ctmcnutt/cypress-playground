describe('A/B Testing Page', () => {
  const PAGE_URL = 'abtest';

  describe('Navigation', () => {
    it('Should be linked correctly from home page', () => {
      // Visit home page and click the correct link
      cy.visit('/');
      cy.get('a').contains('A/B Testing').click();

      // Assert correct page loads
      cy.url().should('contain', PAGE_URL);
    });
  });

  describe('Functionality', () => {
    beforeEach(() => {
      // Directly navigate to a/b testing page
      cy.visit(PAGE_URL);
    });

    it('Should successfully display page contents', () => {
      const HEADER_TEXT = 'A/B Test';
      const BODY_TEXT = 'Also known as split testing';

      // Assert header contains correct text and is visible
      cy.get('#content')
        .find('h3')
        .should('contain.text', HEADER_TEXT)
        .and('be.visible');

      // Assert body contains correct text and is visible
      cy.get('#content')
        .find('p')
        .should('contain.text', BODY_TEXT)
        .and('be.visible');
    });
  });
});
