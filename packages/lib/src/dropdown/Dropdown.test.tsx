import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcDropdown from "./Dropdown";

// Mocking DOMRect for Radix Primitive Popover
(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

const options = [
  {
    value: "1",
    label: "Amazon",
  },
  {
    value: "2",
    label: "Ebay",
  },
  {
    value: "3",
    label: "Wallapop",
  },
  {
    value: "4",
    label: "Aliexpress",
  },
];

describe("Dropdown component tests", () => {
  test("Renders with correct aria attributes", async () => {
    const onSelectOption = jest.fn();
    const { getAllByRole, getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    expect(dropdown.getAttribute("aria-haspopup")).toBe("true");
    expect(dropdown.getAttribute("aria-expanded")).toBeNull();
    expect(dropdown.getAttribute("aria-activedescendant")).toBeNull();
    await userEvent.click(dropdown);
    const menu = getByRole("menu");
    expect(dropdown.getAttribute("aria-controls")).toBe(menu.id);
    expect(dropdown.getAttribute("aria-expanded")).toBe("true");
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
    expect(menu.getAttribute("aria-orientation")).toBe("vertical");
    expect(menu.getAttribute("aria-labelledby")).toBe(dropdown.id);
    expect(getAllByRole("menuitem").length).toBe(4);
  });
  test("Button trigger opens and closes the menu options when clicked", async () => {
    const onSelectOption = jest.fn();
    const { getByRole, queryByRole, getByText } = render(
      <DxcDropdown options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    expect(queryByRole("menu")).toBeFalsy();
    await userEvent.click(dropdown);
    expect(queryByRole("menu")).toBeTruthy();
    expect(getByText("Amazon")).toBeTruthy();
    expect(getByText("Ebay")).toBeTruthy();
    expect(getByText("Wallapop")).toBeTruthy();
    expect(getByText("Aliexpress")).toBeTruthy();
    await userEvent.click(dropdown);
    expect(queryByRole("menu")).toBeFalsy();
  });
  test("Button trigger is not interactive when disabled", async () => {
    const onSelectOption = jest.fn();
    const { getByRole, queryByRole, queryByText } = render(
      <DxcDropdown disabled options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    expect(queryByRole("menu")).toBeFalsy();
    await userEvent.click(dropdown);
    expect(queryByRole("menu")).toBeFalsy();
    expect(queryByText("Amazon")).toBeFalsy();
    await userEvent.click(dropdown);
    expect(queryByRole("menu")).toBeFalsy();
    expect(dropdown.getAttribute("aria-expanded")).toBeNull();
  });
  test("onSelectOption function is called correctly when an option is clicked", async () => {
    const onSelectOption = jest.fn();
    const { getByText } = render(
      <DxcDropdown options={options} onSelectOption={onSelectOption} label="dropdown-test" />
    );
    const dropdown = getByText("dropdown-test");
    await userEvent.click(dropdown);
    const option = getByText("Aliexpress");
    await userEvent.click(option);
    expect(onSelectOption).toHaveBeenCalledWith("4");
  });
  test("When expandOnHover is true, the dropdown trigger shows and hides the menu when it is hovered", () => {
    const onSelectOption = jest.fn();
    const { queryByText, getByRole, queryByRole } = render(
      <DxcDropdown options={options} expandOnHover label="dropdown-test" onSelectOption={onSelectOption} />
    );
    expect(queryByText("option-test")).toBeFalsy();
    expect(queryByRole("menu")).toBeFalsy();
    fireEvent.mouseOver(getByRole("button"));
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
  });
  test("The menu is closed when the dropdown loses the focus (blur)", async () => {
    const onSelectOption = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcDropdown options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    await userEvent.click(dropdown);
    expect(getByRole("menu")).toBeTruthy();
    fireEvent.blur(getByRole("menu"));
    expect(queryByRole("menu")).toBeFalsy();
  });
  test("Menu button key events — Arrow up opens the list and moves the focus to the last menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    fireEvent.keyDown(dropdown, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-3`);
  });
  test("Menu button key events — Arrow down opens the list and moves the focus to the first menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    fireEvent.keyDown(dropdown, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
  });
  test("Menu button key events — Enter opens the list and moves the focus to the first menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    fireEvent.keyDown(dropdown, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
  });
  test("Menu button key events — Space opens the list and moves the focus to the first menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    fireEvent.keyDown(dropdown, { key: " ", code: "Space", keyCode: 32, charCode: 32 });
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
  });
  test("Menu key events — Arrow up moves the focus to the previous menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );
    fireEvent.keyDown(getByRole("button"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-2`);
    fireEvent.keyDown(menu, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("3");
  });
  test("Menu key events — Arrow up, if focus is on the first menu item, moves focus to the last menu item.", async () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );
    await userEvent.click(getByRole("button"));
    const menu = getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-3`);
    fireEvent.keyDown(menu, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("4");
  });
  test("Menu key events — Arrow down moves the focus to the next menu item", async () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );
    await userEvent.click(getByRole("button"));
    const menu = getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(menu, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-2`);
    fireEvent.keyDown(menu, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("3");
  });
  test("Menu key events — Arrow down, if focus is on the last menu item, moves focus to the first menu item. ", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );
    fireEvent.keyDown(getByRole("button"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
    fireEvent.keyDown(menu, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("1");
  });
  test("Menu key events — Enter key selects the current focused item and closes the menu", async () => {
    const onSelectOption = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );
    await userEvent.click(getByRole("button"));
    fireEvent.keyDown(getByRole("menu"), { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("1");
    expect(queryByRole("menu")).toBeFalsy();
    expect(document.activeElement === getByRole("button")).toBeTruthy();
  });
  test("Menu key events — Esc closes the menu and sets focus on the menu button", async () => {
    const onSelectOption = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcDropdown options={options} label="dropdown-test" onSelectOption={onSelectOption} />
    );
    await userEvent.click(getByRole("button"));
    fireEvent.keyDown(getByRole("menu"), { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(queryByRole("menu")).toBeFalsy();
    expect(document.activeElement === getByRole("button")).toBeTruthy();
  });
  test("Menu key events — Home moves the focus to the first menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test-1" onSelectOption={onSelectOption} />
    );
    fireEvent.keyDown(getByRole("button"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-3`);
    fireEvent.keyDown(menu, { key: "Home", code: "Home", keyCode: 36, charCode: 36 });
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
  });
  test("Menu key events — End moves the focus to the last menu item", async () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test-1" onSelectOption={onSelectOption} />
    );
    await userEvent.click(getByRole("button"));
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
    fireEvent.keyDown(menu, { key: "End", code: "End", keyCode: 35, charCode: 35 });
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-3`);
  });
  test("Menu key events — PageUp moves the focus to the first menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test-1" onSelectOption={onSelectOption} />
    );
    fireEvent.keyDown(getByRole("button"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-3`);
    fireEvent.keyDown(menu, { key: "PageUp", code: "PageUp", keyCode: 33, charCode: 33 });
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
  });
  test("Menu key events — PageDown moves the focus to the last menu item", async () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown options={options} label="dropdown-test-1" onSelectOption={onSelectOption} />
    );
    await userEvent.click(getByRole("button"));
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-0`);
    fireEvent.keyDown(menu, { key: "PageDown", code: "PageDown", keyCode: 34, charCode: 34 });
    expect(menu.getAttribute("aria-activedescendant")).toBe(`${menu.id}-option-3`);
  });
  test("Menu key events — Tab closes the menu and sets focus to the next element", async () => {
    const onSelectOption = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcDropdown options={options} label="dropdown-test-1" onSelectOption={onSelectOption} />
    );
    const dropdown = getByRole("button");
    await userEvent.click(dropdown);
    expect(getByRole("menu")).toBeTruthy();
    fireEvent.keyDown(getByRole("menu"), { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    expect(queryByRole("menu")).toBeFalsy();
  });
});
