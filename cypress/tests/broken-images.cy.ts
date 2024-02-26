import { BrokenImagesPage } from '../support/page-objects/broken-images.po';

describe('Broken Images Page Functionality', () => {
  it('Should display the expected images', () => {
    // Visit page and assert that each expected image is visible
    BrokenImagesPage.visit();
    BrokenImagesPage.getBrokenImg1().should('be.visible');
    BrokenImagesPage.getBrokenImg2().should('be.visible');
    BrokenImagesPage.getAvatarImg().should('be.visible');
  });
});
