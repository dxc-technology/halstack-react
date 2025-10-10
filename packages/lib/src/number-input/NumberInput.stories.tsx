import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcFlex from "../flex/Flex";
import DxcNumberInput from "./NumberInput";

export default {
  title: "Number Input",
  component: DxcNumberInput,
} satisfies Meta<typeof DxcNumberInput>;

const NumberInput = () => (
  <>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcNumberInput />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Without controls" theme="light" level={4} />
      <DxcNumberInput showControls={false} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label and placeholder" theme="light" level={4} />
      <DxcNumberInput label="Number input" placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Helper text, optional and value" theme="light" level={4} />
      <DxcNumberInput label="Number input" defaultValue="12" helperText="Help message" optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled and placeholder" theme="light" level={4} />
      <DxcNumberInput label="Disabled number input" disabled placeholder="Placeholder" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled, helper text, optional and value" theme="light" level={4} />
      <DxcNumberInput label="Disabled number input" helperText="Help message" disabled optional defaultValue="10" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Read only" theme="light" level={4} />
      <DxcNumberInput label="Example label" helperText="Help message" readOnly optional prefix="€" defaultValue="33" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered read only" theme="light" level={4} />
      <DxcNumberInput label="Example label" helperText="Help message" readOnly optional prefix="€" defaultValue="1" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active read only" theme="light" level={4} />
      <DxcNumberInput
        label="Example label"
        helperText="Help message"
        readOnly
        optional
        prefix="€"
        placeholder="Placeholder"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Prefix" theme="light" level={4} />
      <DxcNumberInput label="With prefix" prefix="+34" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Suffix" theme="light" level={4} />
      <DxcNumberInput label="With suffix" suffix="USD" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid" theme="light" level={4} />
      <DxcNumberInput
        label="Error number input"
        helperText="Help message"
        error="Error message."
        defaultValue="23"
        optional
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcNumberInput label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcNumberInput label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcNumberInput label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcNumberInput label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcNumberInput label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcNumberInput label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcNumberInput label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcNumberInput label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcNumberInput label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcNumberInput label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcNumberInput label="FillParent" size="fillParent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Different sizes inside a flex" theme="light" level={4} />
      <DxcFlex justifyContent="space-between" gap="var(--spacing-gap-ml)">
        <DxcNumberInput label="fillParent" size="fillParent" />
        <DxcNumberInput label="medium" size="medium" />
        <DxcNumberInput label="large" size="large" />
      </DxcFlex>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcNumberInput>;

export const Chromatic: Story = {
  render: NumberInput,
};
