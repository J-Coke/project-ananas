describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
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

describe("date of birth", () => {
  it("displays dob page", () => {
    cy.visit("http://localhost:3000/date-of-birth");
    cy.contains("What is your date of birth?");
    cy.contains("Month");
  });

  it("Continue button is a clickable link", () => {
    cy.visit("http://localhost:3000/date-of-birth");
    cy.contains("Continue").click();
    cy.url().should("include", "/email-address");
  });
  
  it("Back link is a clickable link and goes to correct destination", () => {
    cy.visit("http://localhost:3000/date-of-birth");
    cy.contains("Back").click();
    cy.url().should("equals", "http://localhost:3000/address/");
  });
});
