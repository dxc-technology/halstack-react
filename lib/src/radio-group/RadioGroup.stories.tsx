import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcRadioGroup from "./RadioGroup";

export default {
  title: "Radio Group",
  component: DxcRadioGroup,
};

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

const single_disabled_options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2", disabled: true },
  { label: "Option 3", value: "3" },
];

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default (column)" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} defaultValue="3" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Row" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup label="Disabled" error="Error message" helperText="Helper text" options={options} disabled optional defaultValue="2" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Single disabled" theme="light" level={4} />
      <DxcRadioGroup label="Disabled" helperText="Helper text" options={single_disabled_options} defaultValue="3" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Optional" theme="light" level={4} />
      <DxcRadioGroup
        label="Example"
        optionalItemLabel="No selection"
        optional
        helperText="Helper text"
        options={options}
        stacking="row"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcRadioGroup label="Example" error="Error message" helperText="Helper text" options={options} defaultValue="2" />
    </ExampleContainer>
  </>
);
