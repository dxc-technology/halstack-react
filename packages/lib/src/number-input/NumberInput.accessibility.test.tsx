import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcNumberInput from "./NumberInput";
import MockDOMRect from "../../test/mocks/domRectMock";

// Mocking DOMRect for Radix Primitive Popover
global.DOMRect = MockDOMRect;
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe("Number input component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
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
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for optional mode", async () => {
    const { container } = render(
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
        optional
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for error mode", async () => {
    const { container } = render(
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
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(
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
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for read-only mode", async () => {
    const { container } = render(
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
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for autocomplete mode", async () => {
    const { container } = render(
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
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
