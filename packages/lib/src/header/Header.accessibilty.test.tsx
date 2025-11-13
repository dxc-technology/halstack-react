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

const iconSVG = (
  <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const iconUrl = "https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png";

const branding = {
  logo: {
    src: iconSVG,
    alt: "DXC Logo",
    href: iconUrl,
  },
  appTitle:
    "Application Title with a very long name that exceeds the normal length to test how the header manages overflow situations",
};

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
        branding={branding}
        navItems={items}
        sideContent={<DxcButton icon="settings" mode="tertiary" size={{ height: "medium" }} onClick={() => {}} />}
      />
    );
    const results = await axe(container, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
});
