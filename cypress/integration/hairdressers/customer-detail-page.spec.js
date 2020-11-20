/// <reference types="cypress" />

beforeEach(() => {
  cy.server()

  cy.route({
    method: 'GET',
    url: 'https://janamelicharova.cz/wp-json/hairdressers/v1/customers?id=10',
    response: 'fx:customerDetail',
    status: 200
  }).as('customerDetail')

  cy.visit('/customers/10');
});

context('Customer detail page', () => {
  describe('Customer detail page', () => {
    it('Should contain', () => {
      cy.url().should('eq', 'http://localhost:3000/customers/10');

      // cy.get('[data-cy=TableOfPosts]').should('exist')
      
      // cy.get('[data-cy=TableCell]').first().should('exist').should('contain.text', 'Dana Šianská')
    });
  });
});
