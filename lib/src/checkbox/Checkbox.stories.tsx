import React from "react";
import DxcCheckbox from "./Checkbox";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Checkbox",
  component: DxcCheckbox,
};

const Checkbox = () => (
  <>
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Focused" theme="light" level={4} />
        <DxcCheckbox label="Focused" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Checked" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" checked />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Required" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" required />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled and checked" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" disabled checked />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled and required" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" disabled required />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled, required and checked" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" disabled required checked />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Label after" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Checked with label after" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" checked labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Required with label after" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" required labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled and checked with label after" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" disabled checked labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled and required with label after" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" disabled required labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled, required and checked with label after" theme="light" level={4} />
        <DxcCheckbox label="Checkbox" disabled required checked labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hovered" theme="light" level={4} />
        <DxcCheckbox label="Hovered" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hovered and checked" theme="light" level={4} />
        <DxcCheckbox label="Hovered" checked />
      </ExampleContainer>
    </>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <>
          <ExampleContainer>
            <Title title="Default" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Checked" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" checked />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Required" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" required />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled and checked" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" disabled checked />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled and required" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" disabled required />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled, required and checked" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" disabled required checked />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Label after" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Checked with label after" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" checked labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Required with label after" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" required labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled and checked with label after" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" disabled checked labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled and required with label after" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" disabled required labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled, required and checked with label after" theme="dark" level={4} />
            <DxcCheckbox label="Checkbox" disabled required checked labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-hover">
            <Title title="Hovered" theme="dark" level={4} />
            <DxcCheckbox label="Hovered" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-hover">
            <Title title="Hovered and checked" theme="dark" level={4} />
            <DxcCheckbox label="Hovered" checked />
          </ExampleContainer>
        </>
      </DarkContainer>
    </BackgroundColorProvider>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <DxcCheckbox label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcCheckbox label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcCheckbox label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcCheckbox label="FitContent" size="fitContent" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcCheckbox label="FillParent" size="fillParent" />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcCheckbox label="Xxsmall" margin={"xxsmall"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcCheckbox label="Xsmall" margin={"xsmall"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcCheckbox label="Small" margin={"small"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcCheckbox label="Medium" margin={"medium"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcCheckbox label="Large" margin={"large"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcCheckbox label="Xlarge" margin={"xlarge"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcCheckbox label="Xxlarge" margin={"xxlarge"} />
    </ExampleContainer>
  </>
);

export const Chromatic = Checkbox.bind({});
Chromatic.play = async () => {
  await userEvent.tab();
  await userEvent.tab();
};
