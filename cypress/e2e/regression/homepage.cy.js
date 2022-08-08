/// <reference types="cypress" />

context("Homepage regression", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/SnapShot#/SnapScout/home");
  });

  it("title displayed", () => {
    cy.get('h1').should('have.text', 'SnapShot');
  });

  it("search box displayed", () => {
    cy.get('.search-form') 
    .should('be.visible')
  });

  it("homepage text displayed", () => {
    // This will fail if page not found displayed
    cy.get('.not-found').should('not.be.visible')
  });
});
