export class ABTestPage {
  static PAGE_URL = 'abtest';
  static HOME_LINK_TEXT = 'A/B Testing';

  static HEADER_TEXT = 'A/B Test';
  static BODY_TEXT = 'Also known as split testing';

  static visit() {
    cy.visit(this.PAGE_URL);
  }

  static getHeader() {
    return cy.get('#content h3');
  }

  static getBody() {
    return cy.get('#content p');
  }
}
