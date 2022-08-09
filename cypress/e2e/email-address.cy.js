describe("email address", () => {
  beforeEach(() => {
    cy.visit("/email-address");
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
      cy.url().should("include", "date-of-birth");
    });
  });

  context("email field", () => {
    beforeEach(() => {
      cy.get('[data-testid="email-field"]').as("field");
      cy.get('[data-testid="email-field-label"]').as("label");
    });

    it("displays", () => {
      cy.get("@field").should("be.visible");
      cy.get("@label").should("be.visible");
    });

    it("has a label saying 'What is your email address?'", () => {
      cy.get("@label").contains("What is your email address?");
    });
  });

  context("continue button", () => {
    beforeEach(() => {
      cy.get('[data-testid="continue-button"]').as("button");
    });

    it("displays", () => {
      cy.get("@button").should("be.visible");
    });

    it("says 'Continue'", () => {
      cy.contains("Continue");
    });

    it("has a green background", () => {
      cy.get("@button").should(
        "have.css",
        "background-color",
        "rgb(0, 112, 60)"
      );
    });

    it("links to the right page", () => {
      cy.get("@button").click();
      cy.url().should("include", "#");
    });
  });
});
