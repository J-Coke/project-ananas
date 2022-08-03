describe("create password page", () => {
  it("loads the page", () => {
    cy.visit("/create-password");
  });
  it("shows the correct page title", () => {
    cy.visit("/create-password");
    cy.get("h1").should("have.text", "Create a password for your account");
  });
  it("shows the password length requirements", () => {
    cy.visit("/create-password");
    cy.contains("must contain 8 digits");
  });
  //   it("shows the password input field", () => {
  //     cy.visit("/create-password");
  //     cy.get("input").expect().exist();
  //   });
});

//tests to write
//first password field and value
//Validate it matches requirement
//requirement: 8 digits, at least one number and one special character
//second password field and value
//both values match
//error if doesn't match
//continue button and it goes to next page
