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
    cy.url().should("eq", "http://localhost:3000/create-password/#");
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
    cy.contains("Enter a password with a minimum of 8 characters");
    cy.get('[data-cy="event-name-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
  });

  it("shows error if password doesn't contain at least one number and special character", () => {
    cy.get('[data-cy="password-input"]').type("password");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="event-name-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
  });

  it("shows error if password doesn't contain at least one number", () => {
    cy.get('[data-cy="password-input"]').type("password@");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="event-name-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
  });

  it("shows error if password doesn't contain at least one special character", () => {
    cy.get('[data-cy="password-input"]').type("password1");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.contains(
      "Enter a password with at least one number and one special character"
    );
    cy.get('[data-cy="event-name-error"]').should(
      "have.css",
      "color",
      "rgb(212, 53, 28)"
    );
  });
  // it("shows an error when both passwords don't match", () => {
  //   cy.get('[data-cy="password-input"]').type("Type!1day");
  //   cy.get('[data-cy="confirm-password-input"]').type("Type!tttt");
  //   cy.get('[data-cy="continue-button"]').contains("Continue").click();
  //   cy.get('[data-cy="no-match-error"]').contains(
  //     "Both passwords should match"
  //   );
  // });
});

//tests to write

//Validate it matches requirement
// order of validation
//length of password
//type of characters required
// passwords match
//requirement: 8 digits, at least one number and one special character

//hide both passwords
//both values match
//error if doesn't match
//continue button and it goes to next page

//Full test order
// go to page
// type password
// validate password
// show error if not valid
// confirm password
// show error if passwords don't match
// click continue and be taken to next page
