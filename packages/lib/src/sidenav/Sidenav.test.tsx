import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import DxcSidenav from "./Sidenav";
import { ReactNode } from "react";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("DxcSidenav component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Sidenav renders title and children correctly", () => {
    const { getByText, getByRole } = render(
      <DxcSidenav
        branding={{ appTitle: "Main Menu" }}
        topContent={<p>Custom top content</p>}
        bottomContent={<p>Custom bottom content</p>}
      />
    );

    expect(getByText("Main Menu")).toBeTruthy();
    expect(getByText("Custom top content")).toBeTruthy();
    expect(getByText("Custom bottom content")).toBeTruthy();
    const collapseButton = getByRole("button", { name: "Collapse" });
    expect(collapseButton).toBeTruthy();
  });

  test("Sidenav collapses and expands correctly on button click", () => {
    const { getByRole } = render(<DxcSidenav branding={{ appTitle: "Main Menu" }} />);

    const collapseButton = getByRole("button", { name: "Collapse" });
    expect(collapseButton).toBeTruthy();
    fireEvent.click(collapseButton);
    const expandButton = getByRole("button", { name: "Expand" });
    expect(expandButton).toBeTruthy();
    fireEvent.click(expandButton);
  });

  test("Sidenav renders logo correctly when provided", () => {
    const logo = { src: "logo.png", alt: "Company Logo", href: "https://example.com" };
    const { getByRole, getByAltText } = render(<DxcSidenav branding={{ appTitle: "App", logo: logo }} />);

    const link = getByRole("link");
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(getByAltText("Company Logo")).toBeTruthy();
  });

  test("Sidenav renders contextual menu with items", () => {
    const items = [{ label: "Dashboard" }, { label: "Settings" }];
    const { getByText } = render(<DxcSidenav navItems={items} />);
    expect(getByText("Dashboard")).toBeTruthy();
    expect(getByText("Settings")).toBeTruthy();
  });

  test("Sidenav renders link items correctly", () => {
    const navItems = [{ label: "Dashboard", href: "/dashboard" }];

    const { getByRole } = render(<DxcSidenav navItems={navItems} />);

    const link = getByRole("link", { name: "Dashboard" });
    expect(link).toHaveAttribute("href", "/dashboard");
  });

  test("Sidenav calls renderItem correctly", () => {
    const CustomComponent = ({ children }: { children: ReactNode }) => (
      <div data-testid="custom-wrapper">{children}</div>
    );

    const customGroupItems = [
      {
        label: "Introduction",
        href: "/overview/introduction",
        selected: false,
        renderItem: ({ children }: { children: ReactNode }) => <CustomComponent>{children}</CustomComponent>,
      },
    ];

    const { getByTestId } = render(<DxcSidenav navItems={customGroupItems} />);
    expect(getByTestId("custom-wrapper")).toBeInTheDocument();
  });

  test("Sidenav uses controlled expanded prop instead of internal state", () => {
    const onExpandedChange = jest.fn();
    const { getByRole, rerender } = render(
      <DxcSidenav branding={{ appTitle: "Controlled Menu" }} expanded={false} onExpandedChange={onExpandedChange} />
    );

    const expandButton = getByRole("button", { name: "Expand" });
    expect(expandButton).toBeTruthy();

    fireEvent.click(expandButton);
    expect(onExpandedChange).toHaveBeenCalledWith(true);

    rerender(
      <DxcSidenav branding={{ appTitle: "Controlled Menu" }} expanded={true} onExpandedChange={onExpandedChange} />
    );

    const collapseButton = getByRole("button", { name: "Collapse" });
    expect(collapseButton).toBeTruthy();
  });

  test("Sidenav toggles internal state correctly", () => {
    const { getByRole } = render(<DxcSidenav branding={{ appTitle: "App" }} defaultExpanded={false} />);

    const expandButton = getByRole("button", { name: "Expand" });
    expect(expandButton).toBeTruthy();

    fireEvent.click(expandButton);
    const collapseButton = getByRole("button", { name: "Collapse" });
    expect(collapseButton).toBeTruthy();
  });
});
