import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    const { getByText } = render(
      <DxcTooltip label="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    userEvent.hover(triggerElement);
    await screen.findByRole("tooltip", { name: "Tooltip Test" });
  });

  test("Tooltip stops being rendered when hover is stopped", async () => {
    const { getByText, queryByRole } = render(
      <DxcTooltip label="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    userEvent.hover(triggerElement);
    userEvent.unhover(triggerElement);
    await waitFor(() => {
      const tooltipElement = queryByRole("tooltip");
      expect(tooltipElement).toBeFalsy();
    });
  });
});
