import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcBox from "../card/Card.tsx";

describe("Box component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcBox>test-box</DxcBox>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
