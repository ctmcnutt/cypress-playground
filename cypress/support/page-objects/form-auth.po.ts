export class FormAuthPage {
  // Page Details
  static details: PageDetails = {
    linkText: 'Form Authentication',
    pageUrl: 'login'
  };

  // Page Selectors
  private static selectors = {
    usernameInput: '#username',
    passwordInput: '#password',
    submitButton: 'button[type="submit"]',
    statusBanner: '#flash'
  };

  // Page Functions
  static visit() {
    return cy.visit(this.details.pageUrl);
  }

  static enterUsername(username: string) {
    return cy.get(this.selectors.usernameInput).type(username);
  }

  static enterPassword(password: string) {
    return cy.get(this.selectors.passwordInput).type(password);
  }

  static clickSubmitButton() {
    return cy.get(this.selectors.submitButton).click();
  }

  static getStatusBanner() {
    return cy.get(this.selectors.statusBanner);
  }
}
