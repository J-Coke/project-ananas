describe("empty spec", () => {
  it("successfully loads", () => {
    cy.visit("/");
    cy.contains("GOV.UK");
  });
});

describe("landing page", () => {
  it("displays landing page content", () => {
    cy.visit("http://localhost:3000");
    cy.contains("My council account");
    cy.contains("Blue badge application");
  });
  it("my council account is a clickable link", () => {
    cy.visit("http://localhost:3000");
    cy.contains("My council account").click();
    cy.url().should("include", "/my-council-account");
  });
});
