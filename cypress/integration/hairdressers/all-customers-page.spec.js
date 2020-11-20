/// <reference types="cypress" />

beforeEach(() => {
  cy.server()

  cy.route({
    method: 'GET',
    url: 'https://janamelicharova.cz/wp-json/hairdressers/v1/customers',
    response: 'fx:allCustomers',
    status: 200
  }).as('allCustomers')

  cy.visit('/customers');
});

context('Customers page', () => {
  describe('Customers page has table', () => {
    it('Should contain the table', () => {
      cy.url().should('eq', 'http://localhost:3000/customers');

      cy.get('[data-cy=TableOfPosts]').should('exist')
      
      cy.get('[data-cy=TableCell]').first().should('exist').should('contain.text', 'Dana Šianská')
    });
  });

  describe('Customers page has table', () => {
    it('Should contain the + icon', () => {
      cy.url().should('eq', 'http://localhost:3000/customers');

      cy.get('[data-cy=addPostIcon]').find('a').should('exist').click()

      cy.url().should('eq', 'http://localhost:3000/customers/create');
    });
  });
});
