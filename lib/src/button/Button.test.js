import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcButton from "./Button.tsx";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Button component tests", () => {
  test("Button renders with correct text", () => {
    const { getByText } = render(<DxcButton label="Button" />);
    expect(getByText("Button")).toBeTruthy();
  });

  test("Calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcButton label="Button" onClick={onClick} />);

    const button = getByText("Button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });

  test("Renders with correct accessibility attributes", () => {
    const { getByRole } = render(<DxcButton label="Home" title="Go home" tabIndex={1} />);

    const button = getByRole("button");
    expect(button.getAttribute("aria-label")).toBe("Go home");
    expect(button.getAttribute("title")).toBe("Go home");
    expect(button.getAttribute("tabindex")).toBe("1");
  });
});

expect.extend(toHaveNoViolations);

it("should not have basic accessibility issues", async () => {
  const { container } = render(<DxcButton label="Button" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
