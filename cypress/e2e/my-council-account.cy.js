describe("my council account page", () => {
  it("displays the page title", () => {
    cy.visit("/my-council-account");
    cy.get("h1").should("have.text", "Creating a My Council Account");
  });
  it("shows a bullet list", () => {
    cy.visit("/my-council-account");
    cy.get("li")
      .first()
      .should("have.text", "Photo IDs (passport, driver's licence)");
  });
  it("shows the login button", () => {
    cy.visit("/my-council-account");
    cy.contains("To log in");
    cy.get("button").first().contains("Click Here");
  });
  it("shows the register button", () => {
    cy.visit("/my-council-account");
    cy.contains("To register");
    cy.get("button").last().contains("Click Here");
  });
  it("is a clickable button to register an account", () => {
    cy.visit("/my-council-account");
    cy.get("button").last().contains("Click Here").click();
    cy.url().should("include", "/#");
  });
});
