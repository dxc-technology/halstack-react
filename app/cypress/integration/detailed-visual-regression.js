describe("Checkbox", () => {
  it("should be publicly accessible", () => {
    cy.visit("http://localhost:3000").then(() => {
      const linksArray = Cypress.$("#links-list a");
      if (linksArray.length) {
        cy.wrap(linksArray).each(link => {
          const componentName = link.text();
          cy.wrap(link)
            .click()
            .then(() => {
              const testCasesArray = Cypress.$("#tests-container .test-case");
              if (testCasesArray.length) {
                cy.wrap(testCasesArray).each(testCase => {
                  const testCaseId = testCase.attr("id");
                  cy.wrap(testCase).matchImageSnapshot(
                    `${componentName} - ${testCaseId}`
                  );
                });
              }
            });
        });
      }
    });
  });
});
