import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcButtonLink from "./ButtonLink";

describe("ButtonLink component tests", () => {
  test("Calls correct function on click", async () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcButtonLink label="Button Link" href="#" onClick={onClick} />);
    const buttonLink = getByText("Button Link");
    await userEvent.click(buttonLink);
    expect(onClick).toHaveBeenCalled();
    expect(getByRole("button")).toBeTruthy();
  });
  test("Check button Link href and role attributes", () => {
    const { getByRole } = render(<DxcButtonLink label="Button Link" href="www.test.com" />);
    expect(getByRole("link")).toBeTruthy();
    expect(getByRole("link")).toHaveAttribute("href", "www.test.com");
  });
  test("Href works as a disabled button", () => {
    const { getByRole } = render(<DxcButtonLink label="Button Link" href="www.test.com" disabled />);
    const buttonLink = getByRole("link");
    expect(buttonLink).not.toHaveAttribute("href");
    expect(buttonLink).toHaveAttribute("aria-disabled", "true");
  });
  test("ButtonLink onClick does not fire when disabled", async () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcButtonLink label="Button Link" href="#" onClick={onClick} disabled />);
    const buttonLink = getByText("Button Link");
    await userEvent.click(buttonLink);
    expect(onClick).not.toHaveBeenCalled();
  });
});
