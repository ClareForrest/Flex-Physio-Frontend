describe('The Bookings Page', () => {
  it('successfully loads', () => {
    cy.visit("http://localhost:8080/bookings") 
  })

  it("should go to the create bookings page", () => {
    cy.visit("/");
    cy.findByText(/bookings/).click();
    cy.url().should("include", "/bookings");
  });
})