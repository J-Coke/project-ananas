describe("my council account page", () => {
  beforeEach(() => {
    cy.visit("/my-council-account");
  });

  it("displays the page title", () => {
    cy.get('[data-cy="section-heading-h1"]').contains(
      "Creating a My Council Account"
    );
  });

  it("can go back to the previous page", () => {
    cy.get('[data-cy="back-link"]').contains("Back").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("shows a bullet list", () => {
    cy.get('[data-cy="bullet-list"]').contains(
      "Photo IDs (passport, driver's licence)"
    );
  });

  it("shows the login button", () => {
    cy.get('[data-cy="login-btn"]');
  });

  it("shows the register button", () => {
    cy.get('[data-cy="register-btn"]');
  });

  it("is a clickable button to register an account", () => {
    cy.get('[data-cy="register-btn"]').click();
    cy.url().should("eq", "http://localhost:3000/registration-list/");
  });
});
