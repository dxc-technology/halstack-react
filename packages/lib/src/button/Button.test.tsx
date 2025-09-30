import { render, fireEvent } from "@testing-library/react";
import DxcButton from "./Button";

describe("Button component tests", () => {
  test("Calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DxcButton label="Button" onClick={onClick} size={{ height: "medium" }} semantic="success" />
    );
    const button = getByText("Button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
  test("Renders with correct accessibility attributes", () => {
    const { getByRole } = render(<DxcButton label="Home" title="Go home" tabIndex={1} semantic="error" />);
    const button = getByRole("button");
    expect(button.getAttribute("aria-label")).toBe("Go home");
    expect(button.getAttribute("tabindex")).toBe("1");
  });
  test("Triggers form submit event on button click", () => {
    const handleSubmit = jest.fn();
    const { getByRole } = render(
      <form onSubmit={handleSubmit}>
        <DxcButton label="Submit" type="submit" />
      </form>
    );
    const button = getByRole("button", { name: "Submit" });
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
