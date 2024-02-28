export class AddRemoveElemPage {
  // Page Details
  static details: PageDetails = {
    linkText: 'Add/Remove Elements',
    pageUrl: 'add_remove_elements/'
  };

  // Page Selectors
  private static selectors = {
    addButton: '#content > .example > button',
    deleteButton: '#elements > button'
  };

  // Page Functions
  static visit() {
    return cy.visit(this.details.pageUrl);
  }
  static getAddButton() {
    return cy.get(this.selectors.addButton);
  }
  static getDeleteButton() {
    return cy.get(this.selectors.deleteButton);
  }
}
