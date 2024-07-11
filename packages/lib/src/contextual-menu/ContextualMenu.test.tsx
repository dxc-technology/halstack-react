import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcContextualMenu from "./ContextualMenu";

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

const groups = [
  {
    label: "Grouped Item 1",
    items: [
      { label: "Item 1" },
      {
        label: "Grouped Item 2",
        items: [{ label: "Item 2" }, { label: "Item 3" }],
      },
    ],
  },
  { label: "Item 4", icon: "key" },
  { label: "Grouped Item 3", items: [{ label: "Item 6" }, { label: "Item 7" }] },
  { label: "Item 8" },
];

describe("Contextual menu component tests", () => {
  test("Single - Renders with correct aria attributes", async () => {
    const { getAllByRole, getByRole } = render(<DxcContextualMenu items={items} />);
    expect(getAllByRole("menuitem").length).toBe(4);
    const actions = getAllByRole("button");
    await userEvent.click(actions[0]);
    expect(actions[0].getAttribute("aria-selected")).toBeTruthy();
    expect(getByRole("menu")).toBeTruthy();
  });
  test("Single - An item can appear as selected by default by using the attribute selectedByDefault", () => {
    const test = [
      {
        label: "Tested item",
        selectedByDefault: true,
      },
    ];
    const { getByRole } = render(<DxcContextualMenu items={test} />);
    const item = getByRole("button");
    expect(item.getAttribute("aria-selected")).toBeTruthy();
  });
  test("Group - Group items collapse when clicked", async () => {
    const { queryByText, getByText } = render(<DxcContextualMenu items={groups} />);
    await userEvent.click(getByText("Grouped Item 1"));
    expect(getByText("Item 1")).toBeTruthy();
    expect(getByText("Grouped Item 2")).toBeTruthy();
    await userEvent.click(getByText("Grouped Item 2"));
    expect(getByText("Item 2")).toBeTruthy();
    expect(getByText("Item 3")).toBeTruthy();
    await userEvent.click(getByText("Grouped Item 1"));
    expect(queryByText("Item 1")).toBeFalsy();
    expect(queryByText("Item 2")).toBeFalsy();
    expect(queryByText("Item 3")).toBeFalsy();
  });
  test("Group - Renders with correct aria attributes", async () => {
    const { getAllByRole } = render(<DxcContextualMenu items={groups} />);
    const group1 = getAllByRole("button")[0];
    await userEvent.click(group1);
    expect(group1.getAttribute("aria-expanded")).toBeTruthy();
    expect(group1.getAttribute("aria-controls")).toBe(getAllByRole("list")[0].id);
    await userEvent.click(getAllByRole("button")[2]);
    await userEvent.click(getAllByRole("button")[6]);
    expect(getAllByRole("menuitem").length).toBe(10);
    const optionToBeClicked = getAllByRole("button")[4];
    await userEvent.click(optionToBeClicked);
    expect(optionToBeClicked.getAttribute("aria-selected")).toBeTruthy();
  });
  test("Group - A grouped item, selected by default, must be visible (expanded group) in the first render of the component", () => {
    const test = [
      {
        label: "Grouped item",
        items: [{ label: "Tested item", selectedByDefault: true }],
      },
    ];
    const { getByText, getAllByRole } = render(<DxcContextualMenu items={test} />);
    expect(getByText("Tested item")).toBeTruthy();
    expect(getAllByRole("button")[1].getAttribute("aria-selected")).toBeTruthy();
  });
  test("Group - Collapsed groups render as selected when containing a selected item", async () => {
    const { getAllByRole } = render(<DxcContextualMenu items={groups} />);
    const group1 = getAllByRole("button")[0];
    await userEvent.click(group1);
    const group2 = getAllByRole("button")[2];
    await userEvent.click(group2);
    const item = getAllByRole("button")[3];
    await userEvent.click(item);
    expect(item.getAttribute("aria-selected")).toBeTruthy();
    expect(group1.getAttribute("aria-selected")).toBe("false");
    expect(group2.getAttribute("aria-selected")).toBe("false");
    await userEvent.click(group2);
    expect(group2.getAttribute("aria-selected")).toBe("true");
    await userEvent.click(group1);
    expect(group1.getAttribute("aria-selected")).toBe("true");
  });
  test("Sections - Renders with correct aria attributes", async () => {
    const { getAllByRole } = render(<DxcContextualMenu items={sections} />);
    expect(getAllByRole("menuitem").length).toBe(6);
    const actions = getAllByRole("button");
    await userEvent.click(actions[0]);
    expect(actions[0].getAttribute("aria-selected")).toBeTruthy();
    expect(getAllByRole("group").length).toBe(2);
    const section = getAllByRole("group")[0];
    expect(section.getAttribute("aria-labelledby")).toBe("Team repositories");
  });
  test("The onSelect event from each item is called correctly", () => {
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
