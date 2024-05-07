import React from "react";
import { render, waitFor, screen, waitForElementToBeRemoved } from "@testing-library/react";
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
  test("Tooltip shows/unshows when hovering/unhovering", async () => {
    const { getByText, queryByRole } = render(
      <DxcTooltip label="">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    );
    const triggerElement = getByText("Hoverable button");
    expect(queryByRole("tooltip")).toBeFalsy();
    userEvent.hover(triggerElement);
    expect(await screen.findByRole("tooltip", { name: "Tooltip Test" })).toBeTruthy();
    userEvent.unhover(triggerElement);
    await waitFor(() => {
      expect(queryByRole("tooltip")).toBeFalsy();
    });
  });
});
