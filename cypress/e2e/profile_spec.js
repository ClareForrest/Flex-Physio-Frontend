describe('The Profile Page', () => {
  it('successfully loads', () => {
    cy.visit("http://localhost:8080/profile") 
  })

  it("should go to the profile page", () => {
    cy.visit("/");
    cy.findByText(/profile/).click();
    cy.url().should("include", "/profile");
  });
})