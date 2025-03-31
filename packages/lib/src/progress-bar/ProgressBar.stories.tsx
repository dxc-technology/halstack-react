import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import { HalstackProvider } from "../HalstackContext";
import DxcProgressBar from "./ProgressBar";

export default {
  title: "Progress Bar",
  component: DxcProgressBar,
} as Meta<typeof DxcProgressBar>;

const ProgressBar = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcProgressBar />
      <Title title="Value only" theme="light" level={4} />
      <DxcProgressBar value={50} showValue />
      <Title title="With helperText" theme="light" level={4} />
      <DxcProgressBar helperText="Helper text" value={24} showValue />
      <Title title="Label only" theme="light" level={4} />
      <DxcProgressBar label="Loading..." />
      <Title title="Complete progress bar" theme="light" level={4} />
      <DxcProgressBar label="Loading..." value={100} showValue helperText="Helper text" />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xxsmall" margin="xxsmall" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xsmall" margin="xsmall" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcProgressBar label="Margin small" margin="small" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcProgressBar label="Margin medium" margin="medium" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcProgressBar label="Margin large" margin="large" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xlarge" margin="xlarge" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xxlarge" margin="xxlarge" value={50} showValue />
    </ExampleContainer>
  </>
);

const ProgressBarWithOverlay = () => (
  <ExampleContainer>
    <Title title="Overlay" theme="dark" level={4} />
    <DxcProgressBar label="Overlay" helperText="Helper text" overlay showValue value={50} />
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcProgressBar>;

export const Chromatic: Story = {
  render: ProgressBar,
};

export const ProgressBarOverlay: Story = {
  render: ProgressBarWithOverlay,
};
