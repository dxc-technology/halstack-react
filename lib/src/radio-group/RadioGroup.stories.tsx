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
];

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default (column)" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Row" theme="light" level={4} />
      <DxcRadioGroup label="Example" helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Optional" theme="light" level={4} />
      <DxcRadioGroup
        label="Example"
        optionalOptionLabel="No answer"
        optional
        helperText="Helper text"
        options={options}
        stacking="row"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcRadioGroup label="Example" error="Error message" helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
  </>
);
