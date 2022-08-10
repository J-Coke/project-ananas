describe("create password page", () => {
  beforeEach(() => {
    cy.visit("/create-password");
  });

  it("shows the correct page title", () => {
    cy.get('[data-cy="section-heading-h1"]').contains(
      "Create a password for your account"
    );
  });

  it("can go back to the previous page", () => {
    cy.get('[data-cy="back-link"]').click();
    cy.url().should("eq", "http://localhost:3000/email-address");
  });

  it("shows the password length requirements", () => {
    cy.contains("must contain 8 digits");
  });

  it("shows the password input field and value", () => {
    cy.get('[data-cy="password-input"]')
      .type("passwordtest")
      .should("have.value", "passwordtest");
  });

  it("shows the label for the confirm password input", () => {
    cy.contains("Confirm password");
  });

  it("shows the password input field and value", () => {
    cy.get('[data-cy="confirm-password-input"]')
      .type("confirmpasswordtest")
      .should("have.value", "confirmpasswordtest");
  });

  it("shows the continue button", () => {
    cy.get('[data-cy="continue-button"]').contains("Continue");
  });

  it("show an error if the password is less than 8 characters", () => {
    cy.get('[data-cy="password-input"]').type("pass");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.get('[data-cy="password-error"]').contains(
      "Password must be 8 characters or more"
    );
    cy.get('[data-cy="password-error-summary"]').contains("There is a problem");
    cy.get('[data-cy="password-error-summary"]').contains(
      "Password must be 8 characters or more"
    );
    cy.get('[data-cy="password-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="confirm-password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-error-summary"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.attr",
      "aria-describedby",
      "password-hint password-error"
    );
  });

  it("shows error if password doesn't contain at least one number and special character", () => {
    cy.get('[data-cy="password-input"]').type("password");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.get('[data-cy="password-error"]').contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="password-error-summary"]').contains("There is a problem");
    cy.get('[data-cy="password-error-summary"]').contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="password-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="confirm-password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-error-summary"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.attr",
      "aria-describedby",
      "password-hint password-error"
    );
  });

  it("shows error if password doesn't contain at least one number", () => {
    cy.get('[data-cy="password-input"]').type("password@");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.get('[data-cy="password-error"]').contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="password-error-summary"]').contains("There is a problem");
    cy.get('[data-cy="password-error-summary"]').contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="password-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="confirm-password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-error-summary"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.attr",
      "aria-describedby",
      "password-hint password-error"
    );
  });

  it("shows error if password doesn't contain at least one special character", () => {
    cy.get('[data-cy="password-input"]').type("password1");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.get('[data-cy="password-error"]').contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="password-error-summary"]').contains("There is a problem");
    cy.get('[data-cy="password-error-summary"]').contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="password-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="confirm-password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-error-summary"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.attr",
      "aria-describedby",
      "password-hint password-error"
    );
  });

  it("shows an error when both passwords don't match", () => {
    cy.get('[data-cy="password-input"]').type("Type!1day");
    cy.get('[data-cy="confirm-password-input"]').type("Type!t2tt");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.get('[data-cy="password-error"]').contains(
      "Both passwords should match"
    );
    cy.get('[data-cy="password-error-summary"]').contains("There is a problem");
    cy.get('[data-cy="password-error-summary"]').contains(
      "Both passwords should match"
    );
    cy.get('[data-cy="password-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="confirm-password-input"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-error-summary"]').should(
      "have.css",
      "border-color",
      "rgb(212, 53, 28)"
    );
    cy.get('[data-cy="password-input"]').should(
      "have.attr",
      "aria-describedby",
      "password-hint password-error"
    );
  });

  it("goes to the next page when the password matches requirements", () => {
    cy.get('[data-cy="password-input"]').type("Type!1day");
    cy.get('[data-cy="confirm-password-input"]').type("Type!1day");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.url().should("eq", "http://localhost:3000/document-list");
  });

  it("shows an error when password isn't accepted but accepts after next attempt meets requirements", () => {
    cy.get('[data-cy="password-input"]').type("Type!1day");
    cy.get('[data-cy="confirm-password-input"]').type("Type!t2tt");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.get('[data-cy="password-error"]').contains(
      "Both passwords should match"
    );
    cy.get('[data-cy="password-error-summary"]').contains("There is a problem");
    cy.get('[data-cy="password-error-summary"]').contains(
      "Both passwords should match"
    );
    cy.get('[data-cy="password-error-summary"]').contains(
      "Both passwords should match"
    );

    cy.get('[data-cy="password-input"]').clear().type("Type!1day");
    cy.get('[data-cy="confirm-password-input"]').clear().type("Type!1day");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.url().should("eq", "http://localhost:3000/document-list");
  });
});
