import { fireEvent, render } from "@testing-library/react";
import DxcChip from "./Chip";

describe("Chip component tests", () => {
  test("Chip renders with correct text", () => {
    const { getByText } = render(<DxcChip label="Chip" />);
    expect(getByText("Chip")).toBeTruthy();
  });
  test("Chip renders correctly with prefix icon", () => {
    const { getByRole } = render(<DxcChip label="Chip" prefix="nutrition" />);
    const avatar = getByRole("img", { hidden: true });
    expect(avatar).toBeTruthy();
  });
  test("Chip renders correctly with avatar", () => {
    const { getByRole } = render(<DxcChip label="Chip" prefix={{ color: "primary" }} />);
    const avatar = getByRole("img", { hidden: true });
    expect(avatar).toBeTruthy();
  });
  test("Chip doesn't render avatar when size is small", () => {
    const { queryByRole } = render(<DxcChip label="Chip" prefix={{ color: "primary" }} size="small" />);
    const avatar = queryByRole("img", { hidden: true });
    expect(avatar).not.toBeTruthy();
  });
  test("Calls correct function when clicking on action icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Chip" action={{ icon: "nutrition", onClick: onClick }} />);
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
