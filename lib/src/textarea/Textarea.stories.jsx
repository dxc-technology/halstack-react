import React from "react";
import DxcTextarea from "./Textarea";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import DarkContainer from "../../.storybook/components/DarkSection";

export default {
  title: "Textarea",
  component: DxcTextarea,
};

export const Chromatic = () => (
  <>
    <>
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hovered" theme="light" level={4} />
        <DxcTextarea label="Hovered" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <Title title="Focused" theme="light" level={4} />
        <DxcTextarea label="Focused" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled" theme="light" level={4} />
        <DxcTextarea
          label="Disabled"
          optional
          helperText="Sample text"
          placeholder="Enter your text here..."
          disabled
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled with value" theme="light" level={4} />
        <DxcTextarea label="Disabled" value="Example text" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="With error" theme="light" level={4} />
        <DxcTextarea
          label="Textarea with error"
          helperText="Helper text"
          placeholder="Enter your text here..."
          error="Error message"
        />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Helper text and optional with value" theme="light" level={4} />
        <DxcTextarea label="Helper & optional" value="Some text" helperText="Sample text" optional />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Resizable" theme="light" level={4} />
        <DxcTextarea label="With resizer" helperText="Helper text" verticalGrow="manual" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Grow manual" theme="light" level={4} />
        <DxcTextarea
          label="Manual vertical grow"
          verticalGrow="manual"
          value="Long textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
        />
      </ExampleContainer>
    </>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <>
          <Title title="Helper text and optional with value" theme="dark" level={4} />
          <DxcTextarea label="Helper & optional" value="Some text" margin="medium" helperText="Sample text" optional />

          <Title title="Disabled" theme="dark" level={4} />
          <DxcTextarea
            label="Disabled"
            margin="medium"
            optional
            helperText="Sample text"
            placeholder="Enter your text here..."
            disabled
          />
          <Title title="Disabled with value" theme="dark" level={4} />
          <DxcTextarea label="Disabled" margin="medium" value="Example text" disabled />
          <Title title="With error" theme="dark" level={4} />
          <DxcTextarea
            label="Textarea with error"
            margin="medium"
            helperText="Helper text"
            placeholder="Enter your text here..."
            error="Error message"
          />
        </>
      </DarkContainer>
    </BackgroundColorProvider>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <DxcTextarea label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcTextarea label="Medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcTextarea label="Large" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcTextarea label="Fill parent" size="fillParent" />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcTextarea label="Xxsmmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcTextarea label="xsmmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcTextarea label="smmall" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcTextarea label="medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcTextarea label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcTextarea label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcTextarea label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
  </>
);
