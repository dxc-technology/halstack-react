import { render } from "@testing-library/react";
import { axe, formatRules } from "../../test/accessibility/axe-helper";
import DxcDateInput from "./DateInput";

// Mocking DOMRect for Radix Primitive Popover
(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0, x: 0, y: 0 }),
};
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// TODO: REMOVE
import rules from "../../test/accessibility/rules/specific/date-input/disabledRules";

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
    expect(results).toHaveNoViolations();
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
    expect(results).toHaveNoViolations();
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
    expect(results).toHaveNoViolations();
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
    expect(results).toHaveNoViolations();
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
    expect(results).toHaveNoViolations();
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
    expect(results).toHaveNoViolations();
  });
});
