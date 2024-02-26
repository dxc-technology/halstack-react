import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcRadioGroup from "./RadioGroup.tsx";

const options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
  { label: "Option 04", value: "4" },
  { label: "Option 05", value: "5" },
  { label: "Option 06", value: "6" },
  { label: "Option 07", value: "7" },
  { label: "Option 08", value: "8" },
  { label: "Option 09", value: "9" },
];

describe("Radio Group component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcRadioGroup label="test-radioGroup-label" options={options} error="" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
