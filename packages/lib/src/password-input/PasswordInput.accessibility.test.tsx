import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcPasswordInput from "./PasswordInput";
import { vi } from "vitest";

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
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
    expect(results.violations).toHaveLength(0);
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
    expect(results.violations).toHaveLength(0);
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
    expect(results.violations).toHaveLength(0);
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
    expect(results.violations).toHaveLength(0);
  });
});
