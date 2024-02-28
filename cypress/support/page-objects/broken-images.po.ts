export class BrokenImagesPage {
  // Page Details
  static details: PageDetails = {
    linkText: 'Broken Images',
    pageUrl: 'broken_images'
  };

  // Private variables for image sources (used in selectors)
  private static BROKEN_IMG_1_SRC = 'asdf.jpg';
  private static BROKEN_IMG_2_SRC = 'asdf.jpg';
  private static AVATAR_IMG_SRC = 'img/avatar-blank.jpg';

  // Page Selectors
  private static selectors = {
    brokenImg1: `img[src="${this.BROKEN_IMG_1_SRC}"]`,
    brokenImg2: `img[src="${this.BROKEN_IMG_2_SRC}"]`,
    avatarImg: `img[src="${this.AVATAR_IMG_SRC}"]`
  };

  // Page Functions
  static visit() {
    return cy.visit(this.details.pageUrl);
  }
  static getBrokenImg1() {
    return cy.get(this.selectors.brokenImg1);
  }
  static getBrokenImg2() {
    return cy.get(this.selectors.brokenImg2);
  }
  static getAvatarImg() {
    return cy.get(this.selectors.avatarImg);
  }
}
