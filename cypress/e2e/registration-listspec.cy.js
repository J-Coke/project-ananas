describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/registration-list.html')
  })
})

describe('registration list page', () => {
  it('displays the title', () => {
    cy
    .visit('/public/registration-list.html')
    .contains('A list of things you will need to complete the registration')
  })
  it('displays first element of unordered list', () => {
    cy
    .visit('/public/registration-list.html')
    .get('ul li:first')
  })
  it('displays last element of unordered list', () => {
    cy
    .visit('/public/registration-list.html')
    .get('ul li:last')
  })
})

describe('continue button', () => {
  it('is a clickable button to continue to registration', () => {
    cy
    .visit('/public/registration-list.html')
    .get("button").contains("Continue")
    .url().should("include", "/#")
  })
})