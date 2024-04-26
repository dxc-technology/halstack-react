import React from "react";
import { fireEvent, render } from "@testing-library/react";
import DxcTooltip from "./Tooltip";
import DxcButton from "../button/Button";

(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: 0 }),
};
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Tooltip component tests", () => {
  test("Tooltip does not render by default", () => {
    const { queryByText, getByText } = render(
      <DxcTooltip title="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>,
    );
    const triggerElement = getByText("Hoverable button");
    fireEvent.mouseLeave(triggerElement);
    expect(queryByText("Tooltip Test")).not.toBeTruthy();
  });

  test("Tooltip renders with correct label on hover", () => {
    const { getByText, queryAllByText } = render(
      <DxcTooltip title="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>,
    );
    const triggerElement = getByText("Hoverable button");
    fireEvent.mouseEnter(triggerElement);
    expect(queryAllByText("Tooltip Test").length).toBeGreaterThan(0);
    fireEvent.mouseLeave(triggerElement);
    expect(queryAllByText("Tooltip Test").length).toBe(0);
  });
  
  test("Tooltip sets the default display position properly", () => {
    const { getByText, getByTestId } = render(
      <DxcTooltip title="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>,
    );
    const triggerElement = getByText("Hoverable button");
    fireEvent.mouseEnter(triggerElement);
    const popoverContent = getByTestId("popover-content");
    expect(popoverContent).toBeTruthy();
    const position = popoverContent.getAttribute("data-side");
    expect(position).toBe("bottom");
  });
  test("Tooltip sets the custom display position properly", () => {
    const { getByText, getByTestId } = render(
      <DxcTooltip title="Tooltip Test" position="top">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>,
    );
    const triggerElement = getByText("Hoverable button");
    fireEvent.mouseEnter(triggerElement);
    const popoverContent = getByTestId("popover-content");
    expect(popoverContent).toBeTruthy();
    const position = popoverContent.getAttribute("data-side");
    expect(position).toBe("top");
  });
});
