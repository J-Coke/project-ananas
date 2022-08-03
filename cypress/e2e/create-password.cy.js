describe("create password page", () => {
  it("loads the page", () => {
    cy.visit("/create-password");
  });
  it("shows the correct page title", () => {
    cy.visit("/create-password");
    cy.get("h1").should("have.text", "Create a password for your account");
  });
});
