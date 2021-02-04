describe("login form", () => {
  it("renders email and password inputs", () => {
    cy.visit("/login")
    cy.findByLabelText(/email/i).should("be.visible")
  })
})

describe("clicking on login", () => {
  it("should go to the login page", () => {
    cy.visit("/");
    cy.findByText(/login/).click();
    cy.url().should("include", "/login");
  });
  it("should render email and password inputs", () => {
    cy.findByLabelText(/email/i).should("exist");
    cy.findByLabelText(/password/i).should("exist");
  });
});