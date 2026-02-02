import { render } from "@testing-library/react";
import DxcPopover from "./Popover";
import userEvent from "@testing-library/user-event";

describe("Popover component tests", () => {
  test("The component renders properly onClick", () => {
    const { getByText } = render(<DxcPopover popoverContent={<div>Popover content</div>}>Trigger</DxcPopover>);
    expect(getByText("Trigger")).toBeTruthy();
    userEvent.click(getByText("Trigger"));
    expect(getByText("Popover content")).toBeTruthy();
  });

  test("The component renders properly onHover", () => {
    const { getByText } = render(
      <DxcPopover actionToOpen="hover" popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(getByText("Trigger")).toBeTruthy();
    userEvent.hover(getByText("Trigger"));
    expect(getByText("Popover content")).toBeTruthy();
  });

  test("The component manages events correctly when controlled onClick", () => {
    const onTrigger = jest.fn();
    const { getByText } = render(
      <DxcPopover isOpen={false} onTrigger={onTrigger} popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(getByText("Trigger")).toBeTruthy();
    userEvent.click(getByText("Trigger"));
    expect(onTrigger).toHaveBeenCalled();
  });

  test("The component manages events correctly when controlled onHover", () => {
    const onTrigger = jest.fn();
    const { getByText } = render(
      <DxcPopover isOpen={false} actionToOpen="hover" onTrigger={onTrigger} popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(getByText("Trigger")).toBeTruthy();
    userEvent.hover(getByText("Trigger"));
    expect(onTrigger).toHaveBeenCalled();
  });
});
