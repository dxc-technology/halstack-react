import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DxcHeader from "./Header";
import { Item, GroupItem } from "../base-menu/types";

describe("Header component tests", () => {
  const mockMatchMedia = jest.fn();

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
            },
            { label: "Selected Item 3" },
          ],
        },
      ],
    },
    { label: "Item 4", icon: "key" },
    { label: "Item 5", icon: "person" },
    { label: "Grouped Item 6", items: [{ label: "Item 7", icon: "person" }, { label: "Item 8" }] },
    { label: "Item 9" },
  ];

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

  test("search bar appears and functions correctly", () => {
    const onEnterMock = jest.fn();
    const onCancelMock = jest.fn();

    render(<DxcHeader searchBar={{ placeholder: "Search...", onEnter: onEnterMock, onCancel: onCancelMock }} />);

    const searchIcon = screen.getByRole("button", { name: /search/i });
    fireEvent.click(searchIcon);
    const searchInput = screen.getByPlaceholderText("Search...");
    expect(searchInput).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: "test query" } });
    fireEvent.keyDown(searchInput, { key: "Enter", code: "Enter" });
    expect(onEnterMock).toHaveBeenCalledWith("test query");
    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(onCancelMock).toHaveBeenCalled();
    expect(searchInput).not.toBeInTheDocument();
  });

  test("search bar appears correctly in responsive mode", () => {
    mockMatchMedia.mockImplementation(() => ({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    }));

    render(<DxcHeader searchBar={{ placeholder: "Search..." }} />);

    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton);
    const searchInput = screen.getByPlaceholderText("Search...");
    expect(searchInput).toBeInTheDocument();
    const cancelButton = screen.queryByRole("button", { name: /cancel/i });
    expect(cancelButton).not.toBeInTheDocument();
  });

  test("navigation group items closes whenever an item is clicked", () => {
    render(<DxcHeader navItems={items} />);
    const itemGroup6 = screen.getByText("Grouped Item 6");
    fireEvent.click(itemGroup6);
    const item7 = screen.getByText("Item 7");
    fireEvent.click(item7);
    expect(item7).not.toBeInTheDocument();
  });
});
