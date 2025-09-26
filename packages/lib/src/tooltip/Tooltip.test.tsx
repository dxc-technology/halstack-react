import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DxcTooltip from "./Tooltip";
import DxcButton from "../button/Button";
import "@testing-library/jest-dom"; // Needed for findByRole

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

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
    const tooltipElement = await screen.findByRole("tooltip", { name: "Tooltip Test" });
    expect(tooltipElement).toBeInTheDocument();
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
