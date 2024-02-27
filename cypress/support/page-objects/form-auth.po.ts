export class FormAuthPage {
  static details: PageDetails = {
    linkText: 'Form Authentication',
    pageUrl: 'login'
  };

  static AUTH_CREDS: Credentials = {
    username: 'tomsmith',
    password: Cypress.env('FORM_AUTH_PASSWORD')
  };

  static BAD_CREDS: Credentials = {
    username: 'wrong',
    password: 'wrong'
  };

  static visit() {
    return cy.visit(this.details.pageUrl);
  }

  static enterUsername(username: string) {
    return cy.get('#username').type(username);
  }

  static enterPassword(password: string) {
    return cy.get('#password').type(password);
  }

  static clickSubmitButton() {
    return cy.get('button[type="submit"]').click();
  }

  static getStatusBanner() {
    return cy.get('#flash');
  }
}
