import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcFlex from "../flex/Flex";
import DxcPasswordInput from "./PasswordInput";

export default {
  title: "Password Input",
  component: DxcPasswordInput,
} as Meta<typeof DxcPasswordInput>;

const PasswordInput = () => (
  <>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcPasswordInput />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcPasswordInput label="Password input" clearable />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Clearable" theme="light" level={4} />
      <DxcPasswordInput label="Password input" clearable value="password" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Non clearable" theme="light" level={4} />
      <DxcPasswordInput label="Non clearable password input" value="password" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Helper text" theme="light" level={4} />
      <DxcPasswordInput label="Help password input" helperText="Help message" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Invalid" theme="light" level={4} />
      <DxcPasswordInput label="Error password input" error="Error message." />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcPasswordInput label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcPasswordInput label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcPasswordInput label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcPasswordInput label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcPasswordInput label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcPasswordInput label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcPasswordInput label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcPasswordInput label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcPasswordInput label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcPasswordInput label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcPasswordInput label="FillParent" size="fillParent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcFlex justifyContent="space-between" gap="var(--spacing-gap-ml)">
        <DxcPasswordInput label="fillParent" size="fillParent" />
        <DxcPasswordInput label="medium" size="medium" />
        <DxcPasswordInput label="large" size="large" />
      </DxcFlex>
    </ExampleContainer>
  </>
);

const PasswordInteraction = () => (
  <ExampleContainer expanded>
    <Title title="Show password" theme="light" level={4} />
    <DxcPasswordInput label="Password input" value="Password" />
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcPasswordInput>;

export const Chromatic: Story = {
  render: PasswordInput,
};

export const ShowPassword: Story = {
  render: PasswordInteraction,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const passwordBtn = canvas.getByRole("button");
    await userEvent.click(passwordBtn);
  },
};
