describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/registration-list')
  })
})

describe('registration list page', () => {
  it('displays the title', () => {
    cy
    .visit('http://localhost:3000/registration-list')
    .contains('A list of things you will need to complete the registration')
  })
  it('displays first element of unordered list', () => {
    cy
    .visit('http://localhost:3000/registration-list')
    .get('ul li:first')
  })
  it('displays last element of unordered list', () => {
    cy
    .visit('http://localhost:3000/registration-list')
    .get('ul li:last')
  })
})

describe('continue button', () => {
  it('is a clickable button to continue to registration', () => {
    cy
    .visit('http://localhost:3000/registration-list')
    .get("button").contains("Continue").click()
    .url().should("include", "/name-page")
  })
})
