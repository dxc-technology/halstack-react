import React from "react";
import { render, fireEvent, getByRole } from "@testing-library/react";
import DxcButton from "./Button.tsx";

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
    const { getByRole } = render(<DxcButton label="Home" title="Go home" />);

    const button = getByRole("button");
    expect(button.getAttribute("aria-label")).toBe("Go home");
    expect(button.getAttribute("title")).toBe("Go home");
  });
});
