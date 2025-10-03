import { render } from "@testing-library/react";
import { axe, formatRules } from "../../test/accessibility/axe-helper";
import DxcBreadcrumbs from "./Breadcrumbs";
import rules from "../../test/accessibility/rules/specific/breadcrumbs/disabledRules";
import { vi } from "vitest";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const disabledRules = {
  rules: formatRules(rules),
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

describe("Breadcrumbs component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcBreadcrumbs items={items} ariaLabel="example" />);
    const results = await axe(container, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues when collapsed", async () => {
    const { container } = render(<DxcBreadcrumbs items={items} itemsBeforeCollapse={3} ariaLabel="example" />);
    const results = await axe(container, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues without root", async () => {
    const { container } = render(
      <DxcBreadcrumbs items={items} itemsBeforeCollapse={3} ariaLabel="example" showRoot={false} />
    );
    const results = await axe(container, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
});
