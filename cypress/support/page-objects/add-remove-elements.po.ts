export class AddRemoveElemPage {
  static details: PageDetails = {
    linkText: 'Add/Remove Elements',
    pageUrl: 'add_remove_elements/'
  };

  static visit() {
    return cy.visit(this.details.pageUrl);
  }
  static getAddButton() {
    return cy.get('#content > .example > button');
  }
  static getDeleteButton() {
    return cy.get('#elements > button');
  }
}
