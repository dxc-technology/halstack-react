import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcFlex from "../flex/Flex";
import DxcSelect from "./Select";

const iconSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z" />
      </g>
    </g>
  </svg>
);

const groupOptions = [
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

const singleOptions = [
  { label: "Option 01", value: "1", icon: iconSVG },
  { label: "Option 02", value: "2", icon: iconSVG },
  { label: "Option 03", value: "3", icon: iconSVG },
  { label: "Option 04", value: "4", icon: iconSVG },
];

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

describe("Select component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcFlex>
        <DxcSelect
          label="test-select-label"
          helperText="test-select-helper-text"
          placeholder="Example text"
          options={singleOptions}
          defaultValue="1"
          margin="medium"
          name="Name"
          size="medium"
          searchable
        />
        <DxcSelect
          label="test-select-label"
          helperText="test-select-helper-text"
          placeholder="Example text"
          options={singleOptions}
          defaultValue={["4", "2", "6"]}
          margin="medium"
          name="Name"
          size="medium"
          searchable
          multiple
          optional
        />
      </DxcFlex>
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for group mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcFlex>
        <DxcSelect
          label="test-select-label"
          helperText="test-select-helper-text"
          placeholder="Example text"
          options={groupOptions}
          defaultValue={["4", "2", "6"]}
          error="Error"
          margin="medium"
          name="Name"
          size="medium"
          searchable
          multiple
        />
        <DxcSelect
          label="test-select-label"
          helperText="test-select-helper-text"
          placeholder="Example text"
          options={groupOptions}
          defaultValue={["4", "2", "6"]}
          margin="medium"
          name="Name"
          size="medium"
          searchable
          multiple
          disabled
        />
      </DxcFlex>
    );
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
