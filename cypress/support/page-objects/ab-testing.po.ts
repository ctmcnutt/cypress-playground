export class ABTestPage {
  static details: PageDetails = {
    linkText: 'A/B Testing',
    pageUrl: 'abtest'
  };
  static HEADER_TEXT = 'A/B Test';
  static BODY_TEXT = 'Also known as split testing';

  static visit() {
    return cy.visit(this.details.pageUrl);
  }

  static getHeader() {
    return cy.get('#content h3');
  }

  static getBody() {
    return cy.get('#content p');
  }
}
