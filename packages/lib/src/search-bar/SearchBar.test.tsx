import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcSearchBar from "./SearchBar";
import DxcSearchBarTrigger from "./SearchBarTrigger";

describe("SearchBarTrigger component tests", () => {
  test("Renders correctly", () => {
    const { getByRole } = render(<DxcSearchBarTrigger />);

    const button = getByRole("button");
    expect(button).toBeTruthy();
  });

  test("Calls onTriggerClick when button is clicked", () => {
    const onTriggerClick = jest.fn();
    const { getByRole } = render(<DxcSearchBarTrigger onTriggerClick={onTriggerClick} />);

    const button = getByRole("button");
    userEvent.click(button);

    expect(onTriggerClick).toHaveBeenCalledTimes(1);
  });
});

describe("SearchBar component tests", () => {
  test("Renders correctly", () => {
    const { getByPlaceholderText } = render(<DxcSearchBar placeholder="Search..." />);

    const text = getByPlaceholderText("Search...");
    expect(text).toBeTruthy();
  });

  test("Calls onChange when typing", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<DxcSearchBar onChange={onChange} />);

    const input = getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "hello");

    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenLastCalledWith("hello");
  });

  test("Calls onEnter with value when pressing Enter", () => {
    const onEnter = jest.fn();
    const { getByRole } = render(<DxcSearchBar onEnter={onEnter} />);

    const input = getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "search text");
    fireEvent.keyDown(input, { key: "Enter" });

    expect(onEnter).toHaveBeenCalledTimes(1);
    expect(onEnter).toHaveBeenCalledWith("search text");
  });

  test("Clears value when clicking clear icon", () => {
    const { getByRole } = render(<DxcSearchBar />);

    const input = getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "abc");

    const clearButton = getByRole("button");
    expect(clearButton).toBeTruthy();

    userEvent.click(clearButton);
    expect(input.value).toBe("");
  });

  test("Clears value when pressing Escape", () => {
    const { getByRole } = render(<DxcSearchBar />);

    const input = getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "xyz");
    fireEvent.keyDown(input, { key: "Escape" });

    expect(input.value).toBe("");
  });

  test("Calls onBlur with current value when blurred", () => {
    const onBlur = jest.fn();
    const { getByRole } = render(<DxcSearchBar onBlur={onBlur} />);

    const input = getByRole("textbox") as HTMLInputElement;
    userEvent.type(input, "blur me");
    fireEvent.blur(input);

    expect(onBlur).toHaveBeenCalledWith("blur me");
  });

  test("Calls onCancel when Cancel button is clicked", () => {
    const onCancel = jest.fn();
    const { getByRole } = render(<DxcSearchBar onCancel={onCancel} />);

    const cancelButton = getByRole("button", { name: /Cancel/i });
    userEvent.click(cancelButton);

    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
