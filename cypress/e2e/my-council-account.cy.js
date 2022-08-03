describe("my council account page", () => {
  it("displays the page title", () => {
    cy.visit("/my-council-account");
    cy.get("h1").should("have.text", "Creating a My Council Account");
  });
  it("can go back to the previous page", () => {
    cy.visit("/my-council-account");
    cy.get("a").contains("Back").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("shows a bullet list", () => {
    cy.visit("/my-council-account");
    cy.get("li")
      .first()
      .should("have.text", "Photo IDs (passport, driver's licence)");
  });
  it("shows the login button", () => {
    cy.visit("/my-council-account");
    cy.get("button").contains("Log in");
  });
  it("shows the register button", () => {
    cy.visit("/my-council-account");
    cy.get("button").contains("Register");
  });
  it("is a clickable button to register an account", () => {
    cy.visit("/my-council-account");
    cy.get("button").contains("Register").click();
    cy.url().should("include", "/#");
  });
});
