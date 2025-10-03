import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcSpinner from "./Spinner";
import { userEvent, within } from "storybook/internal/test";

export default {
  title: "Spinner",
  component: DxcSpinner,
} satisfies Meta<typeof DxcSpinner>;

const Spinner = () => (
  <>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcSpinner label="Label" value={50} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With value label" theme="light" level={4} />
      <DxcSpinner value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With value and label with ellipsis (triggers tooltip)" theme="light" level={4} />
      <DxcSpinner value={50} showValue label="Loading a full screen..." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label and value label" theme="light" level={4} />
      <DxcSpinner label="Label" value={50} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With 100%" theme="light" level={4} />
      <DxcSpinner label="Label" value={100} showValue />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Mode large" theme="light" level={4} />
      <DxcSpinner mode="large" value={50} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Mode small" theme="light" level={4} />
      <DxcSpinner mode="small" value={50} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Mode small with 100%" theme="light" level={4} />
      <DxcSpinner mode="small" value={100} showValue />
    </ExampleContainer>
    <Title title="Margins with large mode" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xxsmall" value={75} />
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xsmall" value={75} />
      <Title title="Small margin" theme="light" level={4} />
      <DxcSpinner margin="small" value={75} />
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSpinner margin="medium" value={75} />
      <Title title="Large margin" theme="light" level={4} />
      <DxcSpinner margin="large" value={75} />
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xlarge" value={75} />
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xxlarge" value={75} />
    </ExampleContainer>
    <Title title="Margins with small mode" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xxsmall" mode="small" value={75} />
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xsmall" mode="small" value={75} />
      <Title title="Small margin" theme="light" level={4} />
      <DxcSpinner margin="small" mode="small" value={75} />
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSpinner margin="medium" mode="small" value={75} />
      <Title title="Large margin" theme="light" level={4} />
      <DxcSpinner margin="large" mode="small" value={75} />
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xlarge" mode="small" value={75} />
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xxlarge" mode="small" value={75} />
    </ExampleContainer>
  </>
);

const SpinnerWithOverlay = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value={25} />
  </ExampleContainer>
);

const SpinnerOverlay100 = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value={100} />
  </ExampleContainer>
);

const SpinnerOverlayLabel = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value={50} label="Label" />
  </ExampleContainer>
);

const SpinnerOverlayValue = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value={50} showValue />
  </ExampleContainer>
);

const SpinnerOverlayValueAndLabel = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" label="Label" value={50} showValue />
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcSpinner>;

export const Chromatic: Story = {
  render: Spinner,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(await canvas.findByText("Loading a full screen..."));
    await userEvent.hover(await canvas.findByText("Loading a full screen..."));
  },
};
export const SpinnerOverlay: Story = {
  render: SpinnerWithOverlay,
};
export const SpinnerOverlayWith100: Story = {
  render: SpinnerOverlay100,
};
export const SpinnerOverlayWithLabel: Story = {
  render: SpinnerOverlayLabel,
};
export const SpinnerOverlayWithValue: Story = {
  render: SpinnerOverlayValue,
};
export const SpinnerOverlayWithValueAndLabel: Story = {
  render: SpinnerOverlayValueAndLabel,
};
