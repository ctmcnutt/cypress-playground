import { HomePage } from '../support/page-objects/home.po';
import { BrokenImagesPage } from '../support/page-objects/broken-images.po';

describe('Broken Images Page', () => {
  describe('Navigation', () => {
    it('Should be linked correctly from home page', () => {
      // Visit home page and click the correct link
      HomePage.visit();
      cy.get('a').contains(BrokenImagesPage.HOME_LINK_TEXT).click();

      // Assert correct page loads
      cy.url().should('contain', BrokenImagesPage.PAGE_URL);
    });
  });

  describe('Functionality', () => {
    it('Should display the expected images', () => {
      // Visit URL and assert that each expected image is visible on the page
      BrokenImagesPage.visit();
      BrokenImagesPage.getBrokenImg1().should('be.visible');
      BrokenImagesPage.getBrokenImg2().should('be.visible');
      BrokenImagesPage.getAvatarImg().should('be.visible');
    });
  });
});
