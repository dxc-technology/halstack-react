import { act, fireEvent, render, waitFor } from "@testing-library/react";
import DxcPopover from "./Popover";

describe("Popover component tests", () => {
  test("The component renders properly onClick", () => {
    const { getByText } = render(<DxcPopover popoverContent={<div>Popover content</div>}>Trigger</DxcPopover>);
    expect(getByText("Trigger")).toBeTruthy();
    fireEvent.click(getByText("Trigger"));
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
    fireEvent.mouseEnter(getByText("Trigger"));
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
    fireEvent.click(getByText("Trigger"));
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
    fireEvent.mouseEnter(getByText("Trigger"));
    expect(onOpen).toHaveBeenCalled();
  });

  test("The component manages events correctly when controlled click onClose", async () => {
    const onClose = jest.fn();
    const { getByText, queryByText } = render(
      <>
        <DxcPopover isOpen={true} onClose={onClose} popoverContent={<div>Popover content</div>}>
          Trigger
        </DxcPopover>
      </>
    );
    expect(queryByText("Trigger")).toBeTruthy();
    await waitFor(() => expect(getByText("Popover content")).toBeTruthy());
    fireEvent.pointerDown(document.body);
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
    fireEvent.mouseLeave(getByText("Trigger"));
    expect(onClose).toHaveBeenCalled();
  });

  test("The component manages onOpenAutoFocus", async () => {
    const autoFocusEvent = jest.fn();
    const { getByText, queryByText } = render(
      <DxcPopover onOpenAutoFocus={autoFocusEvent} popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(queryByText("Trigger")).toBeTruthy();
    fireEvent.click(getByText("Trigger"));
    await waitFor(() => expect(getByText("Popover content")).toBeTruthy());
    expect(autoFocusEvent).toHaveBeenCalled();
  });

  test("The component manages onCloseAutoFocus", async () => {
    jest.useFakeTimers();
    const autoFocusEvent = jest.fn();
    const { getByText, queryByText } = render(
      <DxcPopover onCloseAutoFocus={autoFocusEvent} popoverContent={<div>Popover content</div>}>
        Trigger
      </DxcPopover>
    );
    expect(queryByText("Trigger")).toBeTruthy();
    fireEvent.click(getByText("Trigger"));
    await waitFor(() => expect(getByText("Popover content")).toBeTruthy());
    fireEvent.keyDown(document.body, { key: "Escape", code: "Escape" });
    act(() => {
      jest.advanceTimersByTime(0);
    });
    expect(autoFocusEvent).toHaveBeenCalled();
    jest.useRealTimers();
  });
});
