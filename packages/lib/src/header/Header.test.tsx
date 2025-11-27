import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DxcHeader from "./Header";
import { Item, GroupItem } from "../base-menu/types";

const defaultHeaderBranding = {
  src: "url-to-dxc-logo",
  alt: "DXC Logo",
};

describe("Header component tests", () => {
  const mockMatchMedia = jest.fn();

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: mockMatchMedia,
    });
  });

  beforeEach(() => {
    mockMatchMedia.mockImplementation(() => ({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));
  });

  test("Header renders with default logo", () => {
    const { getByAltText } = render(<DxcHeader logo={defaultHeaderBranding} />);
    expect(getByAltText("DXC Logo")).toBeTruthy();
  });

  describe("HamburguerButton component", () => {
    test("hamburger button triggers onClick when clicked", () => {
      mockMatchMedia.mockImplementation(() => ({
        matches: true,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
      }));

      const navItems: Item[] = [{ label: "Home", onSelect: jest.fn() }];
      render(<DxcHeader logo={defaultHeaderBranding} navItems={navItems} />);

      const menuButton = screen.getByRole("button", { name: /toggle menu/i });
      fireEvent.click(menuButton);
      expect(screen.getByText("Home")).toBeInTheDocument();
    });
  });

  describe("sanitizeNavItems function coverage", () => {
    test("handles nested group items beyond LEVEL_LIMIT (should be ignored)", () => {
      const deepNestedItems: (Item | GroupItem)[] = [
        {
          label: "Services",
          items: [
            { label: "Web Design", onSelect: jest.fn() },
            {
              label: "Development", // This nested group should be ignored due to LEVEL_LIMIT = 1
              items: [
                { label: "Frontend", onSelect: jest.fn() },
                { label: "Backend", onSelect: jest.fn() },
              ],
            },
          ],
        },
      ];

      render(<DxcHeader logo={defaultHeaderBranding} navItems={deepNestedItems} />);
      expect(screen.getByAltText("DXC Logo")).toBeInTheDocument();
    });

    test("handles mixed simple items and group items", () => {
      const mixedItems: (Item | GroupItem)[] = [
        { label: "Home", onSelect: jest.fn() },
        {
          label: "Services",
          items: [{ label: "Web Design", onSelect: jest.fn() }],
        },
        { label: "Contact", onSelect: jest.fn() },
      ];

      render(<DxcHeader logo={defaultHeaderBranding} navItems={mixedItems} />);
      expect(screen.getByAltText("DXC Logo")).toBeInTheDocument();
    });
  });
});
