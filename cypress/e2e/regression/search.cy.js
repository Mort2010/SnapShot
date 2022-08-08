/// <reference types="cypress" />

context("Search function", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/SnapShot#/SnapScout/home");
  });

  it("complete a basic search", () => {
    const searchTerm = 'dogs'
      cy.get(`.search-form`).type(searchTerm);
      cy.get(`.search-button`).click();

      // coverted to lower case as most consistent style
      cy.get("h2").should("have.text", `${searchTerm} Pictures`);

      // check we got atleast image back
      cy.get(".photo-container").find('li').should('have.length.greaterThan', 1);
    
  });

});
