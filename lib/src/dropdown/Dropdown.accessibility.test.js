import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcDropdown from "./Dropdown.tsx";

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

const options = [
  {
    value: "1",
    label: "Amazon",
  },
  {
    value: "2",
    label: "Ebay",
  },
  {
    value: "3",
    label: "Wallapop",
  },
  {
    value: "4",
    label: "Aliexpress",
  },
];

describe("Dropdown component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(<DxcDropdown options={options} label="dropdown-test" />);
    const results = await axe(baseElement);
    expect(results).toHaveNoViolations();
  });
});
