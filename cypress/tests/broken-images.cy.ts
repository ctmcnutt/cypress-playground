describe('Broken Images Page', () => {
  const PAGE_URL = 'broken_images';
  const BROKEN_IMG_1_SRC = 'asdf.jpg';
  const BROKEN_IMG_2_SRC = 'asdf.jpg';
  const AVATAR_IMG_SRC = 'img/avatar-blank.jpg';

  describe('Navigation', () => {
    it('Should be linked correctly from home page', () => {
      // Visit home page and click the correct link
      cy.visit('/');
      cy.get('a').contains('Broken Images').click();

      // Assert correct page loads
      cy.url().should('contain', PAGE_URL);
    });
  });

  describe('Functionality', () => {
    it('Should display the expected images', () => {
      // Visit URL and assert that each expected image is visible on the page
      cy.visit(PAGE_URL);
      cy.get(`img[src="${BROKEN_IMG_1_SRC}"]`).should('be.visible');
      cy.get(`img[src="${BROKEN_IMG_2_SRC}"]`).should('be.visible');
      cy.get(`img[src="${AVATAR_IMG_SRC}"]`).should('be.visible');
    });
  });
});
