import { Meta, StoryObj } from "@storybook/react-vite";
import DxcMessageInput from "./MessageInput";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Message Input",
  component: DxcMessageInput,
} satisfies Meta<typeof DxcMessageInput>;

type Story = StoryObj<typeof DxcMessageInput>;

const selectOptionsOptions = [
  { label: "GPT-4", value: "gpt4", onSelect: () => {} },
  { label: "Claude Sonnet", value: "claude", onSelect: () => {}, selected: true },
  { label: "Gemini Pro", value: "gemini", onSelect: () => {} },
  { label: "LLaMA 3", value: "llama", onSelect: () => {} },
];

const files = [
  { label: "document.pdf" },
  { label: "document.pdf" },
  { label: "document.pdf" },
  { label: "document.pdf" },
];

const MessageInput = () => (
  <>
    <Title title="Size" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small" level={4} />
      <DxcMessageInput selectOptions={selectOptionsOptions} size="small" placeholder="Ask me anything..." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium (default)" level={4} />
      <DxcMessageInput selectOptions={selectOptionsOptions} size="medium" placeholder="Ask me anything..." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" level={4} />
      <DxcMessageInput selectOptions={selectOptionsOptions} size="large" placeholder="Ask me anything..." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Fill Parent" level={4} />
      <DxcMessageInput selectOptions={selectOptionsOptions} size="fillParent" placeholder="Ask me anything..." />
    </ExampleContainer>

    <ExampleContainer>
      <Title title="With Voice Input" level={2} />
      <DxcMessageInput placeholder="Ask me anything with voice..." allowRecording />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With Model List" level={2} />
      <DxcMessageInput placeholder="Select a model and ask..." selectOptions={selectOptionsOptions} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With Files" level={2} />
      <DxcMessageInput
        placeholder="Full featured input..."
        allowRecording
        selectOptions={selectOptionsOptions}
        files={files}
        callbackFile={() => console.log("added file")}
      />
    </ExampleContainer>

    {/* ================== STATES ================== */}
    <Title title="States" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." />
    </ExampleContainer>
    <ExampleContainer pseudoState={["pseudo-focus", "pseudo-hover"]}>
      <Title title="Active" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" level={4} />
      <DxcMessageInput placeholder="This input is disabled..." disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Is Generating" level={4} />
      <DxcMessageInput placeholder="AI is generating response..." isGenerating />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." error="Please enter a valid message" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover error" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." error="Error Message" />
    </ExampleContainer>

    <Title title="Validation" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Min Length (15 characters)" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." minLength={15} defaultValue="Hello" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Max Length (50 characters)" level={4} />
      <DxcMessageInput
        placeholder="Ask me anything..."
        maxLength={50}
        defaultValue="This is a test message to demonstrate the maximum length validation feature"
      />
    </ExampleContainer>
  </>
);

export const Chromatic: Story = {
  render: MessageInput,
};
