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
  test("Chip renders correctly with custom SVG prefix", () => {
    const customSVG = (
      <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M10 10" />
      </svg>
    );
    const { getByRole } = render(<DxcChip label="Chip" prefix={customSVG} />);
    expect(getByRole("img")).toBeTruthy();
  });
  test("Chip renders correctly with avatar", () => {
    const { getByRole } = render(<DxcChip label="Chip" prefix={{ color: "primary" }} />);
    const avatar = getByRole("img", { hidden: true });
    expect(avatar).toBeTruthy();
  });
  test("Chip doesn't render with avatar and without label", () => {
    const { queryByRole } = render(<DxcChip prefix={{ color: "primary" }} />);
    const avatar = queryByRole("img", { hidden: true });
    expect(avatar).toBeNull();
  });
  test("Chip renders correctly in dismissible mode", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Dismissible chip" mode="dismissible" onClick={onClick} />);
    expect(getByText("Dismissible chip")).toBeTruthy();
    expect(getByRole("button", { name: "Clear" })).toBeTruthy();
  });
  test("Calls correct function when clicking on Chip", () => {
    const onClick = jest.fn();
    const { getByText } = render(<DxcChip label="Chip" onClick={onClick} />);
    const chip = getByText("Chip");
    expect(chip).toBeTruthy();
    fireEvent.click(chip);
    expect(onClick).toHaveBeenCalled();
  });
  test("Calls correct function when clicking on action icon", () => {
    const onClick = jest.fn();
    const { getByText, getByRole } = render(<DxcChip label="Chip" onClick={onClick} mode="dismissible" />);
    const chipText = getByText("Chip");
    expect(chipText).toBeTruthy();
    fireEvent.click(chipText);
    expect(onClick).not.toHaveBeenCalled();
    fireEvent.click(getByRole("button", { name: "Clear" }));
    expect(onClick).toHaveBeenCalled();
  });
  test("Selectable chip has correct aria-pressed when not selected", () => {
    const { getByRole } = render(<DxcChip label="Test Chip" mode="selectable" />);
    const chip = getByRole("button", { name: "Test Chip" });
    expect(chip.getAttribute("aria-pressed")).toBe("false");
  });
  test("Selectable chip has correct aria-pressed when selected", () => {
    const { getByRole } = render(<DxcChip label="Test Chip" mode="selectable" selected={true} />);
    const chip = getByRole("button", { name: "Test Chip" });
    expect(chip.getAttribute("aria-pressed")).toBe("true");
  });
  test("Selectable chip has correct aria-label", () => {
    const { getByRole } = render(<DxcChip label="My Chip" mode="selectable" />);
    const chip = getByRole("button", { name: "My Chip" });
    expect(chip.getAttribute("aria-label")).toBe("My Chip");
  });
  test("Selectable chip without label has default aria-label", () => {
    const { getByRole } = render(<DxcChip mode="selectable" prefix="home" />);
    const chip = getByRole("button", { name: "Chip" });
    expect(chip.getAttribute("aria-label")).toBe("Chip");
  });
  test("Dismissible chip does not have aria-pressed", () => {
    const { getByText } = render(<DxcChip label="Dismissible Chip" mode="dismissible" />);
    const chip = getByText("Dismissible Chip").parentElement?.parentElement;
    expect(chip?.getAttribute("aria-pressed")).toBeNull();
  });
  test("Dismissible chip has correct aria-label", () => {
    const { getByText } = render(<DxcChip label="Dismissible Chip" mode="dismissible" />);
    const chip = getByText("Dismissible Chip").parentElement?.parentElement;
    expect(chip?.getAttribute("aria-label")).toBe("Dismissible Chip");
  });
});
