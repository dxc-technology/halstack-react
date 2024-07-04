import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcPasswordInput from "./PasswordInput";

// Mocking DOMRect for Radix Primitive Popover
(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Password input component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcPasswordInput
        label="Password input label"
        helperText="Helper text"
        margin="medium"
        name="Password"
        size="medium"
        value="Password"
        minLength={5}
        maxLength={10}
        clearable
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for pattern mode", async () => {
    const { container } = render(
      <DxcPasswordInput
        label="Password input label"
        helperText="Helper text"
        margin="medium"
        name="Password"
        size="medium"
        value="Password"
        minLength={5}
        maxLength={10}
        autocomplete="on"
        pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for clearable mode", async () => {
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
  it("Should not have basic accessibility issues for autocomplete mode", async () => {
    const { container } = render(
      <DxcPasswordInput
        label="Password input label"
        helperText="Helper text"
        margin="medium"
        name="Password"
        size="medium"
        value="Password"
        minLength={5}
        maxLength={10}
        autocomplete="on"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
