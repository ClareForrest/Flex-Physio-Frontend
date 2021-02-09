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


  it('successfully loads', () => {
    cy.visit("http://localhost:8080/profile") 
  })

  it("should go to the profile page", () => {
    cy.visit("/profile");
  });
})