import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcSlider from "./Slider.tsx";

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

describe("Slider component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcSlider
        helperText="Helper Text"
        margin="medium"
        name="Name"
        size="medium"
        label="label"
        step={10}
        minValue={0}
        maxValue={100}
        value={50}
        showLimitsValues
        showInput
        marks
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
