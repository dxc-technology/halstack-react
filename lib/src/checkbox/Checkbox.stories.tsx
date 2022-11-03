import React from "react";
import DxcCheckbox from "./Checkbox";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";
import styled from "styled-components";

export default {
  title: "Checkbox",
  component: DxcCheckbox,
};

const Checkbox = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Checked" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" defaultChecked />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled and checked" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" disabled defaultChecked />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcCheckbox label="Focused" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcCheckbox label="Hovered" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered and checked" theme="light" level={4} />
      <DxcCheckbox label="Hovered" defaultChecked />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Optional" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label after" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" labelPosition="after" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Checked with label after" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" defaultChecked labelPosition="after" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Optional with label after" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" optional labelPosition="after" />
    </ExampleContainer>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <ExampleContainer>
          <Title title="Default" theme="dark" level={4} />
          <DxcCheckbox label="Checkbox" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Checked" theme="dark" level={4} />
          <DxcCheckbox label="Checkbox" defaultChecked />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled" theme="dark" level={4} />
          <DxcCheckbox label="Checkbox" disabled />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled and checked" theme="dark" level={4} />
          <DxcCheckbox label="Checkbox" disabled defaultChecked />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-focus">
          <Title title="Focused" theme="dark" level={4} />
          <DxcCheckbox label="Focused" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered" theme="dark" level={4} />
          <DxcCheckbox label="Hovered" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered and checked" theme="dark" level={4} />
          <DxcCheckbox label="Hovered" defaultChecked />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Optional" theme="dark" level={4} />
          <DxcCheckbox label="Checkbox" optional />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Label after" theme="dark" level={4} />
          <DxcCheckbox label="Checkbox" labelPosition="after" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Optional checked with label after" theme="dark" level={4} />
          <DxcCheckbox label="Checkbox" defaultChecked optional labelPosition="after" />
        </ExampleContainer>
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
      <DxcCheckbox label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcCheckbox label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcCheckbox label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcCheckbox label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcCheckbox label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcCheckbox label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcCheckbox label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Overflow container" theme="light" level={4} />
      <ScrollableContainer id="scroll-container">
        <DxcCheckbox label="Checkbox" defaultChecked />
        <DxcCheckbox label="Checkbox" defaultChecked />
        <DxcCheckbox label="Checkbox" />
        <DxcCheckbox label="Checkbox" defaultChecked />
        <DxcCheckbox label="Checkbox" />
        <DxcCheckbox label="Checkbox" />
        <DxcCheckbox label="Checkbox" />
        <DxcCheckbox label="Checkbox" defaultChecked />
      </ScrollableContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label overflow" theme="light" level={4} />
      <SmallContainer>
        <DxcCheckbox label="Very long label to check its overflowing" defaultChecked />
        <DxcCheckbox label="Very long label to check its overflowing" labelPosition="after" />
      </SmallContainer>
    </ExampleContainer>
  </>
);

export const Chromatic = Checkbox.bind({});

Chromatic.play = async () => {
  const listEl = document.getElementById("scroll-container");
  listEl?.scrollTo?.({ top: 50 });
};

const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  padding: 14px;
  overflow: auto;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 150px;
  height: 150px;
`;
