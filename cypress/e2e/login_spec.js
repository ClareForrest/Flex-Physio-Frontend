describe("login form", () => {
  it("renders email and password inputs", () => {
    cy.visit("/login")
    cy.findByLabelText(/email/i).should("be.visible")
  })
})

describe('logs in', () => {
  it('using UI', () => {
    cy.visit('/login')
    cy.location('pathname').should('equal', '/login')

    // enter valid username and password
    cy.get('[name=email]').type('olivia@hotmail.com')
    cy.get('[name=password]').type('123456')
    cy.contains('button', 'Login').click()
    cy.location('pathname').should('equal', '/')
  })

  it('Does not log in with invalid password', () => {
    cy.visit('/login')
    cy.location('pathname').should('equal', '/login')

    // enter valid username and wrong password
    cy.get('[name=email]').type('olivia@hotmail.com')
    cy.get('[name=password]').type('wrong-password')
    cy.contains('button', 'Login').click()

  })
})
