import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcContextualMenu from "./ContextualMenu.tsx";

const items = [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }];

const sections = [
  {
    title: "Team repositories",
    items: [{ label: "Approved locations" }, { label: "Approved locations" }, { label: "Approved locations" }],
  },
  {
    items: [{ label: "Approved locations" }, { label: "Approved locations" }, { label: "Approved locations" }],
  },
];

describe("Context menu component tests", () => {
  test("Context menu renders with correct aria attributes", () => {
    const { getAllByRole, getByRole } = render(<DxcContextualMenu items={items} defaultSelectedItemIndex={0} />);
    expect(getAllByRole("menuitem").length).toBe(4);
    const actions = getAllByRole("button");
    expect(actions[0].getAttribute("aria-selected")).toBeTruthy();
    expect(getByRole("menu")).toBeTruthy();
  });
  test("Context menu (with sections) renders with correct aria attributes", () => {
    const { getAllByRole } = render(<DxcContextualMenu items={sections} defaultSelectedItemIndex={4} />);
    expect(getAllByRole("menuitem").length).toBe(6);
    const actions = getAllByRole("button");
    expect(actions[4].getAttribute("aria-selected")).toBeTruthy();
    expect(getAllByRole("group").length).toBe(2);
  });
  test("onSelect event from each item is called correctly", () => {
    const test = [
      {
        label: "Tested item",
        onSelect: jest.fn(),
      },
    ];
    const { getByRole } = render(<DxcContextualMenu items={test} />);
    const item = getByRole("button");
    fireEvent.click(item);
    expect(test[0].onSelect).toHaveBeenCalled();
  });
});
