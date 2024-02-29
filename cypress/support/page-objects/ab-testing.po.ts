export class ABTestPage {
  // Page Details
  static details: PageDetails = {
    linkText: 'A/B Testing',
    pageUrl: 'abtest'
  };

  // Page Data
  static HEADER_TEXT = 'A/B Test';
  static BODY_TEXT = 'Also known as split testing';

  // Page Selectors
  private static selectors = {
    header: '#content h3',
    body: '#content p'
  };

  // Page Functions
  static visit() {
    return cy.visit(this.details.pageUrl);
  }

  static getHeader() {
    return cy.get(this.selectors.header);
  }

  static getBody() {
    return cy.get(this.selectors.body);
  }
}
