import React from "react";
import { render } from "@testing-library/react";
import DxcStatusLight from "./StatusLight.tsx";
import { axe, toHaveNoViolations } from "jest-axe";

describe("StatusLight component tests", () => {
  test("StatusLight renders with correct label", () => {
    const { getByText } = render(<DxcStatusLight label="Status Light Test"></DxcStatusLight>);
    expect(getByText("Status Light Test")).toBeTruthy();
  });

  test("StatusLight applies accessibility attributes", () => {
    const { getByTestId } = render(<DxcStatusLight label="Status Light Test" />);
    const statusLightContainer = getByTestId("status_light-container");
    const statusDot = getByTestId("status-dot");
    expect(statusLightContainer.getAttribute("aria-label")).toBe("default: Status Light Test");
    expect(statusDot.getAttribute("aria-hidden")).toBe("true");
  });
});

expect.extend(toHaveNoViolations);

it("should not have basic accessibility issues", async () => {
  const { container } = render(<DxcStatusLight label="Status Light Test"></DxcStatusLight>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
