import React from "react";
import { render } from "@testing-library/react";
import DxcBox from "../card/Card.tsx";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Box component tests", () => {
  test("Box renders with correct text", () => {
    const { getByText } = render(<DxcBox>test-box</DxcBox>);
    expect(getByText("test-box")).toBeTruthy();
  });
});

expect.extend(toHaveNoViolations);

it("should not have basic accessibility issues", async () => {
  const { container } = render(<DxcBox>test-box</DxcBox>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
