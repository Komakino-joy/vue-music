// https://docs.cypress.io/api/introduction/api.html

const { createYield } = require("typescript");

describe('Sanity Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Listen to great music !');
  });
});
