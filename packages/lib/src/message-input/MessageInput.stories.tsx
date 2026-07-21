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

const modelListOptions = [
  { label: "GPT-4", value: "gpt4", onSelect: () => {} },
  { label: "Claude Sonnet", value: "claude", onSelect: () => {}, selected: true },
  { label: "Gemini Pro", value: "gemini", onSelect: () => {} },
  { label: "LLaMA 3", value: "llama", onSelect: () => {} },
];

const MessageInput = () => (
  <>
    <Title title="Size" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small" level={4} />
      <DxcMessageInput modelList={modelListOptions} size="small" placeholder="Ask me anything..." files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium (default)" level={4} />
      <DxcMessageInput modelList={modelListOptions} size="medium" placeholder="Ask me anything..." files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" level={4} />
      <DxcMessageInput modelList={modelListOptions} size="large" placeholder="Ask me anything..." files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Fill Parent" level={4} />
      <DxcMessageInput modelList={modelListOptions} size="fillParent" placeholder="Ask me anything..." files={[]} />
    </ExampleContainer>

    <ExampleContainer>
      <Title title="With Voice Input" level={2} />
      <DxcMessageInput placeholder="Ask me anything with voice..." allowRecording files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With Model List" level={2} />
      <DxcMessageInput placeholder="Select a model and ask..." modelList={modelListOptions} files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With All Features" level={2} />
      <DxcMessageInput placeholder="Full featured input..." allowRecording modelList={modelListOptions} files={[]} />
    </ExampleContainer>

    {/* ================== STATES ================== */}
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
      <DxcMessageInput placeholder="This input is disabled..." disabled files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Is Generating" level={4} />
      <DxcMessageInput placeholder="AI is generating response..." isGenerating files={[]} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} error="Please enter a valid message" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover error" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} error="Error Message" />
    </ExampleContainer>

    <Title title="Validation" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Min Length (15 characters)" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." files={[]} minLength={15} defaultValue="Hello" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Max Length (50 characters)" level={4} />
      <DxcMessageInput
        placeholder="Ask me anything..."
        files={[]}
        maxLength={50}
        defaultValue="This is a test message to demonstrate the maximum length validation feature"
      />
    </ExampleContainer>
  </>
);

const ControlledFileExample = () => {
  const [files, setFiles] = useState<FileData[]>([]);

  const handleButtonClick = (type: "submit" | "stop", _signal?: AbortSignal) => {
    if (type === "submit") {
      console.log(
        "Submitted files:",
        files.map((file: FileData) => file.label)
      );
    } else {
      console.log("Stop action triggered");
    }
  };

  const callbackFiles = (updatedFiles: FileData[]) => {
    setFiles(updatedFiles);
  };

  return (
    <>
      <Title title="Controlled Files" theme="light" level={2} />
      <ExampleContainer>
        <DxcMessageInput
          placeholder="Attach files and submit..."
          files={files}
          callbackFile={callbackFiles}
          onButtonClick={handleButtonClick}
        />
      </ExampleContainer>
    </>
  );
};

const ControlledVoiceExample = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (val: { value: string; error?: string }) => {
    setInputValue(val.value);
    console.log("Value changed:", val);
  };

  return (
    <>
      <Title title="Controlled Voice Recording" theme="light" level={2} />
      <ExampleContainer>
        <DxcMessageInput
          placeholder="Use voice input..."
          files={[]}
          allowRecording
          value={inputValue}
          onChange={handleChange}
        />
      </ExampleContainer>
    </>
  );
};

const ControlledSelectedModelExample = () => {
  const [model, setModel] = useState("claude");

  return (
    <>
      <Title title="Controlled Voice Recording" theme="light" level={2} />
      <ExampleContainer>
        <DxcMessageInput
          placeholder="Change model..."
          modelList={[
            {
              label: "Claude",
              value: "claude",
              onSelect: (value: string) => setModel(value),
              selected: model === "claude",
            },
            {
              label: "GPT-3",
              value: "gpt-3",
              onSelect: (value: string) => setModel(value),
              selected: model === "gpt-3",
            },
          ]}
        />
      </ExampleContainer>
    </>
  );
};

export const Chromatic: Story = {
  render: MessageInput,
};

export const MessageInputWithFiles: Story = {
  render: ControlledFileExample,
};

export const MessageInputWithVoiceRecording: Story = {
  render: ControlledVoiceExample,
};

export const MessageInputWithSelectedModel: Story = {
  render: ControlledSelectedModelExample,
};
