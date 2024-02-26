export class BrokenImagesPage {
  static details: PageDetails = {
    linkText: 'Broken Images',
    pageUrl: 'broken_images'
  };
  // Private variables for image sources (used to get elements in functions)
  private static BROKEN_IMG_1_SRC = 'asdf.jpg';
  private static BROKEN_IMG_2_SRC = 'asdf.jpg';
  private static AVATAR_IMG_SRC = 'img/avatar-blank.jpg';

  static visit() {
    return cy.visit(this.details.pageUrl);
  }
  static getBrokenImg1() {
    return cy.get(`img[src="${this.BROKEN_IMG_1_SRC}"]`);
  }
  static getBrokenImg2() {
    return cy.get(`img[src="${this.BROKEN_IMG_2_SRC}"]`);
  }
  static getAvatarImg() {
    return cy.get(`img[src="${this.AVATAR_IMG_SRC}"]`);
  }
}
