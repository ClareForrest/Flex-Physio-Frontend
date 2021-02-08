// login just once using API
let user

before(function fetchUser () {
  cy.request('POST', 'http://localhost:8080/login', {
    email: Cypress.env('olivia@hotmail.com'),
    password: Cypress.env('123456'),
  })
  .its('body')
  .then((res) => {
    user = res
  })
})

// sets the user and authenticates before visiting the page
beforeEach(function setUser () {
  cy.visit('/', {
    onBeforeLoad (win) {
      win.localStorage.setItem('user', JSON.stringify(user))
    },
  })
  // the page should be opened and the user should be logged in
})

describe('JWT', () => {
  it('makes authenticated request', () => {
    cy.request({ 
      url: 'http://localhost:8080/login',
      auth: {
        bearer: user.token,
      },
    })
    .its('body')
    .should('deep.equal', [
      {
        id: 1,
        username: 'test',
        firstName: 'Test',
        lastName: 'User',
      },
    ])
  })

  it('is logged in', () => {
    cy.contains('Hi Test!').should('be.visible')
  })

  it('shows loaded user', () => {
    cy.contains('li', 'Test User').should('be.visible')
  })
})