import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import { HalstackProvider } from "../HalstackContext";
import DxcTextarea from "./Textarea";

export default {
  title: "Textarea",
  component: DxcTextarea,
};

const opinionatedTheme = {
  textarea: {
    fontColor: "#000000",
    hoverBorderColor: "#a46ede",
  },
};

export const Chromatic = () => (
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
      <DxcTextarea label="Disabled" optional helperText="Sample text" placeholder="Enter your text here..." disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled with value" theme="light" level={4} />
      <DxcTextarea label="Disabled" defaultValue="Example text" disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Read only" theme="light" level={4} />
      <DxcTextarea label="Label" readOnly defaultValue="Example text" verticalGrow="manual" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered read only" theme="light" level={4} />
      <DxcTextarea label="Label" readOnly defaultValue="Example text" verticalGrow="manual" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With error" theme="light" level={4} />
      <DxcTextarea
        label="Textarea with error"
        helperText="Helper text"
        placeholder="Enter your text here..."
        error="Error message."
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered with error" theme="light" level={4} />
      <DxcTextarea
        label="Hovered textarea with error"
        helperText="Helper text"
        placeholder="Enter your text here..."
        error="Error message."
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Helper text and optional with value" theme="light" level={4} />
      <DxcTextarea label="Helper & optional" defaultValue="Some text" helperText="Sample text" optional />
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
        defaultValue="Long textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
      />
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
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcTextarea label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcTextarea label="xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcTextarea label="small" margin="small" />
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
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcTextarea label="Hovered" helperText="Sample text" placeholder="Placeholder" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcTextarea label="Focused" helperText="Sample text" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcTextarea
          label="Disabled"
          optional
          helperText="Sample text"
          placeholder="Enter your text here..."
          disabled
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled with value" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcTextarea label="Disabled" helperText="Sample text" defaultValue="Example text" disabled />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With error" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcTextarea
          label="Textarea with error"
          helperText="Helper text"
          placeholder="Enter your text here..."
          error="Error message."
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Grow manual" theme="light" level={4} />{" "}
      <HalstackProvider theme={opinionatedTheme}>
        <DxcTextarea
          label="Manual vertical grow"
          verticalGrow="manual"
          defaultValue="Long textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
        />
      </HalstackProvider>
    </ExampleContainer>
  </>
);
