import React from "react";
import { render } from "@testing-library/react";
import DxcBreadcrumbs from "./Breadcrumbs";
import userEvent from "@testing-library/user-event";

global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

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
    const { getByText, getByRole } = render(<DxcBreadcrumbs items={items} />);
    const breadcrumbs = getByRole("navigation");
    expect(breadcrumbs.getAttribute("aria-label")).toBe("Breadcrumbs");
    expect(getByText("Dark Mode").parentElement.getAttribute("aria-current")).toBe("page");
  });
  test("Collapsed variant renders all the items inside the dropdown menu except the root and the current page", async () => {
    const { queryByText, getByText, getByRole } = render(<DxcBreadcrumbs items={items} itemsBeforeCollapse={3} />);
    const dropdown = getByRole("button");
    expect(queryByText("User Menu")).toBeFalsy();
    expect(queryByText("Preferences")).toBeFalsy();
    await userEvent.click(dropdown);
    expect(getByText("User Menu")).toBeTruthy();
    expect(getByText("Preferences")).toBeTruthy();
  });
  test("Collapsed variant, with show root set to false, renders all the items inside the dropdown menu except the current page", async () => {
    const { queryByText, getByText, getByRole } = render(<DxcBreadcrumbs items={items} itemsBeforeCollapse={3} showRoot={false} />);
    const dropdown = getByRole("button");
    expect(queryByText("Home")).toBeFalsy();
    expect(queryByText("User Menu")).toBeFalsy();
    expect(queryByText("Preferences")).toBeFalsy();
    await userEvent.click(dropdown);
    expect(getByText("Home")).toBeTruthy();
    expect(getByText("User Menu")).toBeTruthy();
    expect(getByText("Preferences")).toBeTruthy();
  });
  test("If itemsBeforeCollapse value is below two, ignores it and renders a collapsed variant", async () => {
    const { getByText, getByRole } = render(<DxcBreadcrumbs items={items} itemsBeforeCollapse={-1} />);
    expect(getByText("Home")).toBeTruthy();
    expect(getByRole("button")).toBeTruthy();
    expect(getByText("Dark Mode")).toBeTruthy();
  });
});
