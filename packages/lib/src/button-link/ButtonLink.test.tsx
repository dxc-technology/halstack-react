import "@testing-library/jest-dom";
import { createRef } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcButtonLink from "./ButtonLink";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

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
  test("Opens in the same window by default and in a new one with newWindow", () => {
    const { getByRole, rerender } = render(<DxcButtonLink label="Button Link" href="#" />);
    expect(getByRole("link")).toHaveAttribute("target", "_self");
    rerender(<DxcButtonLink label="Button Link" href="#" newWindow />);
    expect(getByRole("link")).toHaveAttribute("target", "_blank");
  });
  test("Uses tabIndex 0 by default, the provided value otherwise, and -1 when disabled", () => {
    const { getByRole, rerender } = render(<DxcButtonLink label="Button Link" href="#" />);
    expect(getByRole("link")).toHaveAttribute("tabindex", "0");
    rerender(<DxcButtonLink label="Button Link" href="#" tabIndex={3} />);
    expect(getByRole("link")).toHaveAttribute("tabindex", "3");
    rerender(<DxcButtonLink label="Button Link" href="#" tabIndex={3} disabled />);
    expect(getByRole("link")).toHaveAttribute("tabindex", "-1");
  });
  test("Uses the label as aria-label and falls back to the title when there is no label", () => {
    const { getByRole, rerender } = render(<DxcButtonLink label="Button Link" href="#" title="Go home" />);
    expect(getByRole("link")).toHaveAttribute("aria-label", "Button Link");
    rerender(<DxcButtonLink href="#" icon="home" title="Go home" />);
    expect(getByRole("link")).toHaveAttribute("aria-label", "Go home");
  });
  test("Renders string icons as a Material Symbol and SVG icons as provided", () => {
    const { container, rerender } = render(<DxcButtonLink label="Button Link" href="#" icon="home" />);
    expect(container.querySelector('[role="img"]')).toBeInTheDocument();
    rerender(<DxcButtonLink label="Button Link" href="#" icon={<svg data-testid="custom-icon" />} />);
    expect(container.querySelector('[data-testid="custom-icon"]')).toBeInTheDocument();
  });
  test("Forwards the ref to the anchor element", () => {
    const ref = createRef<HTMLAnchorElement>();
    const { getByRole } = render(<DxcButtonLink label="Button Link" href="#" ref={ref} />);
    expect(ref.current).toBe(getByRole("link"));
  });
  test("Shows the title as a tooltip on hover when enabled", async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<DxcButtonLink label="Button Link" href="#" title="Button tooltip" />);
    await user.hover(getByRole("link"));
    expect(await screen.findByRole("tooltip", { name: "Button tooltip" })).toBeInTheDocument();
  });
  test("Does not show the title tooltip when disabled", async () => {
    const user = userEvent.setup();
    const { getByRole, queryByRole } = render(
      <DxcButtonLink label="Button Link" href="#" title="Button tooltip" disabled />
    );
    await user.hover(getByRole("link"));
    await waitFor(() => {
      expect(queryByRole("tooltip")).toBeFalsy();
    });
  });
});
