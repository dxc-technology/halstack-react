import React from "react";
import DxcSpinner from "./Spinner";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Spinner",
  component: DxcSpinner,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcSpinner></DxcSpinner>
      <Title title="With label" theme="light" level={4} />
      <DxcSpinner label="Label"></DxcSpinner>
      <Title title="With value" theme="light" level={4} />
      <DxcSpinner value="50"></DxcSpinner>
      <Title title="With value label" theme="light" level={4} />
      <DxcSpinner value="50" showValue></DxcSpinner>
      <Title title="With label and value label" theme="light" level={4} />
      <DxcSpinner label="Label" value="50" showValue></DxcSpinner>
    </ExampleContainer>
    <Title title="Modes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Mode large" theme="light" level={4} />
      <DxcSpinner mode="large"></DxcSpinner>
      <Title title="Mode small" theme="light" level={4} />
      <DxcSpinner mode="small"></DxcSpinner>
    </ExampleContainer>
    <Title title="Margins with large mode" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xxsmall"></DxcSpinner>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xsmall"></DxcSpinner>
      <Title title="Small margin" theme="light" level={4} />
      <DxcSpinner margin="small"></DxcSpinner>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSpinner margin="medium"></DxcSpinner>
      <Title title="Large margin" theme="light" level={4} />
      <DxcSpinner margin="large"></DxcSpinner>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xlarge"></DxcSpinner>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xxlarge"></DxcSpinner>
    </ExampleContainer>
    <Title title="Margins with small mode" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xxsmall" mode="small"></DxcSpinner>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xsmall" mode="small"></DxcSpinner>
      <Title title="Small margin" theme="light" level={4} />
      <DxcSpinner margin="small" mode="small"></DxcSpinner>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSpinner margin="medium" mode="small"></DxcSpinner>
      <Title title="Large margin" theme="light" level={4} />
      <DxcSpinner margin="large" mode="small"></DxcSpinner>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xlarge" mode="small"></DxcSpinner>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xxlarge" mode="small"></DxcSpinner>
    </ExampleContainer>
  </>
);

export const SpinnerOverlay = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay"></DxcSpinner>
  </ExampleContainer>
);

export const SpinnerOverlayWithLabel = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" label="Label"></DxcSpinner>
  </ExampleContainer>
);

export const SpinnerOverlayWithValue = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value="50" showValue></DxcSpinner>
  </ExampleContainer>
);

export const SpinnerOverlayWithValueAndLabel = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" label="Label" value="50" showValue></DxcSpinner>
  </ExampleContainer>
);