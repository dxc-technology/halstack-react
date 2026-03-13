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
  test("Chip renders correctly in dismissible mode", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Dismissible chip" mode="dismissible" onClick={onClick} />);
    expect(getByText("Dismissible chip")).toBeTruthy();
    expect(getByRole("button", { name: "Clear" })).toBeTruthy();
  });
  test("Calls correct function when clicking on Chip", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Chip" onClick={onClick} />);
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
  test("Calls correct function when clicking on action icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Chip" onClick={onClick} mode="dismissible" />);
    expect(getByText("Chip")).toBeTruthy();
    fireEvent.click(getByRole("button", { name: "Clear" }));
    expect(onClick).toHaveBeenCalled();
  });
});
