/// <reference types="cypress" />

context("Preset Searches", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/SnapShot#/SnapScout/home");
  });

  // Have used xpath as the text match on the button is likely to be more reliable if people move them around than nth-of-type
  const buttons = [
    {
      buttonText: "Mountain",
      selector: `//a[normalize-space()='Mountain']`,
      wording: "Mountain",
    },
    {
      buttonText: "Beaches",
      selector: `//a[normalize-space()='Beaches']`,
      wording: "Beach",
    },
    {
      buttonText: "Birds",
      selector: `//a[normalize-space()='Birds']`,
      wording: "Bird",
    },
    {
      buttonText: "Food",
      selector: `//a[normalize-space()='Food']`,
      wording: "Food",
    },
  ];

  for (let i = 0; i < buttons.length; i++) {
    // Confirms link is visble and has correct text
    it(`have ${buttons[i].buttonText} preset search showing`, () => {
      cy.xpath(`${buttons[i].selector}`)
        .should("have.text", `${buttons[i].buttonText}`)
        .should("be.visible");
    });

    it("take you to the correct search for each preset and have images", () => {
      cy.xpath(`${buttons[i].selector}`).click().end();
      const text = buttons[i].wording.toLocaleLowerCase(); // Displays as upper but the actual text is lower

      // coverted to lower case as most consistent style
      cy.get("h2").should("have.text", `${text} Pictures`);

      cy.get(".photo-container").find('li').should('have.length.greaterThan', 1);
    });

  }

});
