export class BasicAuthPage {
  static details: PageDetails = {
    linkText: 'Basic Auth',
    pageUrl: 'basic_auth'
  };
  static HEADER_TEXT = 'Basic Auth';
  static BODY_TEXT = 'Congratulations!';

  static visit(username: string, password: string) {
    // Visit page with required authentication credentials
    // failOnStatusCode: false required to stop test from auto-failing on negative case
    cy.visit(this.details.pageUrl, {
      auth: { username, password },
      failOnStatusCode: false
    });
  }

  static getHeader() {
    return cy.get('div.example > h3');
  }

  static getBody() {
    return cy.get('div.example > p');
  }
}
