import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import { HalstackProvider } from "../HalstackContext";
import DxcSpinner from "./Spinner";

export default {
  title: "Spinner",
  component: DxcSpinner,
} as Meta<typeof DxcSpinner>;

const opinionatedTheme = {
  spinner: {
    accentColor: "#5f249f",
    baseColor: "#ffffff",
    fontColor: "#000000",
    overlayColor: "#a46ede",
    overlayFontColor: "#ffffff",
  },
};

const Spinner = () => (
  <>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcSpinner label="Label" value={50}></DxcSpinner>
      <Title title="With value label" theme="light" level={4} />
      <DxcSpinner value={50} showValue></DxcSpinner>
      <Title title="With label and value label" theme="light" level={4} />
      <DxcSpinner label="Label" value={50} showValue></DxcSpinner>
      <Title title="With 100%" theme="light" level={4} />
      <DxcSpinner label="Label" value={100} showValue></DxcSpinner>
    </ExampleContainer>
    <Title title="Modes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Mode large" theme="light" level={4} />
      <DxcSpinner mode="large" value={50}></DxcSpinner>
      <Title title="Mode small" theme="light" level={4} />
      <DxcSpinner mode="small" value={50}></DxcSpinner>
      <Title title="Mode small with 100%" theme="light" level={4} />
      <DxcSpinner mode="small" value={100} showValue></DxcSpinner>
    </ExampleContainer>
    <Title title="Margins with large mode" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xxsmall" value={75}></DxcSpinner>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xsmall" value={75}></DxcSpinner>
      <Title title="Small margin" theme="light" level={4} />
      <DxcSpinner margin="small" value={75}></DxcSpinner>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSpinner margin="medium" value={75}></DxcSpinner>
      <Title title="Large margin" theme="light" level={4} />
      <DxcSpinner margin="large" value={75}></DxcSpinner>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xlarge" value={75}></DxcSpinner>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xxlarge" value={75}></DxcSpinner>
    </ExampleContainer>
    <Title title="Margins with small mode" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xxsmall" mode="small" value={75}></DxcSpinner>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xsmall" mode="small" value={75}></DxcSpinner>
      <Title title="Small margin" theme="light" level={4} />
      <DxcSpinner margin="small" mode="small" value={75}></DxcSpinner>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSpinner margin="medium" mode="small" value={75}></DxcSpinner>
      <Title title="Large margin" theme="light" level={4} />
      <DxcSpinner margin="large" mode="small" value={75}></DxcSpinner>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xlarge" mode="small" value={75}></DxcSpinner>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xxlarge" mode="small" value={75}></DxcSpinner>
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <Title title="With label and value label" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSpinner label="Label" value={50} showValue></DxcSpinner>
      </HalstackProvider>
    </ExampleContainer>
  </>
);

const SpinnerOverlay = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value={25}></DxcSpinner>
  </ExampleContainer>
);

const SpinnerOverlay100 = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value={100}></DxcSpinner>
  </ExampleContainer>
);

const SpinnerOverlayLabel = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value={50} label="Label"></DxcSpinner>
  </ExampleContainer>
);

const SpinnerOverlayValue = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value={50} showValue></DxcSpinner>
  </ExampleContainer>
);

const SpinnerOverlayValueAndLabel = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" label="Label" value={50} showValue></DxcSpinner>
  </ExampleContainer>
);

const SpinnerOverlayValueAndLabelOpinionated = () => (
  <ExampleContainer>
    <HalstackProvider theme={opinionatedTheme}>
      <Title title="Mode overlay" theme="light" level={4} />
      <DxcSpinner mode="overlay" label="Label" value={50} showValue></DxcSpinner>
    </HalstackProvider>
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcSpinner>;

export const Chromatic: Story = {
  render: Spinner,
};

export const SpinnerWithOverlay: Story = {
  render: SpinnerOverlay,
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
export const SpinnerOverlayWithValueAndLabelOpinionated: Story = {
  render: SpinnerOverlayValueAndLabelOpinionated,
};
