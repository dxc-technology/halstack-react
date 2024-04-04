import React from "react";
import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcIcon from "./Icon";

describe("Icon component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcIcon icon="home" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
