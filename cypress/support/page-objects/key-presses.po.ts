export class KeyPressesPage {
  // Page Details
  static details: PageDetails = {
    linkText: 'Key Presses',
    pageUrl: 'key_presses'
  };

  // Page Selectors
  private static selectors = {
    inputElement: '#target',
    keyNotification: '#result'
  };

  // Page Functions
  static visit() {
    return cy.visit(this.details.pageUrl);
  }

  static enterKey(key: string) {
    return cy.get(this.selectors.inputElement).type(key);
  }

  static assertNotification(key: string) {
    // Ternary logic to get key press ready for assertion
    const EXPECTED = key === ' ' ? 'SPACE' : key.toUpperCase();

    return cy
      .get(this.selectors.keyNotification)
      .should('have.text', `You entered: ${EXPECTED}`);
  }
}
