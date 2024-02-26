import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcTag from "./Tag.tsx";

describe("Tag component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcTag label="tag-test"></DxcTag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
