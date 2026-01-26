import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcSidenav from "./Sidenav";
import DxcBadge from "../badge/Badge";
import { vi } from "vitest";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe("Sidenav component accessibility tests", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation(() => ({
        matches: false,
      })),
    });
  });
  it("Should not have basic accessibility issues", async () => {
    const groupItems = [
      {
        title: "Section 1",
        items: [
          {
            label: "Grouped Item 1",
            icon: "favorite",
            items: [
              { label: "Item 1", icon: "person" },
              {
                label: "Grouped Item 2",
                items: [
                  {
                    label: "Item 2",
                    icon: "bookmark",
                    badge: <DxcBadge color="primary" label="Experimental" />,
                  },
                  { label: "Selected Item 3", selected: true },
                ],
              },
            ],
            badge: <DxcBadge color="success" label="New" />,
          },
          { label: "Item 4", icon: "key" },
        ],
      },
      {
        title: "Section 2",
        items: [
          { label: "Item 5", icon: "person" },
          { label: "Grouped Item 6", items: [{ label: "Item 7", icon: "person" }, { label: "Item 8" }] },
          { label: "Item 9" },
        ],
      },
    ];
    const { container } = render(
      <DxcSidenav navItems={groupItems} appTitle="Application Name" searchBar={{ placeholder: "Search..." }} />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
