import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcSelect from "./Select.tsx";
import DxcFlex from "../flex/Flex.tsx";

const group_options = [
  {
    label: "Group 001",
    options: [
      { label: "Option 001", value: "1" },
      { label: "Option 002", value: "2" },
      { label: "Option 003", value: "3" },
    ],
  },
  {
    label: "Group 002",
    options: [
      { label: "Option 004", value: "4" },
      { label: "Option 005", value: "5" },
      { label: "Option 006", value: "6" },
    ],
  },
  {
    label: "Group 003",
    options: [
      { label: "Option 007", value: "7" },
      { label: "Option 008", value: "8" },
      { label: "Option 009", value: "9" },
    ],
  },
  {
    label: "Group 004",
    options: [
      { label: "Option 010", value: "10" },
      { label: "Option 011", value: "11" },
      { label: "Option 012", value: "12" },
    ],
  },
  {
    label: "Group 005",
    options: [
      { label: "Option 013", value: "13" },
      { label: "Option 014", value: "14" },
      { label: "Option 015", value: "15" },
    ],
  },
];

const single_options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
  { label: "Option 04", value: "4" },
];

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

describe("Select component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcFlex>
        <DxcSelect
          label="test-select-label"
          helperText="test-select-helper-text"
          placeholder="Example text"
          options={single_options}
          defaultValue={1}
          error="Error"
          margin="medium"
          name="Name"
          size="medium"
          searchable
        />
        <DxcSelect
          label="test-select-label"
          helperText="test-select-helper-text"
          placeholder="Example text"
          options={group_options}
          defaultValue={["4", "2", "6"]}
          error="Error"
          margin="medium"
          name="Name"
          size="medium"
          searchable
          multiple
        />
      </DxcFlex>
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
