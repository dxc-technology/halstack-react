import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcWizard from "./Wizard.tsx";

describe("Wizard component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcWizard
        steps={[
          {
            label: "first-step",
          },
          {
            label: "second-step",
          },
        ]}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
