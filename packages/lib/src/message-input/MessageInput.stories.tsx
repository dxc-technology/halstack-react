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
    <Title title="Default" level={4} />
    <ExampleContainer>
      <DxcMessageInput placeholder="Ask me anything..." />
    </ExampleContainer>
    <Title title="Files" level={4} />
    <ExampleContainer>
      <DxcMessageInput placeholder="Ask me anything..." allowFileUploads />
    </ExampleContainer>
  </>
);

export const Chromatic: Story = {
  render: MessageInput,
};
