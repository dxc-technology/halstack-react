import { DxcRadioGroup } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const options = [
  { label: "Option A", value: "A" },
  { label: "Option B", value: "B" },
  { label: "Option C", value: "C" },
];
const single_disabled_options = [
  { label: "Option A", value: "A" },
  { label: "Option B", value: "B", disabled: true },
  { label: "Option C", value: "C" },
];

const RadioGroup = () => (
  <PreviewContainer>
    <Mode text="States">
      <DxcRadioGroup label="Default" defaultValue="A" options={options} />
      <DxcRadioGroup label="Error" defaultValue="A" options={options} error="Error message" />
      <DxcRadioGroup label="Read-only" defaultValue="A" options={options} readOnly />
    </Mode>
    <Mode text="Disabled">
      <DxcRadioGroup label="Disabled group" defaultValue="A" options={options} disabled />
      <DxcRadioGroup label="Disabled option" defaultValue="A" options={single_disabled_options} />
    </Mode>
    <Mode text="Optional">
      <DxcRadioGroup
        label="Label text"
        helperText="Adds a predefined option whose value is the empty string"
        options={options}
        optional
      />
    </Mode>
    <Mode text="Stacking">
      <DxcRadioGroup
        label="Column (default)"
        helperText="By default, stacking is set to column"
        options={options}
        stacking="column"
      />
      <DxcRadioGroup
        label="Row"
        helperText="But with the prop 'stacking' you can make the options display in a row"
        options={options}
        stacking="row"
      />
    </Mode>
  </PreviewContainer>
);

export default RadioGroup;
