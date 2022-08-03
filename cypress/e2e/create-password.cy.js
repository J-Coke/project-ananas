describe("create password page", () => {
  it("loads the page", () => {
    cy.visit("/create-password");
  });

  it("shows the correct page title", () => {
    cy.visit("/create-password");
    cy.get("h1").contains("Create a password for your account");
  });

  it("can go back to the previous page", () => {
    cy.visit("/create-password");
    cy.get("a").contains("Back").click();
    cy.url().should("eq", "http://localhost:3000/create-password/#");
  });

  it("shows the password length requirements", () => {
    cy.visit("/create-password");
    cy.contains("must contain 8 digits");
  });

  it("shows the password input field and value", () => {
    cy.visit("/create-password");
    cy.get("#password")
      .type("password test")
      .should("have.value", "password test");
  });

  it("shows the label for the confirm password input", () => {
    cy.visit("/create-password");
    cy.contains("Confirm password");
  });

  it("shows the password input field and value", () => {
    cy.visit("/create-password");
    cy.get("#confirm-password")
      .type("confirm password test")
      .should("have.value", "confirm password test");
  });

  it("shows the continue button", () => {
    cy.visit("/create-password");
    cy.get("button").contains("Continue");
  });
});

//tests to write
//first password field and value
//Validate it matches requirement
//requirement: 8 digits, at least one number and one special character
//second password field and value
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
