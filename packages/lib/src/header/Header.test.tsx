import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DxcHeader from "./Header";
import { Item, GroupItem } from "../base-menu/types";

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

  test("hamburger button triggers onClick when clicked", () => {
    mockMatchMedia.mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    const navItems: Item[] = [{ label: "Home", onSelect: jest.fn() }];
    render(<DxcHeader navItems={navItems} />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

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

    render(<DxcHeader navItems={deepNestedItems} />);
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.queryByText("Development")).not.toBeInTheDocument();
    expect(screen.queryByText("Frontend")).not.toBeInTheDocument();
    expect(screen.queryByText("Backend")).not.toBeInTheDocument();
  });
});
