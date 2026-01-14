import { render } from "@testing-library/react";
import { axe, formatRules } from "../../test/accessibility/axe-helper";
import DxcHeader from "./Header";
import rules from "../../test/accessibility/rules/specific/header/disabledRules";
import { vi } from "vitest";
import DxcBadge from "../badge/Badge";
import DxcButton from "../button/Button";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const disabledRules = {
  rules: formatRules(rules),
};

const appTitle =
  "Application Title with a very long name that exceeds the normal length to test how the header manages overflow situations";

const items = [
  {
    label: "Grouped Item 1",
    icon: "favorite",
    items: [
      { label: "Item 1", icon: "person", selected: true },
      {
        label: "Grouped Item 2",
        items: [
          {
            label: "Item 2",
            icon: "bookmark",
            badge: <DxcBadge color="primary" label="Experimental" />,
          },
          { label: "Selected Item 3" },
        ],
      },
    ],
    badge: <DxcBadge color="success" label="New" />,
  },
  { label: "Item 4", icon: "key" },
  { label: "Item 5", icon: "person" },
  { label: "Grouped Item 6", items: [{ label: "Item 7", icon: "person" }, { label: "Item 8" }] },
  { label: "Item 9" },
];

describe("Header component accessibility tests", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
      })),
    });
  });
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcHeader
        appTitle={appTitle}
        navItems={items}
        searchBar={{ placeholder: "Search" }}
        sideContent={
          <DxcButton title="Settings" icon="settings" mode="tertiary" size={{ height: "medium" }} onClick={() => {}} />
        }
      />
    );
    const results = await axe(container, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
});
