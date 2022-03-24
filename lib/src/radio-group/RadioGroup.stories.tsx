import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcRadioGroup from "./RadioGroup";

export default {
  title: "Radio Group",
  component: DxcRadioGroup,
};

const single_option = [{ label: "Option A", value: "A" }];

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

const single_disabled_options = [{ label: "Option A", value: "A", disabled: true }];

export const Chromatic = () => (
  <>
    <Title title="Radio input states" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <DxcRadioGroup label="Example" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup label="Example" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup label="Example" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcRadioGroup label="Example" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup label="Example" options={single_disabled_options} defaultValue="A" />
    </ExampleContainer>
    <Title title="Readonly radio input sub-states" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <DxcRadioGroup label="Example" options={single_option} defaultValue="A" readonly />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup label="Example" options={single_option} defaultValue="A" readonly />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup label="Example" options={single_option} defaultValue="A" readonly />
    </ExampleContainer>
    <Title title="Error radio input sub-states" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <DxcRadioGroup label="Example" options={single_option} defaultValue="A" error="Error message" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup label="Example" options={single_option} defaultValue="A" readonly error="Error message" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup label="Example" options={single_option} defaultValue="A" readonly error="Error message" />
    </ExampleContainer>
    <Title title="Variants" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Column" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Row" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Optional" theme="light" level={4} />
      <DxcRadioGroup label="Example" optional helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Readonly" theme="light" level={4} />
      <DxcRadioGroup label="Example" readonly helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcRadioGroup label="Example" error="Error message" helperText="Helper text" options={options} />
    </ExampleContainer>
  </>
);
