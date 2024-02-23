export class BasicAuthPage {
  static PAGE_URL = 'basic_auth';
  static HEADER_TEXT = 'Basic Auth';
  static BODY_TEXT = 'Congratulations!';

  // Auth credentials used for class functions visitSuccess() and visitFailure()
  private static AUTH_CREDS: Credentials = {
    username: 'admin',
    password: Cypress.env('BASIC_AUTH_PASSWORD')
  };
  private static BAD_CREDS: Credentials = {
    username: 'wrong',
    password: 'creds'
  };

  static visitSuccess() {
    this.visit(this.AUTH_CREDS);
  }

  static visitFailure() {
    this.visit(this.BAD_CREDS);
  }

  private static visit(creds: Credentials) {
    // Visit page with required authentication credentials
    cy.visit(this.PAGE_URL, { auth: creds, failOnStatusCode: false }); // failOnStatusCode: false required to stop test from auto-failing on negative case
  }

  static getHeader() {
    return cy.get('div.example > h3');
  }

  static getBody() {
    return cy.get('div.example > p');
  }
}

interface Credentials {
  username: string;
  password: string;
}
