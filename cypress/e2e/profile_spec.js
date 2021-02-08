describe('The Profile Page', () => {
  it('successfully loads', () => {
    cy.visit("http://localhost:8080/profile") 
  })

  it("should go to the profile page", () => {
    cy.visit("/");
    cy.findByText(/bookings/).click();
    cy.url().should("include", "/profile");
  });
})