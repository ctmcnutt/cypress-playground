export class AddRemoveElemPage {
  static PAGE_URL = 'add_remove_elements/';
  static HOME_LINK_TEXT = 'Add/Remove Elements';

  static visit() {
    cy.visit(this.PAGE_URL);
  }
  static getAddButton() {
    return cy.get('#content > .example > button');
  }
  static getDeleteButton() {
    return cy.get('#elements > button');
  }
}
