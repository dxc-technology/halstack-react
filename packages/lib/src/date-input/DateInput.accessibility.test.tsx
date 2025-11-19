import { render } from "@testing-library/react";
import { axe, formatRules } from "../../test/accessibility/axe-helper";
import DxcDateInput from "./DateInput";
import MockDOMRect from "../../test/mocks/domRectMock";

// TODO: REMOVE
import rules from "../../test/accessibility/rules/specific/date-input/disabledRules";
import { vi } from "vitest";

// Mocking DOMRect for Radix Primitive Popover
global.DOMRect = MockDOMRect;
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

const disabledRules = {
  rules: formatRules(rules),
};

describe("DateInput component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
    );
    const results = await axe(baseElement, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for autocomplete mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
    );
    const results = await axe(baseElement, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for optional mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
    );
    const results = await axe(baseElement, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for error mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
    );
    const results = await axe(baseElement, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for read-only mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
    );
    const results = await axe(baseElement, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
        disabled
      />
    );
    const results = await axe(baseElement, disabledRules);
    expect(results.violations).toHaveLength(0);
  });
});
