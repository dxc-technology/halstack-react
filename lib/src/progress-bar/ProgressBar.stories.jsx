import React from "react";
import DxcProgressBar from "./ProgressBar";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "ProgressBar",
  component: DxcProgressBar,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcProgressBar label="Loading..." overlay={false} />
      <Title title="Without label" theme="light" level={4} />
      <DxcProgressBar overlay={false} />
      <Title title="With helperText" theme="light" level={4} />
      <DxcProgressBar helperText="Helper text" overlay={false} />
      <Title title="With values" theme="light" level={4} />
      <DxcProgressBar label="Loading..." overlay={false} showValue />
      <Title title="With default value" theme="light" level={4} />
      <DxcProgressBar label="Loading..." overlay={false} showValue value={50} />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xxsmall" margin="xxsmall" overlay={false} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xsmall" margin="xsmall" overlay={false} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcProgressBar label="Margin small" margin="small" overlay={false} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcProgressBar label="Margin medium" margin="medium" overlay={false} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcProgressBar label="Margin large" margin="large" overlay={false} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xlarge" margin="xlarge" overlay={false} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="XxLarge margin" theme="light" level={4} />
      <DxcProgressBar label="Margin xxlarge" margin="xxlarge" overlay={false} />
    </ExampleContainer>
  </>
);

export const ProgressBarOverlay = () => (
  <ExampleContainer>
    <Title title="Overlay" theme="light" level={4} />
    <DxcProgressBar label="Overlay" helperText="Helper text" showValue value={50} />
  </ExampleContainer>
);
