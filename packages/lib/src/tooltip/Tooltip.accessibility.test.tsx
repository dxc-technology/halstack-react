import { fireEvent, render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcButton from "../button/Button";
import DxcTooltip from "./Tooltip";

(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: 0 }),
};
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("Tooltip component accessibility tests", () => {
  it("Should not have basic accessibility issues for bottom position", async () => {
    // baseElement is needed when using React Portals
    const { baseElement, getByText } = render(
      <DxcTooltip label="Tooltip Test" position="bottom">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    fireEvent.mouseEnter(triggerElement);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for top position", async () => {
    // baseElement is needed when using React Portals
    const { baseElement, getByText } = render(
      <DxcTooltip label="Tooltip Test" position="top">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    fireEvent.mouseEnter(triggerElement);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for left position", async () => {
    // baseElement is needed when using React Portals
    const { baseElement, getByText } = render(
      <DxcTooltip label="Tooltip Test" position="left">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    fireEvent.mouseEnter(triggerElement);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for right position", async () => {
    // baseElement is needed when using React Portals
    const { baseElement, getByText } = render(
      <DxcTooltip label="Tooltip Test" position="right">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    fireEvent.mouseEnter(triggerElement);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
