import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcPasswordInput from "./PasswordInput.tsx";

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

describe("Password input component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcPasswordInput
        label="Password input label"
        helperText="Helper text"
        margin="medium"
        name="Password"
        size="medium"
        error="Password error"
        value="Password"
        minLength={5}
        maxLength={10}
        clearable
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
