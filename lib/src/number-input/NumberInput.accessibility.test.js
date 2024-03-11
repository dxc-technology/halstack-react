import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcNumberInput from "./NumberInput.tsx";
import DxcFlex from "../flex/Flex.tsx";

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

describe("Number input component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFlex>
        <DxcNumberInput
          label="Number input label"
          helperText="Helper text"
          placeholder="Placeholder"
          defaultValue="10"
          margin="medium"
          min={0}
          max={100}
          suffix="Suffix"
          prefix="Prefix"
          name="Name"
          size="medium"
          step={1}
        />
        <DxcNumberInput
          label="Number input label"
          helperText="Helper text"
          placeholder="Placeholder"
          defaultValue="10"
          margin="medium"
          min={0}
          max={100}
          suffix="Suffix"
          prefix="Prefix"
          name="Name"
          error="Input error"
          size="medium"
          step={1}
        />
        <DxcNumberInput
          label="Number input label"
          helperText="Helper text"
          placeholder="Placeholder"
          defaultValue="10"
          margin="medium"
          min={0}
          max={100}
          suffix="Suffix"
          prefix="Prefix"
          name="Name"
          size="medium"
          step={1}
          disabled
        />
        <DxcNumberInput
          label="Number input label"
          helperText="Helper text"
          placeholder="Placeholder"
          defaultValue="10"
          margin="medium"
          min={0}
          max={100}
          suffix="Suffix"
          prefix="Prefix"
          name="Name"
          size="medium"
          step={1}
          readOnly
        />
        <DxcNumberInput
          label="Number input label"
          helperText="Helper text"
          placeholder="Placeholder"
          defaultValue="10"
          margin="medium"
          min={0}
          max={100}
          suffix="Suffix"
          prefix="Prefix"
          name="Name"
          size="medium"
          step={1}
          autocomplete="on"
        />
      </DxcFlex>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});