describe('address page', () => {
    it('displays postcode page content', () => {
        cy.visit('http://localhost:3000/postcode.html')
      cy.contains('Postcode')
      cy.contains('Address')
    })
    it('initially shows postcode input', () => {
        cy.visit('http://localhost:3000/postcode.html')
        cy.get('[data-cy="postcode-input"]').should("not.have.class", "no-display");
        cy.get('[data-cy="address-select"]').should("have.class", "no-display");
        cy.get('[data-cy="address-manual-entry"]').should("have.class", "no-display");
    })
    it('clicking find address button causes display to change to address selection', () => {
        cy.visit('http://localhost:3000/postcode.html')
        cy.get('[data-cy="find-address-button"]').click()
        cy.get('[data-cy="postcode-input"]').should("have.class", "no-display");
        cy.get('[data-cy="address-select"]').should("not.have.class", "no-display");
        cy.get('[data-cy="address-manual-entry"]').should("have.class", "no-display");
    })
    it('clicking change button causes display to change back to postcode input', () => {
        cy.visit('http://localhost:3000/postcode.html')
        cy.get('[data-cy="find-address-button"]').click()
        cy.get('[data-cy="change-postcode-button"]').click()
        cy.get('[data-cy="postcode-input"]').should("not.have.class", "no-display");
        cy.get('[data-cy="address-select"]').should("have.class", "no-display");
        cy.get('[data-cy="address-manual-entry"]').should("have.class", "no-display");
    })
    it('clicking cant find address causes display to change manual address input', () => {
        cy.visit('http://localhost:3000/postcode.html')
        cy.get('[data-cy="find-address-button"]').click()
        cy.get('[data-cy="cannot-find-address"]').click()
        cy.get('[data-cy="postcode-input"]').should("have.class", "no-display");
        cy.get('[data-cy="address-select"]').should("have.class", "no-display");
        cy.get('[data-cy="address-manual-entry"]').should("not.have.class", "no-display");
    })
    it('clicking continue on address select page links to date of birth page', () => {
        cy.visit('http://localhost:3000/postcode.html')
        cy.get('[data-cy="find-address-button"]').click()
        cy.get('[data-cy="submit-address-selection"]').click()
        cy.url().should('include', '/date-of-birth.html')
    })
    it('clicking continue on manual address entry page links to date of birth page', () => {
        cy.visit('http://localhost:3000/postcode.html')
        cy.get('[data-cy="find-address-button"]').click()
        cy.get('[data-cy="cannot-find-address"]').click()
        cy.get('[data-cy="submit-manual-address"]').click()
        cy.url().should('include', '/date-of-birth.html')
    })
  })
