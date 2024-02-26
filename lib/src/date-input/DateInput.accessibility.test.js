import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcDateInput from "./DateInput.tsx";

// Mocking DOMRect for Radix Primitive Popover
global.globalThis = global;
global.DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("DateInput component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(<DxcDateInput label="Default label" defaultValue="21-10-2015" />);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
