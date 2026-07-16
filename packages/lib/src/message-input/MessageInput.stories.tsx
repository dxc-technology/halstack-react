import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import DxcMessageInput from "./MessageInput";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import type { FileData } from "./types";

export default {
  title: "Message Input",
  component: DxcMessageInput,
} satisfies Meta<typeof DxcMessageInput>;

type Story = StoryObj<typeof DxcMessageInput>;

const MessageInput = () => (
  <>
    <Title title="States" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} />
    </ExampleContainer>
    <ExampleContainer pseudoState={["pseudo-focus", "pseudo-hover"]}>
      <Title title="Active" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." disabled files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="isGenerating" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." isGenerating files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} error="Error Message" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover error" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} error="Error Message" />
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Min Length" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} minLength={15} defaultValue="Hello" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Max Length" level={4} />
      <DxcMessageInput
        placeholder="Ask me anything..."
        files={[]}
        maxLength={15}
        defaultValue="Hello this is a test of the max length property"
      />
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Bottom Select" level={4} />
      <DxcMessageInput
        placeholder="Ask me anything..."
        modelList={[
          { label: "Option 1", value: "option1", onSelect: () => {} },
          { label: "Option 29872357857274590", value: "option2", onSelect: () => {} },
          { label: "Option 3", value: "option3", onSelect: () => {} },
          { label: "Option 4", value: "option4", onSelect: () => {} },
        ]}
        files={[]}
      />
    </ExampleContainer>

    <ExampleContainer>
      <Title title="With Voice Input" level={4} />
      <DxcMessageInput placeholder="Ask me anything with voice..." allowVoiceInput files={[]} />
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Without Voice Input" level={4} />
      <DxcMessageInput placeholder="No voice button here..." files={[]} />
    </ExampleContainer>
  </>
);

const ControlledFileExample = () => {
  const [files, setFiles] = useState<FileData[]>([]);

  const handleButtonClick = (type: "submit" | "stop", _signal?: AbortSignal) => {
    if (type === "submit") {
      console.log(files.map((file: FileData) => file.label));
    } else {
      console.log("Stop action triggered");
    }
  };

  const callbackFiles = (updatedFiles: FileData[]) => {
    setFiles(updatedFiles);
  };

  return (
    <ExampleContainer>
      <Title title="Default" level={4} />
      <DxcMessageInput
        placeholder="Ask me anything..."
        files={files}
        callbackFile={callbackFiles}
        onButtonClick={handleButtonClick}
      />
    </ExampleContainer>
  );
};

const ControlledVoiceExample = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (val: { value: string; error?: string }) => {
    setInputValue(val.value);
    console.log(val);
  };

  return (
    <>
      <Title title="Controlled Voice Recording" theme="light" level={2} />
      <ExampleContainer>
        <DxcMessageInput
          placeholder="Controla la grabación desde el componente padre..."
          files={[]}
          allowVoiceInput
          value={inputValue}
          onChange={handleChange}
        />
      </ExampleContainer>
    </>
  );
};

export const Chromatic: Story = {
  render: MessageInput,
};

export const ControlledFile: Story = {
  render: ControlledFileExample,
};

export const ControlledVoice: Story = {
  render: ControlledVoiceExample,
};
