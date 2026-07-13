import { Meta, StoryObj } from "@storybook/react-vite";
import DxcMessageInput from "./MessageInput";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

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
      <DxcMessageInput placeholder="Ask me anything..." allowFileUploads />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." allowFileUploads />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." allowFileUploads />
    </ExampleContainer>
    <ExampleContainer pseudoState={["pseudo-focus", "pseudo-hover"]}>
      <Title title="Active" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." allowFileUploads />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." disabled allowFileUploads />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="isLoading" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." isLoading allowFileUploads />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." allowFileUploads error="Error Message" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover error" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." allowFileUploads error="Error Message" />
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Min Length" level={4} />
      <DxcMessageInput placeholder="Ask me anything..." allowFileUploads minLength={15} defaultValue="Hello" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Max Length" level={4} />
      <DxcMessageInput
        placeholder="Ask me anything..."
        allowFileUploads
        maxLength={15}
        defaultValue="Hello this is a test of the max length property"
      />
    </ExampleContainer>

    <ExampleContainer>
      <Title title="Bottom Select" level={4} />
      <DxcMessageInput
        placeholder="Ask me anything..."
        bottomOptions={[
          { label: "Option 1", value: "option1", onSelect: () => {} },
          { label: "Option 2", value: "option2", onSelect: () => {} },
          { label: "Option 3", value: "option3", onSelect: () => {} },
          { label: "Option 4", value: "option4", onSelect: () => {} },
        ]}
        allowFileUploads
      />
    </ExampleContainer>
  </>
);

export const Chromatic: Story = {
  render: MessageInput,
};
