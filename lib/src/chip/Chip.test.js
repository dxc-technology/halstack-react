import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcChip from "./Chip.tsx";
import { axe, toHaveNoViolations } from "jest-axe";

describe("Chip component tests", () => {
  test("Chip renders with correct text", () => {
    const { getByText } = render(<DxcChip label="Chip" />);
    expect(getByText("Chip")).toBeTruthy();
  });

  test("Calls correct function when clicking on prefix icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(
      <DxcChip
        label="Chip"
        prefixIcon="https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/images/icon-and-image-large-icon-settings_2x.png"
        onClickPrefix={onClick}
      />
    );
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("img"));
    expect(onClick).toHaveBeenCalled();
  });

  test("Calls correct function when clicking on suffix icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(
      <DxcChip
        label="Chip"
        suffixIcon="https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/images/icon-and-image-large-icon-settings_2x.png"
        onClickSuffix={onClick}
      />
    );
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("img"));
    expect(onClick).toHaveBeenCalled();
  });
});

expect.extend(toHaveNoViolations);

it("should not have basic accessibility issues", async () => {
  const { container } = render(<DxcChip label="Chip" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
