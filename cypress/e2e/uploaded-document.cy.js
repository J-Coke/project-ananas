describe("name page", () => {
    beforeEach(() => {
      cy.visit("/uploaded-document");
    });
  
    context("back link", () => {
      beforeEach(() => {
        cy.get('[data-testid="back-link"]').as("button");
      });
  
      it("displays", () => {
        cy.get("@button").should("be.visible");
      });
  
      it("says 'Back'", () => {
        cy.contains("Back");
      });
  
      it("links to the right page", () => {
        cy.get("@button").click();
        cy.url().should("include", "#");
      });
    });
  
    // context("first name field", () => {
    //   beforeEach(() => {
    //     cy.get('[data-testid="first-name-field"]').as("field");
    //     cy.get('[data-testid="first-name-label"]').as("label");
    //   });
  
    //   it("displays", () => {
    //     cy.get("@field").should("be.visible");
    //     cy.get("@label").should("be.visible");
    //   });
  
    //   it("has a label saying 'First name'", () => {
    //     cy.get("@label").contains("First name");
    //   });
    // });
  
    // context("surname field", () => {
    //   beforeEach(() => {
    //     cy.get('[data-testid="surname-field"]').as("field");
    //     cy.get('[data-testid="surname-label"]').as("label");
    //   });
  
    //   it("displays", () => {
    //     cy.get("@field").should("be.visible");
    //     cy.get("@label").should("be.visible");
    //   });
  
    //   it("has a label saying 'Surname'", () => {
    //     cy.get("@label").contains("Surname");
    //   });
    // });
  
    // context("continue button", () => {
    //   beforeEach(() => {
    //     cy.get('[data-testid="continue-button"]').as("button");
    //   });
  
    //   it("displays", () => {
    //     cy.get("@button").should("be.visible");
    //   });
  
    //   it("says 'Continue'", () => {
    //     cy.contains("Continue");
    //   });
  
    //   it("has a green background", () => {
    //     cy.get("@button").should(
    //       "have.css",
    //       "background-color",
    //       "rgb(0, 112, 60)"
    //     );
    //   });
  
    //   it("links to the right page", () => {
    //     cy.get("@button").click();
    //     cy.url().should("include", "/address");
    //   });
    // });
  });
  