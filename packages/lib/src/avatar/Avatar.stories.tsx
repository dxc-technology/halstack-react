import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcAvatar from "./Avatar";
import DxcFlex from "../flex/Flex";

export default {
  title: "Avatar",
  component: DxcAvatar,
} as Meta<typeof DxcAvatar>;

const Avatar = () => (
  <>
    <Title title="Sizes" theme="light" level={2} />
    <DxcFlex alignItems="end">
      <ExampleContainer>
        <DxcAvatar size="xsmall" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="small" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="medium" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="large" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xlarge" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Colors" theme="light" level={2} />
    <DxcFlex>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" color="blue" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" color="green" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" color="orange" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" color="red" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" color="yellow" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" color="purple" />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Square" theme="light" level={2} />
    <ExampleContainer>
      <DxcAvatar size="xxlarge" shape="square" />
    </ExampleContainer>
    <Title title="Image" theme="light" level={2} />
    <ExampleContainer>
      <DxcAvatar size="xxlarge" imageSrc="https://picsum.photos/id/1022/200/300" />
    </ExampleContainer>
    <Title title="Initials" theme="light" level={2} />
    <ExampleContainer>
      <DxcAvatar size="xxlarge" label="John Doe" />
    </ExampleContainer>
    <Title title="Custon Icon" theme="light" level={2} />
    <ExampleContainer>
      <DxcAvatar size="xxlarge" icon="filled_shield" />
    </ExampleContainer>
    <Title title="With tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcAvatar size="xxlarge" title="John Doe" />
    </ExampleContainer>
    <Title title="Status" theme="light" level={2} />
    <DxcFlex>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "default", position: "top" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "info", position: "top" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "success", position: "top" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "warning", position: "top" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "error", position: "top" }} />
      </ExampleContainer>
    </DxcFlex>
    <DxcFlex>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "default", position: "bottom" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "info", position: "bottom" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "success", position: "bottom" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "warning", position: "bottom" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcAvatar size="xxlarge" status={{ mode: "error", position: "bottom" }} />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Hover" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcAvatar size="xxlarge" onClick={() => console.log()} />
    </ExampleContainer>
    <Title title="Focus" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-focus">
      <DxcAvatar size="xxlarge" onClick={() => console.log()} />
    </ExampleContainer>
    <Title title="Active" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-active">
      <DxcAvatar size="xxlarge" onClick={() => console.log()} />
    </ExampleContainer>
    <Title title="Disabled" theme="light" level={2} />
    <ExampleContainer>
      <DxcAvatar size="xxlarge" onClick={() => console.log()} disabled />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcAvatar>;

export const Chromatic: Story = {
  render: Avatar,
};
