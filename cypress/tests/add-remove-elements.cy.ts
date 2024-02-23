import { AddRemoveElemPage } from '../support/page-objects/add-remove-elements.po';

describe('Add/Remove Elements Page Functionality', () => {
  beforeEach(() => {
    // Navigate directly to add/remove elements page
    AddRemoveElemPage.visit();
  });

  it('Should successfully add and remove element', () => {
    // Click 'Add Element' button and assert one new element was added
    AddRemoveElemPage.getAddButton().click();
    AddRemoveElemPage.getDeleteButton().should('have.length', 1);

    // Click created 'Delete' element and assert removal
    AddRemoveElemPage.getDeleteButton().click();
    AddRemoveElemPage.getDeleteButton().should('not.exist');
  });

  it('Should successfully add and remove multiple elements', () => {
    // Variable to hold number of elements to add
    const ELEMENT_NUM: number = 10;

    // Click 'Add Element' button the number of times defined in ELEMENT_NUM
    cy.loop(ELEMENT_NUM).each(() => {
      AddRemoveElemPage.getAddButton().click();
    });

    // Assert the correct number of elements were added
    AddRemoveElemPage.getDeleteButton().should('have.length', ELEMENT_NUM);

    // Click each 'Delete' element added
    cy.loop(ELEMENT_NUM).each(() => {
      AddRemoveElemPage.getDeleteButton().first().click();
    });

    // Assert no 'Delete' elements remain after all are clicked
    AddRemoveElemPage.getDeleteButton().should('not.exist');
  });
});
