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
      <Title title="With label" theme="light" level={4} />
      <DxcSpinner label="Label" value="50"></DxcSpinner>
      <Title title="With value label" theme="light" level={4} />
      <DxcSpinner value="50" showValue></DxcSpinner>
      <Title title="With label and value label" theme="light" level={4} />
      <DxcSpinner label="Label" value="50" showValue></DxcSpinner>
      <Title title="With 100%" theme="light" level={4} />
      <DxcSpinner label="Label" value="100" showValue></DxcSpinner>
    </ExampleContainer>
    <Title title="Modes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Mode large" theme="light" level={4} />
      <DxcSpinner mode="large" value="50"></DxcSpinner>
      <Title title="Mode small" theme="light" level={4} />
      <DxcSpinner mode="small" value="50"></DxcSpinner>
      <Title title="Mode small with 100%" theme="light" level={4} />
      <DxcSpinner mode="small" value="100" showValue></DxcSpinner>
    </ExampleContainer>
    <Title title="Margins with large mode" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xxsmall" value="75"></DxcSpinner>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xsmall" value="75"></DxcSpinner>
      <Title title="Small margin" theme="light" level={4} />
      <DxcSpinner margin="small" value="75"></DxcSpinner>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSpinner margin="medium" value="75"></DxcSpinner>
      <Title title="Large margin" theme="light" level={4} />
      <DxcSpinner margin="large" value="75"></DxcSpinner>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xlarge" value="75"></DxcSpinner>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xxlarge" value="75"></DxcSpinner>
    </ExampleContainer>
    <Title title="Margins with small mode" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xxsmall" mode="small" value="75"></DxcSpinner>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSpinner margin="xsmall" mode="small" value="75"></DxcSpinner>
      <Title title="Small margin" theme="light" level={4} />
      <DxcSpinner margin="small" mode="small" value="75"></DxcSpinner>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSpinner margin="medium" mode="small" value="75"></DxcSpinner>
      <Title title="Large margin" theme="light" level={4} />
      <DxcSpinner margin="large" mode="small" value="75"></DxcSpinner>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xlarge" mode="small" value="75"></DxcSpinner>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSpinner margin="xxlarge" mode="small" value="75"></DxcSpinner>
      <hr />
    </ExampleContainer>
  </>
);

export const SpinnerOverlay = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value="25"></DxcSpinner>
  </ExampleContainer>
);

export const SpinnerOverlayWith100 = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value="100"></DxcSpinner>
  </ExampleContainer>
);

export const SpinnerOverlayWithLabel = () => (
  <ExampleContainer>
    <Title title="Mode overlay" theme="light" level={4} />
    <DxcSpinner mode="overlay" value="50" label="Label"></DxcSpinner>
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
