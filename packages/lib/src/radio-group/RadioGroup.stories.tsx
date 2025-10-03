import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcRadioGroup from "./RadioGroup";

export default {
  title: "Radio Group",
  component: DxcRadioGroup,
} satisfies Meta<typeof DxcRadioGroup>;

const singleOption = [{ label: "Option A", value: "A" }];

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

const singleDisabledOptions = [{ label: "Option A", value: "A", disabled: true }];

const RadioGroup = () => (
  <>
    <Title title="Enabled" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={singleOption} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={singleOption} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={singleOption} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={singleOption} />
    </ExampleContainer>
    <Title title="Disabled" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={singleDisabledOptions} defaultValue="A" />
    </ExampleContainer>
    <Title title="Readonly" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={singleOption} defaultValue="A" readOnly />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={singleOption} defaultValue="A" readOnly />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={singleOption} defaultValue="A" readOnly />
    </ExampleContainer>
    <Title title="Error" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <DxcRadioGroup
        label="Label"
        helperText="Helper text"
        options={singleOption}
        defaultValue="A"
        error="Error message"
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup
        label="Label"
        helperText="Helper text"
        options={singleOption}
        defaultValue="A"
        readOnly
        error="Error message"
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup
        label="Label"
        helperText="Helper text"
        options={singleOption}
        defaultValue="A"
        readOnly
        error="Error message"
      />
    </ExampleContainer>
    <Title title="Variants" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Column" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Row" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Optional" theme="light" level={4} />
      <DxcRadioGroup label="Label" optional helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={options} disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Readonly" theme="light" level={4} />
      <DxcRadioGroup label="Label" readOnly helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error space reserved" theme="light" level={4} />
      <DxcRadioGroup label="Label" error="" helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcRadioGroup label="Label" error="Error message" helperText="Helper text" options={options} />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcRadioGroup>;

export const Chromatic: Story = {
  render: RadioGroup,
};
