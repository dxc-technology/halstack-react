import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcBreadcrumbs from "./Breadcrumbs";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "User Menu",
    href: "",
  },
  {
    label: "Preferences",
    href: "",
  },
  {
    label: "Dark Mode",
    href: "",
  },
];

describe("Breadcrumbs component tests", () => {
  test("Renders with correct aria accessibility attributes", () => {
    const { getByText, getByRole } = render(<DxcBreadcrumbs items={items} ariaLabel="example" />);
    const breadcrumbs = getByRole("navigation");
    expect(breadcrumbs.getAttribute("aria-label")).toBe("example");
    expect(getByText("Dark Mode").parentElement?.getAttribute("aria-current")).toBe("page");
  });
  test("Collapsed variant renders all the items inside the dropdown menu except the root and the current page", () => {
    const { queryByText, getByText, getByRole } = render(<DxcBreadcrumbs items={items} itemsBeforeCollapse={3} />);
    const dropdown = getByRole("button");
    expect(queryByText("User Menu")).toBeFalsy();
    expect(queryByText("Preferences")).toBeFalsy();
    userEvent.click(dropdown);
    expect(getByText("User Menu")).toBeTruthy();
    expect(getByText("Preferences")).toBeTruthy();
  });
  test("Collapsed variant, with show root set to false, renders all the items inside the dropdown menu except the current page", () => {
    const { queryByText, getByText, getByRole } = render(
      <DxcBreadcrumbs items={items} itemsBeforeCollapse={3} showRoot={false} />
    );
    const dropdown = getByRole("button");
    expect(queryByText("Home")).toBeFalsy();
    expect(queryByText("User Menu")).toBeFalsy();
    expect(queryByText("Preferences")).toBeFalsy();
    userEvent.click(dropdown);
    expect(getByText("Home")).toBeTruthy();
    expect(getByText("User Menu")).toBeTruthy();
    expect(getByText("Preferences")).toBeTruthy();
  });
  test("If itemsBeforeCollapse value is below two, ignores it and renders a collapsed variant", () => {
    const { getByText, getByRole } = render(<DxcBreadcrumbs items={items} itemsBeforeCollapse={-1} />);
    expect(getByText("Home")).toBeTruthy();
    expect(getByRole("button")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
  });
  test("The onClick prop from an item is properly called", () => {
    const onItemClick = jest.fn();
    const { getByText } = render(
      <DxcBreadcrumbs
        onItemClick={onItemClick}
        items={[
          { label: "Home", href: "/home" },
          { label: "Preferences", href: "/preferences" },
        ]}
      />
    );
    userEvent.click(getByText("Home"));
    expect(onItemClick).toHaveBeenCalledWith("/home");
  });
  test("The onClick prop from an item is properly called (collapsed)", () => {
    const onItemClick = jest.fn();
    const { getByText, getByRole } = render(
      <DxcBreadcrumbs
        onItemClick={onItemClick}
        items={[
          { label: "Home", href: "/" },
          { label: "Preferences", href: "/" },
          { label: "Dark Mode", href: "/" },
        ]}
        itemsBeforeCollapse={2}
      />
    );
    userEvent.click(getByRole("button"));
    userEvent.click(getByText("Preferences"));
    expect(onItemClick).toHaveBeenCalledWith("/");
  });
  test("handleOnClick prevents default and calls onClick when href is provided", () => {
    const onItemClick = jest.fn();
    const { getByText } = render(
      <DxcBreadcrumbs
        onItemClick={onItemClick}
        items={[
          { label: "Home", href: "/home" },
          { label: "Current Page", href: "" },
        ]}
      />
    );
    const homeLink = getByText("Home");
    userEvent.click(homeLink);
    expect(onItemClick).toHaveBeenCalledWith("/home");
  });
  test("handleOnMouseEnter sets title when text overflows", () => {
    const { getByText } = render(
      <DxcBreadcrumbs
        items={[
          { label: "Home", href: "/home" },
          { label: "Very Long Current Page Label That Should Overflow", href: "" },
        ]}
      />
    );

    const currentPageElement = getByText("Very Long Current Page Label That Should Overflow");

    // Mock element dimensions to simulate overflow
    Object.defineProperty(currentPageElement, "scrollWidth", { value: 200, configurable: true });
    Object.defineProperty(currentPageElement, "clientWidth", { value: 100, configurable: true });

    // Simulate mouse enter
    userEvent.hover(currentPageElement);

    // Check if title is set when there's overflow
    expect(currentPageElement.title).toBe("Very Long Current Page Label That Should Overflow");
  });
});
