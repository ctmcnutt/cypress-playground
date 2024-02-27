import { FormAuthPage } from '../support/page-objects/form-auth.po';
import { SecurePage } from '../support/page-objects/secure.po';

describe('Form Authentication Page Functionality', () => {
  beforeEach(() => {
    // Navigate to page
    FormAuthPage.visit();
  });

  it('Should successfully submit login form with valid credentials, then log out', () => {
    // Complete a successful login
    FormAuthPage.enterUsername(FormAuthPage.AUTH_CREDS.username);
    FormAuthPage.enterPassword(FormAuthPage.AUTH_CREDS.password);
    FormAuthPage.clickSubmitButton();

    // Assert on successful form submission
    cy.url().should('contain', SecurePage.details.pageUrl);
    SecurePage.getStatusBanner().should('have.class', 'success');

    // Click log out button
    SecurePage.clickLogoutButton();

    // Assert on successful logout
    FormAuthPage.getStatusBanner().should('have.class', 'success');
  });

  it('Should display error when submitting login form with invalid credentials', () => {
    // Complete an invalid login submission
    FormAuthPage.enterUsername('Invalid');
    FormAuthPage.enterPassword('Invalid');
    FormAuthPage.clickSubmitButton();

    // Assert on invalid form submission
    FormAuthPage.getStatusBanner().should('have.class', 'error');
  });
});
