import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcDropdown from "./Dropdown";
import userEvent from "@testing-library/user-event";

global.globalThis = global;
global.ResizeObserver = class ResizeObserver {
  constructor(cb) {
    this.cb = cb;
  }
  observe() {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
};

global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
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
  test("Renders with correct aria attributes", () => {
    const { getAllByRole, getByRole } = render(<DxcDropdown options={options} label="dropdown-test" />);
    const dropdown = getByRole("button");

    expect(dropdown.getAttribute("aria-disabled")).toBe("false");
    expect(dropdown.getAttribute("aria-haspopup")).toBe("true");
    expect(dropdown.getAttribute("aria-expanded")).toBe("false");
    expect(dropdown.getAttribute("aria-activedescendant")).toBeNull();
    userEvent.click(dropdown);
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-0");
    expect(menu.getAttribute("aria-orientation")).toBe("vertical");
    expect(menu.getAttribute("aria-labelledby")).toBe(dropdown.id);
    expect(getAllByRole("menuitem").length).toBe(4);
  });
  test("Button trigger opens and closes the menu options when clicked", () => {
    const { getByRole, queryByRole, getByText } = render(<DxcDropdown options={options} label="dropdown-test" />);
    const dropdown = getByRole("button");

    expect(queryByRole("menu")).toBeFalsy();
    userEvent.click(dropdown);
    expect(queryByRole("menu")).toBeTruthy();
    expect(getByText("Amazon")).toBeTruthy();
    expect(getByText("Ebay")).toBeTruthy();
    expect(getByText("Wallapop")).toBeTruthy();
    expect(getByText("Aliexpress")).toBeTruthy();
    userEvent.click(dropdown);
    expect(queryByRole("menu")).toBeFalsy();
  });
  test("Button trigger is not interactable when disabled", () => {
    const { getByRole, queryByRole, queryByText } = render(
      <DxcDropdown disabled options={options} label="dropdown-test" />
    );
    const dropdown = getByRole("button");

    expect(dropdown.getAttribute("aria-disabled")).toBe("true");
    expect(queryByRole("menu")).toBeFalsy();
    userEvent.click(dropdown);
    expect(queryByRole("menu")).toBeFalsy();
    expect(queryByText("Amazon")).toBeFalsy();
    userEvent.click(dropdown);
    expect(queryByRole("menu")).toBeFalsy();
    expect(dropdown.getAttribute("aria-expanded")).toBe("false");
  });
  test("onSelectOption function is called correctly when an option is called", () => {
    const onSelectOption = jest.fn();
    const { getByText } = render(
      <DxcDropdown options={options} onSelectOption={onSelectOption} label="dropdown-test" />
    );
    const dropdown = getByText("dropdown-test");

    userEvent.click(dropdown);
    const option = getByText("Aliexpress");
    userEvent.click(option);
    expect(onSelectOption).toHaveBeenCalledWith("4");
  });
  test("When expandOnHover is true, the dropdown trigger shows and hides the menu when it is hovered", () => {
    const { queryByText, getByRole, queryByRole } = render(
      <DxcDropdown options={options} expandOnHover label="dropdown-test" />
    );
    const dropdown = getByRole("button");

    expect(queryByText("option-test")).toBeFalsy();
    expect(queryByRole("menu")).toBeFalsy();
    fireEvent.mouseOver(dropdown);
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("The menu is closed when the dropdown loses the focus (blur)", () => {
    const { getByRole, queryByRole } = render(<DxcDropdown options={options} label="dropdown-test" />);
    const dropdown = getByRole("button");

    userEvent.click(dropdown);
    expect(getByRole("menu")).toBeTruthy();
    fireEvent.blur(getByRole("menu"));
    expect(queryByRole("menu")).toBeFalsy();
  });
  test("Menu button key events - Arrow up opens the list and moves the focus to the last menu item", () => {
    const { getByRole } = render(<DxcDropdown options={options} label="dropdown-test" />);
    const dropdown = getByRole("button");

    fireEvent.keyDown(dropdown, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe("option-3");
  });
  test("Menu button key events - Arrow down opens the list and moves the focus to the first menu item", () => {
    const { getByRole } = render(<DxcDropdown options={options} label="dropdown-test" />);
    const dropdown = getByRole("button");

    fireEvent.keyDown(dropdown, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Menu button key events - Enter opens the list and moves the focus to the first menu item", () => {
    const { getByRole } = render(<DxcDropdown options={options} label="dropdown-test" />);
    const dropdown = getByRole("button");

    fireEvent.keyDown(dropdown, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Menu button key events - Space opens the list and moves the focus to the first menu item", () => {
    const { getByRole } = render(<DxcDropdown options={options} label="dropdown-test" />);
    const dropdown = getByRole("button");

    fireEvent.keyDown(dropdown, { key: "Space", code: "Space", keyCode: 32, charCode: 32 });
    const menu = getByRole("menu");
    expect(menu).toBeTruthy();
    expect(document.activeElement === menu).toBeTruthy();
    expect(getByRole("menu").getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Menu key events - Arrow up moves the focus to the previous menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );

    fireEvent.keyDown(getByRole("button"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-2");
    fireEvent.keyDown(menu, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("3");
  });
  test("Menu key events - Arrow up, if focus is on the first menu item, moves focus to the last menu item.", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );

    userEvent.click(getByRole("button"));
    const menu = getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-3");
    fireEvent.keyDown(menu, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("4");
  });
  test("Menu key events - Arrow down moves the focus to the next menu item", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );

    userEvent.click(getByRole("button"));
    const menu = getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    fireEvent.keyDown(menu, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-2");
    fireEvent.keyDown(menu, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("3");
  });
  test("Menu key events - Arrow down, if focus is on the last menu item, moves focus to the first menu item. ", () => {
    const onSelectOption = jest.fn();
    const { getByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );

    fireEvent.keyDown(getByRole("button"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    fireEvent.keyDown(menu, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
    expect(document.activeElement === menu).toBeTruthy();
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-0");
    fireEvent.keyDown(menu, { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("1");
  });
  test("Menu key events - Enter key selects the current focused item and closes the menu", () => {
    const onSelectOption = jest.fn();
    const { getByRole, queryByRole } = render(
      <DxcDropdown onSelectOption={onSelectOption} options={options} label="dropdown-test" />
    );

    userEvent.click(getByRole("button"));
    fireEvent.keyDown(getByRole("menu"), { key: "Enter", code: "Enter", keyCode: 13, charCode: 13 });
    expect(onSelectOption).toHaveBeenCalledWith("1");
    expect(queryByRole("menu")).toBeFalsy();
    expect(document.activeElement === getByRole("button")).toBeTruthy();
  });
  test("Menu key events - Esc closes the menu and sets focus on the menu button", () => {
    const { getByRole, queryByRole } = render(<DxcDropdown options={options} label="dropdown-test" />);

    userEvent.click(getByRole("button"));
    fireEvent.keyDown(getByRole("menu"), { key: "Esc", code: "Esc", keyCode: 27, charCode: 27 });
    expect(queryByRole("menu")).toBeFalsy();
    expect(document.activeElement === getByRole("button")).toBeTruthy();
  });
  test("Menu key events - Home moves the focus to the first menu item", () => {
    const { getByRole } = render(<DxcDropdown options={options} label="dropdown-test-1" />);

    fireEvent.keyDown(getByRole("button"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-3");
    fireEvent.keyDown(menu, { key: "Home", code: "Home", keyCode: 36, charCode: 36 });
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Menu key events - End moves the focus to the last menu item", () => {
    const { getByRole } = render(<DxcDropdown options={options} label="dropdown-test-1" />);

    userEvent.click(getByRole("button"));
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-0");
    fireEvent.keyDown(menu, { key: "End", code: "End", keyCode: 35, charCode: 35 });
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-3");
  });
  test("Menu key events - PageUp moves the focus to the first menu item", () => {
    const { getByRole } = render(<DxcDropdown options={options} label="dropdown-test-1" />);

    fireEvent.keyDown(getByRole("button"), { key: "ArrowUp", code: "ArrowUp", keyCode: 38, charCode: 38 });
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-3");
    fireEvent.keyDown(menu, { key: "PageUp", code: "PageUp", keyCode: 33, charCode: 33 });
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-0");
  });
  test("Menu key events - PageDown moves the focus to the last menu item", () => {
    const { getByRole } = render(<DxcDropdown options={options} label="dropdown-test-1" />);

    userEvent.click(getByRole("button"));
    const menu = getByRole("menu");
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-0");
    fireEvent.keyDown(menu, { key: "PageDown", code: "PageDown", keyCode: 34, charCode: 34 });
    expect(menu.getAttribute("aria-activedescendant")).toBe("option-3");
  });
  test("Menu key events - Tab closes the menu and sets focus to the next element", () => {
    const { getByRole, queryByRole } = render(<DxcDropdown options={options} label="dropdown-test-1" />);
    const dropdown = getByRole("button");

    userEvent.click(dropdown);
    expect(getByRole("menu")).toBeTruthy();
    fireEvent.keyDown(getByRole("menu"), { key: "Tab", code: "Tab", keyCode: 9, charCode: 9 });
    expect(queryByRole("menu")).toBeFalsy();
  });
});
