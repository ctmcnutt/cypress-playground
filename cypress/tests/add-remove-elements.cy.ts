describe('Add/Remove Elements Page', () => {
  const PAGE_URL = 'add_remove_elements/';

  describe('Navigation', () => {
    it('Should be linked correctly from home page', () => {
      // Visit home page and click the correct link
      cy.visit('/');
      cy.contains('Add/Remove Elements').click();

      // Assert correct page loads
      cy.url().should('contain', PAGE_URL);
    });
  });

  describe('Functionality', () => {
    beforeEach(() => {
      // Navigate directly to add/remove elements page
      cy.visit(PAGE_URL);
    });

    it('Should successfully add and remove element', () => {
      // Click 'Add Element' button and assert one new element was added
      cy.get('button').contains('Add Element').click();
      cy.get('#elements').find('button').should('have.length', 1);

      // Click created 'Delete' element and assert removal
      cy.get('button').contains('Delete').click();
      cy.get('button').contains('Delete').should('not.exist');
    });

    it('Should successfully add and remove multiple elements', () => {
      // Variable to hold number of elements to add
      const ELEMENT_NUM: number = 10;

      // Click 'Add Element' button the number of times defined in ELEMENT_NUM
      cy.loop(ELEMENT_NUM).each(() => {
        cy.get('button').contains('Add Element').click();
      });

      // Assert the correct number of elements were added
      cy.get('#elements').find('button').should('have.length', ELEMENT_NUM);

      // Click each 'Delete' element added
      cy.loop(ELEMENT_NUM).each(() => {
        cy.get('#elements > button').first().click();
      });

      // Assert no 'Delete' elements remain after all are clicked
      cy.get('button').contains('Delete').should('not.exist');
    });
  });
});
