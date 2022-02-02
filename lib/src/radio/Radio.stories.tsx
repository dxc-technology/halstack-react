import React from "react";
import DxcRadio from "./Radio";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Radio",
  component: DxcRadio,
};

const Radio = () => (
  <>
    <>
      <ExampleContainer>
        <Title title="Default" theme="light" level={4} />
        <DxcRadio label="Radio" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <Title title="Focused" theme="light" level={4} />
        <DxcRadio label="Focused" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Checked" theme="light" level={4} />
        <DxcRadio label="Radio" checked />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Required" theme="light" level={4} />
        <DxcRadio label="Radio" required />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled and checked" theme="light" level={4} />
        <DxcRadio label="Radio" disabled checked />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled and required" theme="light" level={4} />
        <DxcRadio label="Radio" disabled required />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled, required and checked" theme="light" level={4} />
        <DxcRadio label="Radio" disabled required checked />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Label after" theme="light" level={4} />
        <DxcRadio label="Radio" labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Checked with label after" theme="light" level={4} />
        <DxcRadio label="Radio" checked labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Required with label after" theme="light" level={4} />
        <DxcRadio label="Radio" required labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled and checked with label after" theme="light" level={4} />
        <DxcRadio label="Radio" disabled checked labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled and required with label after" theme="light" level={4} />
        <DxcRadio label="Radio" disabled required labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled, required and checked with label after" theme="light" level={4} />
        <DxcRadio label="Radio" disabled required checked labelPosition="after" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hovered" theme="light" level={4} />
        <DxcRadio label="Hovered" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hovered and checked" theme="light" level={4} />
        <DxcRadio label="Hovered" checked />
      </ExampleContainer>
    </>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <>
          <ExampleContainer>
            <Title title="Default" theme="dark" level={4} />
            <DxcRadio label="Radio" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Checked" theme="dark" level={4} />
            <DxcRadio label="Radio" checked />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Required" theme="dark" level={4} />
            <DxcRadio label="Radio" required />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled and checked" theme="dark" level={4} />
            <DxcRadio label="Radio" disabled checked />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled and required" theme="dark" level={4} />
            <DxcRadio label="Radio" disabled required />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled, required and checked" theme="dark" level={4} />
            <DxcRadio label="Radio" disabled required checked />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Label after" theme="dark" level={4} />
            <DxcRadio label="Radio" labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Checked with label after" theme="dark" level={4} />
            <DxcRadio label="Radio" checked labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Required with label after" theme="dark" level={4} />
            <DxcRadio label="Radio" required labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled and checked with label after" theme="dark" level={4} />
            <DxcRadio label="Radio" disabled checked labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled and required with label after" theme="dark" level={4} />
            <DxcRadio label="Radio" disabled required labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled, required and checked with label after" theme="dark" level={4} />
            <DxcRadio label="Radio" disabled required checked labelPosition="after" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-hover">
            <Title title="Hovered" theme="dark" level={4} />
            <DxcRadio label="Hovered" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-hover">
            <Title title="Hovered and checked" theme="dark" level={4} />
            <DxcRadio label="Hovered" checked />
          </ExampleContainer>
        </>
      </DarkContainer>
    </BackgroundColorProvider>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <DxcRadio label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcRadio label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcRadio label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcRadio label="FitContent" size="fitContent" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcRadio label="FillParent" size="fillParent" />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcRadio label="Xxsmall" margin={"xxsmall"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcRadio label="Xsmall" margin={"xsmall"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcRadio label="Small" margin={"small"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcRadio label="Medium" margin={"medium"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcRadio label="Large" margin={"large"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcRadio label="Xlarge" margin={"xlarge"} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcRadio label="Xxlarge" margin={"xxlarge"} />
    </ExampleContainer>
  </>
);

export const Chromatic = Radio.bind({});
Chromatic.play = async () => {
  await userEvent.tab();
  await userEvent.tab();
};
