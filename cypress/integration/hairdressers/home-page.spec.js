/// <reference types="cypress" />

before(() => {
  cy.visit('/');
});

context('Go to homepage', () => {
  describe('Homepage', () => {
    it('Should contain the link to customers page', () => {
      cy.get('[data-cy=homepage-link-to-customers]').should('exist').click();
      cy.url().should('eq', 'http://localhost:3000/customers');
    });
  });
});
