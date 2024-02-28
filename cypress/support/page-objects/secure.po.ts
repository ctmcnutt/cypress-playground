export class SecurePage {
  // Page Details
  static details: PageDetails = {
    pageUrl: 'secure'
  };

  // Page Selectors
  private static selectors = {
    statusBanner: '#flash',
    logoutButton: 'a.button[href="/logout"]'
  };

  // Page Functions
  static getStatusBanner() {
    return cy.get(this.selectors.statusBanner);
  }

  static clickLogoutButton() {
    return cy.get(this.selectors.logoutButton).click();
  }
}
