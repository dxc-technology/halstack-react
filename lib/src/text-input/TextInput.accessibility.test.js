import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcTextInput from "./TextInput.tsx";
import DxcFlex from "../flex/Flex.tsx";

const action = {
  onClick: () => {},
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  ),
  title: "Action Title",
};

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

describe("TextInput component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcFlex>
        <DxcTextInput
          label="Label"
          placeholder="Placeholder"
          helperText="Helper Text"
          margin="medium"
          name="Name"
          size="medium"
          suffix="Suffix"
          prefix="Prefix"
          defaultValue="Value"
          action={action}
          clearable
        />
        <DxcTextInput
          label="Label"
          placeholder="Placeholder"
          helperText="Helper Text"
          margin="medium"
          name="Name"
          size="medium"
          suffix="Suffix"
          prefix="Prefix"
          defaultValue="Value"
          error="Error message."
          action={action}
          clearable
        />
        <DxcTextInput
          label="Label"
          placeholder="Placeholder"
          helperText="Helper Text"
          margin="medium"
          name="Name"
          size="medium"
          suffix="Suffix"
          prefix="Prefix"
          defaultValue="Value"
          action={action}
          readOnly
          clearable
        />
      </DxcFlex>
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
