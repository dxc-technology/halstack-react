import { fireEvent, render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcButton from "../button/Button";
import DxcTooltip from "./Tooltip";
import { vi } from "vitest";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

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
    expect(results.violations).toHaveLength(0);
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
    expect(results.violations).toHaveLength(0);
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
    expect(results.violations).toHaveLength(0);
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
    expect(results.violations).toHaveLength(0);
  });
});
