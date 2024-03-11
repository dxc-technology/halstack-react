import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcDateInput from "./DateInput.tsx";
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

describe("DateInput component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcFlex>
        <DxcDateInput
          label="Example label"
          helperText="Help message"
          defaultValue="06-04-2007"
          format="dd/mm/yy"
          name="DateInput Name"
          margin="medium"
          size="medium"
          placeholder
          clearable
        />
        <DxcDateInput
          label="Example label"
          helperText="Help message"
          defaultValue="06-04-2007"
          format="dd/mm/yy"
          name="DateInput Name"
          margin="medium"
          size="medium"
          placeholder
          autocomplete="on"
        />
        <DxcDateInput
          label="Example label"
          helperText="Help message"
          defaultValue="06-04-2007"
          format="dd/mm/yy"
          name="DateInput Name"
          margin="medium"
          size="medium"
          placeholder
          optional
        />
        <DxcDateInput
          label="Example label"
          helperText="Help message"
          defaultValue="06-04-2007"
          format="dd/mm/yy"
          name="DateInput Name"
          margin="medium"
          error="Error message."
          size="medium"
          placeholder
          clearable
        />
        <DxcDateInput
          label="Example label"
          helperText="Help message"
          defaultValue="06-04-2007"
          format="dd/mm/yy"
          name="DateInput Name"
          margin="medium"
          error="Error message."
          size="medium"
          placeholder
          clearable
          readOnly
        />
      </DxcFlex>
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});