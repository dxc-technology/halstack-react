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
        <DxcTextarea label="Disabled" helperText="Sample text" placeholder="Enter your text here..." disabled />
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
        <Title title="With helper text" theme="light" level={4} />
        <DxcTextarea label="Fill parent" helperText="Sample text" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Optional" theme="light" level={4} />
        <DxcTextarea label="Optional" optional />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Helper text and optional" theme="light" level={4} />
        <DxcTextarea label="Helper & optional" helperText="Sample text" optional />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Resizable" theme="light" level={4} />
        <DxcTextarea label="With resizer" helperText="Helper text" verticalGrow="manual" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="With value" theme="light" level={4} />
        <DxcTextarea label="Textarea with value" value="Example text" helperText="Sample text" />
      </ExampleContainer>
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
    </>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <>
          <Title title="Helper text and optional" theme="dark" level={4} />
          <DxcTextarea label="Helper & optional" margin="medium" helperText="Sample text" optional />

          <Title title="Disabled" theme="dark" level={4} />
          <DxcTextarea
            label="Disabled"
            margin="medium"
            helperText="Sample text"
            placeholder="Enter your text here..."
            disabled
          />
          <Title title="With value" theme="dark" level={4} />
          <DxcTextarea label="Textarea with value" margin="medium" value="Example text" helperText="Sample text" />

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
  </>
);
