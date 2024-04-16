import React from "react";
import styled from "styled-components";
import DxcCheckbox from "./Checkbox";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Checkbox",
  component: DxcCheckbox
};

const opinionatedTheme = {
  checkbox: {
    baseColor: "#0067b3",
    checkColor: "#ffffff",
    fontColor: "#000000"
  }
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
      <Title title="Disabled, checked and optional" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" disabled defaultChecked optional />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Read-only" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" readOnly />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered read-only" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" readOnly />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Read-only, checked and optional" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" readOnly defaultChecked optional />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered read-only and checked" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" readOnly defaultChecked optional />
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
    <ExampleContainer>
      <Title title="Disabled and optional with label after" theme="light" level={4} />
      <DxcCheckbox label="Checkbox" disabled labelPosition="after" optional />
    </ExampleContainer>
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
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcCheckbox label="Checkbox" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Checked" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcCheckbox label="Checkbox" defaultChecked />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcCheckbox label="Checkbox" disabled />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled checked" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcCheckbox label="Checkbox" defaultChecked disabled />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcCheckbox label="Focused" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcCheckbox label="Hovered" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered and checked" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcCheckbox label="Hovered" defaultChecked />
      </HalstackProvider>
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
