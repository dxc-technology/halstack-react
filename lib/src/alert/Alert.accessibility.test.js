import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcAlert from "./Alert.tsx";

describe("Alert component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcAlert type="info" inlineText="info-alert-text" margin="small" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});