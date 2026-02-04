import { render } from "@testing-library/react";
import DxcPopover from "./Popover";
import userEvent from "@testing-library/user-event";
import DxcButton from "../button/Button";

describe("Popover component tests", () => {
  test("The component renders properly onClick", () => {
    const { getByText } = render(<DxcPopover popoverContent={<div>Popover content</div>}>Trigger</DxcPopover>);
    expect(getByText("Trigger")).toBeTruthy();
    userEvent.click(getByText("Trigger"));
    expect(getByText("Popover content")).toBeTruthy();
  });

  test("The component renders properly onHover", () => {
    const { getByText, queryByText } = render(
      <DxcPopover actionToOpen="hover" popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(queryByText("Popover content")).toBeFalsy();
    expect(getByText("Trigger")).toBeTruthy();
    userEvent.hover(getByText("Trigger"));
    expect(getByText("Popover content")).toBeTruthy();
  });

  test("The component manages events correctly when controlled click onOpen", () => {
    const onOpen = jest.fn();
    const { getByText, queryByText } = render(
      <DxcPopover isOpen={false} onOpen={onOpen} popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(queryByText("Popover content")).toBeFalsy();
    expect(getByText("Trigger")).toBeTruthy();
    userEvent.click(getByText("Trigger"));
    expect(onOpen).toHaveBeenCalled();
  });

  test("The component manages events correctly when controlled hover onOpen", () => {
    const onOpen = jest.fn();
    const { getByText, queryByText } = render(
      <DxcPopover isOpen={false} actionToOpen="hover" onOpen={onOpen} popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(queryByText("Popover content")).toBeFalsy();
    expect(getByText("Trigger")).toBeTruthy();
    userEvent.hover(getByText("Trigger"));
    expect(onOpen).toHaveBeenCalled();
  });

  test("The component manages events correctly when controlled click onClose", () => {
    const onClose = jest.fn();
    const { getByText, queryByText } = render(
      <>
        <DxcPopover isOpen={true} onClose={onClose} popoverContent={<div>Popover content</div>}>
          Trigger
        </DxcPopover>
        <DxcButton label="Focus out" />
      </>
    );
    expect(queryByText("Trigger")).toBeTruthy();
    expect(getByText("Popover content")).toBeTruthy();
    userEvent.click(getByText("Focus out"));
    expect(onClose).toHaveBeenCalled();
  });

  test("The component manages events correctly when controlled onHover", () => {
    const onClose = jest.fn();
    const { getByText, queryByText } = render(
      <DxcPopover isOpen={true} actionToOpen="hover" onClose={onClose} popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(queryByText("Trigger")).toBeTruthy();
    expect(getByText("Popover content")).toBeTruthy();
    userEvent.unhover(getByText("Trigger"));
    expect(onClose).toHaveBeenCalled();
  });
});
