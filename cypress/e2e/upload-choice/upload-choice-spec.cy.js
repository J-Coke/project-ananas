describe("name page", () => {
  beforeEach(() => {
    cy.visit("/upload-choice");
  });

  context("back link", () => {
    beforeEach(() => {
      cy.get('[data-testid="choice-back-link"]').as("button");
    });

    it("displays", () => {
      cy.get("@button").should("be.visible");
    });

    it("says 'Back'", () => {
      cy.contains("Back");
    });

    it("links to the right page", () => {
      cy.get("@button").click();
      cy.url().should("eq", "http://localhost:3000/upload-choice/#");
    });
  });

  context("titles", () => {
    beforeEach(() => {
      cy.get('[data-testid="choice-title"]').as("title");
      cy.get('[data-testid="choice-subtitle"]').as("subtitle");
    });

    it("displays", () => {
      cy.get("@title").should("be.visible");
      cy.get("@subtitle").should("be.visible");
    });

    it("has a title that says 'Upload'", () => {
      cy.get("@title").contains("Upload");
    });

    it("has a subtitle that says 'Do you want to upload a'", () => {
      cy.get("@subtitle").contains("Do you want to upload a");
    });
  });

  context("radios", () => {
    beforeEach(() => {
      cy.get("[data-testid=birth-certificate").as("birth");
      cy.get("[data-testid=marriage-civil-certificate").as("marriage-civil");
    });

    it("displays", () => {
      cy.get("@birth").should("be.visible");
      cy.get("@marriage-civil").should("be.visible");
    });

    it("has an option saying 'Birth certificate'", () => {
      cy.get("@birth").contains("Birth certificate");
    });

    it("has an option saying 'Marriage/ civil partnership certificate'", () => {
      cy.get("@marriage-civil").contains(
        "Marriage/ civil partnership certificate"
      );
    });
  });

  context("continue button", () => {
    beforeEach(() => {
      cy.get('[data-testid="continue-button"]').as("button");
    });

    it("displays", () => {
      cy.get("@button").should("be.visible");
    });

    it("says 'Continue'", () => {
      cy.contains("Continue");
    });

    it("has a green background", () => {
      cy.get("@button").should(
        "have.css",
        "background-color",
        "rgb(0, 112, 60)"
      );
    });

    it("links to the right page", () => {
      cy.get("@button").click();
      cy.url().should("eq", "http://localhost:3000/upload-choice/#");
    });
  });
});
