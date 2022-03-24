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

const single_disabled_options = [
  { label: "Option A", value: "A", disabled: true },
];

export const Chromatic = () => (
  <>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup label="Hovered radio input" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup label="Active radio input" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcRadioGroup label="Focused radio input" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup label="Disabled radio input" options={single_disabled_options} defaultValue="A" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Column" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Row" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup
        label="Disabled radio group"
        helperText="Helper text"
        options={options}
        disabled
        defaultValue="2"
      />
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
      <DxcRadioGroup
        label="Example"
        error="Error message"
        helperText="Helper text"
        options={options}
        defaultValue="2"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Readonly" theme="light" level={4} />
      <DxcRadioGroup label="Example" readonly helperText="Helper text" options={options} defaultValue="2" />
    </ExampleContainer>
  </>
);
