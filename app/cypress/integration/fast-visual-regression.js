describe("Checkbox", () => {
  it("should be publicly accessible", () => {
    cy.visit("http://localhost:3000/all");
    cy.get("#tests-container").matchImageSnapshot("fast-visual-regression");
  });
});
