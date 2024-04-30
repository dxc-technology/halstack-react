import React from "react";
import { render, waitFor } from "@testing-library/react";
import DxcTooltip from "./Tooltip";
import DxcButton from "../button/Button";
import userEvent from "@testing-library/user-event";

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
  test("Tooltip does not render by default", async () => {
    const { queryByRole } = render(
      <DxcTooltip label="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    await waitFor(() => {
      const tooltipElement = queryByRole("tooltip");
      expect(tooltipElement).toBeFalsy();
    });
  });

  test("Tooltip renders with correct label on hover", async () => {
    const { getByText, getByRole } = render(
      <DxcTooltip label="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    await userEvent.hover(triggerElement);
    await waitFor(() => {
      const tooltipContent = getByRole("tooltip", { name: "Tooltip Test" });
      expect(tooltipContent).toBeTruthy();
    });
  });

  test("Tooltip stops being rendered when hover is stopped", async () => {
    const { getByText, queryByRole } = render(
      <DxcTooltip label="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    await userEvent.hover(triggerElement);
    await userEvent.unhover(triggerElement);
    await waitFor(() => {
      const tooltipElement = queryByRole("tooltip");
      expect(tooltipElement).toBeFalsy();
    });
  });

  test("Tooltip sets the default display position properly", async () => {
    const { getByText, getByRole } = render(
      <DxcTooltip label="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    await userEvent.hover(triggerElement);
    await waitFor(() => {
      const tooltipContent = getByRole("tooltip", { name: "Tooltip Test" });
      const position = tooltipContent.closest("div").getAttribute("data-side");
      expect(tooltipContent).toBeTruthy();
      expect(position).toBe("bottom");
    });
  });

  test("Tooltip sets the custom display position properly", async () => {
    const { getByText, getByRole } = render(
      <DxcTooltip label="Tooltip Test" position="top">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    await userEvent.hover(triggerElement);
    await waitFor(() => {
      const tooltipContent = getByRole("tooltip", { name: "Tooltip Test" });
      const position = tooltipContent.closest("div").getAttribute("data-side");
      expect(tooltipContent).toBeTruthy();
      expect(position).toBe("top");
    });
  });
});
