describe("login form", () => {
  it("renders email and password inputs", () => {
    cy.visit("/login")
    cy.findByLabelText(/email/i).should("be.visible")
  })
})

// ** Nested too deeply in bootstrap Navbar. need matcher to find **

// describe("clicking on login", () => {
//   it("should go to the login page", () => {
//     cy.visit("/");
//     cy.findByText(/login/).click();
//     cy.url().should("include", "/login");
//   });
//   it("should render email and password inputs", () => {
//     cy.findByLabelText(/email/i).should("exist");
//     cy.findByLabelText(/password/i).should("exist");
//   });
// });

describe('logs in', () => {
  it('using UI', () => {
    cy.visit('/login')
    cy.location('pathname').should('equal', '/login')

    // enter valid username and password
    cy.get('[name=email]').type('olivia@hotmail.com')
    cy.get('[name=password]').type('123456')
    cy.contains('button', 'Login').click()

    // confirm we have logged in successfully
    cy.location('pathname').should('equal', '/')
    cy.contains('Our Physiotherpists')
    .should('be.visible')
    .then(() => {
    /* global window */
      const userString = window.localStorage.getItem('user')

      expect(userString).to.be.a('string')
      const user = JSON.parse(userString)

      expect(user).to.be.an('object')
      expect(user).to.have.keys([
        'id',
        'email', //was 'username',
        'firstName',
        'lastName',
        'token',
      ])

      expect(user.token).to.be.a('string')
    })

  it('fails to access protected resource', () => {
    cy.request({
      url: 'http://localhost:8080/bookings',
      failOnStatusCode: false,
    })
    .its('status')
    .should('equal', 401)
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
