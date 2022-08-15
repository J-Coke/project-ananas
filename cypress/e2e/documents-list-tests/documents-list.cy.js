describe("documents list page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/documents-list");
    });

    context("Save Progress button", () => {
      beforeEach(() => {
        cy.get('[data-testid="save-progress"]').as("button");
      });
    
      it("displays", () => {
        cy.get("@button").should("be.visible");
      });
    
      it("says 'Save Progress'", () => {
        cy.get("@button").contains("Save Progress");
      });
    });
});

// context("Save Progress button", () => {
//   beforeEach(() => {
//     cy.get('[data-testid="save-progress"]').as("button");
//   });

//   it("displays", () => {
//     cy.get("@button").should("be.visible");
//   });

//   it("says 'Save Progress'", () => {
//     cy.get("@button").contains("Save Progress");
//   });
// });

// describe('Checkbox field', () => {
//     it('checks all checkboxes with one command', () => {
//       cy
//       .get('#check input[type="checkbox"]')
//       .as('checkboxes')
//       .check()

//       .get('@checkboxes')
//       .each(checkbox => {
//         expect(checkbox[0].checked).to.equal(true)
//       })
//   });

//   it("displays Photo ID passport or drivers license", () => {
//     cy
//     .get('[type="checkbox"]').check('id')
//     cy.get("@label").should("be.visible");
//   });

//   it("has a label saying 'Photo ID'", () => {
//     cy.get("@label").contains("Photo ID passport or drivers license");
//   });
// });
