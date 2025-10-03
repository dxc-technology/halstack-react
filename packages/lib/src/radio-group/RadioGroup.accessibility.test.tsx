import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcRadioGroup from "./RadioGroup";

const options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
  { label: "Option 04", value: "4" },
  { label: "Option 05", value: "5", disabled: true },
  { label: "Option 06", value: "6", disabled: true },
  { label: "Option 07", value: "7", disabled: true },
  { label: "Option 08", value: "8", disabled: true },
  { label: "Option 09", value: "9" },
];

describe("Radio Group component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcRadioGroup
        label="test-radioGroup-label"
        options={options}
        error="Error"
        defaultValue="3"
        helperText="Helper Text"
        name="Name"
        stacking="row"
        optionalItemLabel="Optional"
        optional
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for read-only mode", async () => {
    const { container } = render(
      <DxcRadioGroup
        label="test-radioGroup-label"
        options={options}
        error="Error"
        defaultValue="3"
        helperText="Helper Text"
        name="Name"
        stacking="row"
        optionalItemLabel="Optional"
        readOnly
      />
    );
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});
