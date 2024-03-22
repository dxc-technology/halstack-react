import React from "react";
import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import DxcTextInput from "./TextInput.tsx";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cayman Islands, The",
  "Central African Republic",
  "Chad",
  "Democratic Republic of the Congo",
  "Dominican Republic",
  "Dominica",
  "Denmark",
  "Djibouti",
];

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
        minLength={0}
        maxLength={100}
        clearable
      />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for autocomplete mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
        minLength={0}
        maxLength={100}
        clearable
        autocomplete="on"
      />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for suggestions mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
        minLength={0}
        maxLength={100}
        clearable
        suggestions={countries}
      />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for pattern mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
        minLength={0}
        maxLength={100}
        clearable
        pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
      />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for optional mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
        minLength={0}
        maxLength={100}
        clearable
        optional
      />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for error mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
        minLength={0}
        maxLength={100}
        clearable
      />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for read-only mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
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
        minLength={0}
        maxLength={100}
        readOnly
      />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcTextInput
        label="Label"
        placeholder="Placeholder"
        helperText="Helper Text"
        margin="medium"
        name="Name"
        size="medium"
        suffix="Suffix"
        prefix="Prefix"
        action={action}
        minLength={0}
        maxLength={100}
        disabled
      />
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
