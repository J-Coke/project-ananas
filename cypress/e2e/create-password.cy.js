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

  context("password input", () => {
    it("shows the password input field", () => {
      cy.get('[data-cy="password-input"]')
        .type("passwordtest")
        .should("have.value", "passwordtest");
    });
  });

  context("confirm password input", () => {
    it("shows the label for the confirm password input", () => {
      cy.contains("Confirm password");
    });

    it("shows the confirm password input field", () => {
      cy.get('[data-cy="confirm-password-input"]')
        .type("confirmpasswordtest")
        .should("have.value", "confirmpasswordtest");
    });
  });

  it("shows the continue button", () => {
    cy.get('[data-cy="continue-button"]').contains("Continue");
  });

  context("password is less than 8 characters", () => {
    beforeEach(() => {
      cy.get('[data-cy="password-input"]').type("pass");
      cy.get('[data-cy="continue-button"]').contains("Continue").click();
    });

    it("shows an error message ", () => {
      cy.get('[data-cy="password-error"]').contains(
        "Password must be 8 characters or more"
      );
      cy.get('[data-cy="password-error"]').should(
        "have.css",
        "color",
        "rgb(212, 53, 28)"
      );
    });

    it("shows an error summary ", () => {
      cy.get('[data-cy="password-error-summary"]').contains(
        "There is a problem"
      );
      cy.get('[data-cy="password-error-summary"]').contains(
        "Password must be 8 characters or more"
      );
      cy.get('[data-cy="password-error-summary"]').should(
        "have.css",
        "border-color",
        "rgb(212, 53, 28)"
      );
    });

    it("changes the border colour of the input fields", () => {
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
    });

    it("adds an aria describe by attribute", () => {
      cy.get('[data-cy="password-input"]').should(
        "have.attr",
        "aria-describedby",
        "password-hint password-error"
      );
    });
  });

  context(
    "password doesn't contain at least one number and one special character",
    () => {
      beforeEach(() => {
        cy.get('[data-cy="password-input"]').type("password");
        cy.get('[data-cy="continue-button"]').contains("Continue").click();
      });

      it("shows an error message", () => {
        cy.get('[data-cy="password-error"]').contains(
          "Enter a password with at least one number and one special character"
        );
        cy.get('[data-cy="password-error"]').should(
          "have.css",
          "color",
          "rgb(212, 53, 28)"
        );
      });

      it("shows an error summary", () => {
        cy.get('[data-cy="password-error-summary"]').contains(
          "There is a problem"
        );
        cy.get('[data-cy="password-error-summary"]').contains(
          "Enter a password with at least one number and one special character"
        );
        cy.get('[data-cy="password-error-summary"]').should(
          "have.css",
          "border-color",
          "rgb(212, 53, 28)"
        );
      });

      it("changes the border colour of the input fields", () => {
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
      });
      it("adds an aria describe by attribute", () => {
        cy.get('[data-cy="password-input"]').should(
          "have.attr",
          "aria-describedby",
          "password-hint password-error"
        );
      });
    }
  );

  context("password doesn't contain at least one number", () => {
    beforeEach(() => {
      cy.get('[data-cy="password-input"]').type("password@");
      cy.get('[data-cy="continue-button"]').contains("Continue").click();
    });

    it("shows an error message", () => {
      cy.get('[data-cy="password-error"]').contains(
        "Enter a password with at least one number and one special character"
      );
      cy.get('[data-cy="password-error"]').should(
        "have.css",
        "color",
        "rgb(212, 53, 28)"
      );
    });

    it("shows an error summary", () => {
      cy.get('[data-cy="password-error-summary"]').contains(
        "There is a problem"
      );
      cy.get('[data-cy="password-error-summary"]').contains(
        "Enter a password with at least one number and one special character"
      );
      cy.get('[data-cy="password-error-summary"]').should(
        "have.css",
        "border-color",
        "rgb(212, 53, 28)"
      );
    });

    it("changes the border colour of the input fields", () => {
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
    });

    it("adds an aria describe by attribute", () => {
      cy.get('[data-cy="password-input"]').should(
        "have.attr",
        "aria-describedby",
        "password-hint password-error"
      );
    });
  });

  context("password doesn't contain at least one special character", () => {
    beforeEach(() => {
      cy.get('[data-cy="password-input"]').type("password1");
      cy.get('[data-cy="continue-button"]').contains("Continue").click();
    });

    it("shows an error message", () => {
      cy.get('[data-cy="password-error"]').contains(
        "Enter a password with at least one number and one special character"
      );
      cy.get('[data-cy="password-error"]').should(
        "have.css",
        "color",
        "rgb(212, 53, 28)"
      );
    });

    it("shows an error summary", () => {
      cy.get('[data-cy="password-error-summary"]').contains(
        "There is a problem"
      );
      cy.get('[data-cy="password-error-summary"]').contains(
        "Enter a password with at least one number and one special character"
      );
      cy.get('[data-cy="password-error-summary"]').should(
        "have.css",
        "border-color",
        "rgb(212, 53, 28)"
      );
    });

    it("changes the border colour of the input fields", () => {
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
    });

    it("adds an aria describe by attribute", () => {
      cy.get('[data-cy="password-input"]').should(
        "have.attr",
        "aria-describedby",
        "password-hint password-error"
      );
    });
  });

  context("passwords don't match", () => {
    beforeEach(() => {
      cy.get('[data-cy="password-input"]').type("Type!1day");
      cy.get('[data-cy="confirm-password-input"]').type("Type!t2tt");
      cy.get('[data-cy="continue-button"]').contains("Continue").click();
    });

    it("shows an error message", () => {
      cy.get('[data-cy="password-error"]').contains(
        "Both passwords should match"
      );
      cy.get('[data-cy="password-error"]').should(
        "have.css",
        "color",
        "rgb(212, 53, 28)"
      );
    });

    it("shows an error summary", () => {
      cy.get('[data-cy="password-error-summary"]').contains(
        "There is a problem"
      );
      cy.get('[data-cy="password-error-summary"]').contains(
        "Both passwords should match"
      );
      cy.get('[data-cy="password-error-summary"]').should(
        "have.css",
        "border-color",
        "rgb(212, 53, 28)"
      );
    });

    it("changes the border colour of the input fields", () => {
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
    });

    it("adds an aria describe by attribute", () => {
      cy.get('[data-cy="password-input"]').should(
        "have.attr",
        "aria-describedby",
        "password-hint password-error"
      );
    });
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
    cy.get('[data-cy="password-input"]').clear().type("Type!1day");
    cy.get('[data-cy="confirm-password-input"]').clear().type("Type!1day");
    cy.get('[data-cy="continue-button"]').contains("Continue").click();
    cy.url().should("eq", "http://localhost:3000/document-list");
  });

  context("enter is pressed on keyboard", () => {
    it("shows an error when password is only typed on first input", () => {
      cy.get('[data-cy="password-input"]').clear().type("Type{enter}");
      cy.get('[data-cy="password-error"]').contains(
        "Password must be 8 characters or more"
      );
      cy.get('[data-cy="password-error"]').should(
        "have.css",
        "color",
        "rgb(212, 53, 28)"
      );
    });

    it("shows an error when password typed on both inputs but incorrect requirements", () => {
      cy.get('[data-cy="password-input"]').clear().type("Typesadas2^");
      cy.get('[data-cy="confirm-password-input"]')
        .clear()
        .type("Type!1day{enter}");
      cy.get('[data-cy="password-error"]').contains(
        "Both passwords should match"
      );
      cy.get('[data-cy="password-error"]').should(
        "have.css",
        "color",
        "rgb(212, 53, 28)"
      );
    });

    it("moves to next page when pressing enter after matching passwords are typed", () => {
      cy.get('[data-cy="password-input"]').clear().type("Type!1day");
      cy.get('[data-cy="confirm-password-input"]')
        .clear()
        .type("Type!1day{enter}");
      cy.url().should("eq", "http://localhost:3000/document-list");
    });
  });
});
