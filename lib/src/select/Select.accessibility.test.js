import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcSelect from "./Select.tsx";

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

describe("Select component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcSelect label="test-select-label" helperText="test-select-helper-text" placeholder="Example text" />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
