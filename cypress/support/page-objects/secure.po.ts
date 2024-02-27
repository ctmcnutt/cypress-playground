export class SecurePage {
  static details: PageDetails = {
    pageUrl: 'secure'
  };

  static getStatusBanner() {
    return cy.get('#flash');
  }

  static clickLogoutButton() {
    return cy.get('a.button[href="/logout"]').click();
  }
}
