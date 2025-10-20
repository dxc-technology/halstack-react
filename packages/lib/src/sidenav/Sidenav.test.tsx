import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import DxcSidenav from "./Sidenav";
import DxcContextualMenu from "../contextual-menu/ContextualMenu";

jest.mock("../contextual-menu/ContextualMenu", () => jest.fn(() => <div data-testid="mock-menu" />));

describe("DxcSidenav component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Sidenav renders title and children correctly", () => {
    const { getByText, getByRole } = render(
      <DxcSidenav title="Main Menu">
        <p>Custom child content</p>
      </DxcSidenav>
    );

    expect(getByText("Main Menu")).toBeTruthy();
    expect(getByText("Custom child content")).toBeTruthy();
    const collapseButton = getByRole("button", { name: "Collapse" });
    expect(collapseButton).toBeTruthy();
  });

  test("Sidenav collapses and expands correctly on button click", () => {
    const { getByRole } = render(<DxcSidenav title="Main Menu" />);

    const collapseButton = getByRole("button", { name: "Collapse" });
    expect(collapseButton).toBeTruthy();
    fireEvent.click(collapseButton);
    const expandButton = getByRole("button", { name: "Expand" });
    expect(expandButton).toBeTruthy();
    fireEvent.click(expandButton);
  });

  test("renders logo correctly when provided", () => {
    const logo = { src: "logo.png", alt: "Company Logo", href: "https://example.com" };
    const { getByRole, getByAltText } = render(<DxcSidenav title="App" logo={logo} />);

    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(getByAltText("Company Logo")).toBeTruthy();
  });

  test("renders contextual menu with items", () => {
    const items = [{ label: "Dashboard" }, { label: "Settings" }];
    const { getByTestId } = render(<DxcSidenav items={items} />);
    expect(getByTestId("mock-menu")).toBeTruthy();
    expect(DxcContextualMenu).toHaveBeenCalledWith(
      expect.objectContaining({
        items,
        displayGroupLines: false,
        displayControlsAfter: true,
        displayBorder: false,
      }),
      {}
    );
  });

  test("renders children using function pattern", () => {
    const childFn = jest.fn((expanded) => <div>{expanded ? "Expanded content" : "Collapsed content"}</div>);

    const { getByText, getByRole } = render(<DxcSidenav>{childFn}</DxcSidenav>);
    expect(getByText("Expanded content")).toBeTruthy();
    expect(childFn).toHaveBeenCalledWith(true);
    const collapseButton = getByRole("button", { name: "Collapse" });
    expect(collapseButton).toBeTruthy();
    fireEvent.click(collapseButton);
    expect(childFn).toHaveBeenCalledWith(false);
  });
});
