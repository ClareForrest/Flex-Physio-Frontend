describe("bookings form", () => {
  it("renders bookings form with 5 dropdown selector fields", () => {
    cy.visit("/bookings")
    cy.findByLabelText(/location/i).should("be.visible")
    cy.findByLabelText(/service/i).should("be.visible")
    cy.findByLabelText(/practitioner/i).should("be.visible")
    cy.findByLabelText(/date/i).should("be.visible")
    cy.findByLabelText(/time/i).should("be.visible")
  })
})