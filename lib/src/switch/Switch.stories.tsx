import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcSwitch from "./Switch";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";

export default {
  title: "Switch",
  component: DxcSwitch,
};

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="With label after" theme="light" level={4} />
      <DxcSwitch label="Switch" labelPosition="after" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcSwitch />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Checked" theme="light" level={4} />
      <DxcSwitch label="Switch" checked />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Required" theme="light" level={4} />
      <DxcSwitch label="Switch" required />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcSwitch label="Switch" disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled required" theme="light" level={4} />
      <DxcSwitch label="Switch" disabled required labelPosition="after" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled checked" theme="light" level={4} />
      <DxcSwitch label="Switch" disabled checked labelPosition="after" />
    </ExampleContainer>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <ExampleContainer>
          <Title title="With label" theme="dark" level={4} />
          <DxcSwitch label="Switch" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Checked" theme="dark" level={4} />
          <DxcSwitch label="Switch" checked />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Required" theme="dark" level={4} />
          <DxcSwitch label="Switch" required />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled" theme="dark" level={4} />
          <DxcSwitch label="Switch" disabled />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled required" theme="dark" level={4} />
          <DxcSwitch label="Switch" disabled required labelPosition="after" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled checked" theme="dark" level={4} />
          <DxcSwitch label="Switch" disabled checked labelPosition="after" />
        </ExampleContainer>
      </DarkContainer>
    </BackgroundColorProvider>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcSwitch label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcSwitch label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcSwitch label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcSwitch label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcSwitch label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcSwitch label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcSwitch label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcSwitch label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size (with large label)" theme="light" level={4} />
      <DxcSwitch label="Very very very large label or even huge" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size (with long label)" theme="light" level={4} />
      <DxcSwitch
        label="Large texttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
        labelPosition="after"
        size="medium"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcSwitch label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcSwitch label="FillParent" size="fillParent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FitContent size" theme="light" level={4} />
      <DxcSwitch label="FitContent" size="fitContent" />
    </ExampleContainer>
  </>
);

const Switch = () => (
  <ExampleContainer>
    <Title title="Focused" theme="light" level={4} />
    <DxcSwitch label="Switch" />
  </ExampleContainer>
);
export const FocusedSwitch = Switch.bind({});
FocusedSwitch.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  canvas.getByRole("checkbox").focus();
};

const DarkSwitch = () => (
  <BackgroundColorProvider color="#333333">
    <DarkContainer>
      <ExampleContainer>
        <Title title="Focused" theme="dark" level={4} />
        <DxcSwitch label="Switch" />
      </ExampleContainer>
    </DarkContainer>
  </BackgroundColorProvider>
);

export const FocusedSwitchOnDark = DarkSwitch.bind({});
FocusedSwitchOnDark.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  canvas.getByRole("checkbox").focus();
};
