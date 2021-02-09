describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit("http://localhost:8080") 
  })

  it("should go to the home page", () => {
    cy.visit("/home");
    cy.findAllByText("About");
    cy.url().should("include", "/home");
  });
})