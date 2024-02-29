export class BasicAuthPage {
  // Page Details
  static details: PageDetails = {
    linkText: 'Basic Auth',
    pageUrl: 'basic_auth'
  };

  // Page Data
  static HEADER_TEXT = 'Basic Auth';
  static BODY_TEXT = 'Congratulations!';

  // Page Selectors
  private static selectors = {
    header: 'div.example > h3',
    body: 'div.example > p'
  };

  // Page Functions
  static visit(username: string, password: string) {
    // Visit page with required authentication credentials
    // failOnStatusCode: false required to stop test from auto-failing on negative case
    cy.visit(this.details.pageUrl, {
      auth: { username, password },
      failOnStatusCode: false
    });
  }

  static getHeader() {
    return cy.get(this.selectors.header);
  }

  static getBody() {
    return cy.get(this.selectors.body);
  }
}
