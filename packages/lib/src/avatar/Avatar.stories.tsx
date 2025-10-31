import { Meta, StoryObj } from "@storybook/react-vite";
import DxcAvatar from "./Avatar";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Avatar",
  component: DxcAvatar,
} satisfies Meta<typeof DxcAvatar>;

type Story = StoryObj<typeof DxcAvatar>;

export const Chromatic: Story = {
  render: () => (
    <>
      <>
        <Title title="Label" theme="light" level={2} />
        <>
          <Title title="circle" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xsmall" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="small" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="medium" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="large" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xlarge" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xxlarge" />
          </ExampleContainer>
        </>
        <>
          <Title title="square" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xsmall" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="small" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="medium" shape="square" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="large" shape="square" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xlarge" shape="square" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar label="John Doe" size="xxlarge" shape="square" />
          </ExampleContainer>
        </>
      </>

      <>
        <Title title="Image" theme="light" level={2} />
        <>
          <Title title="circle" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xsmall" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="small" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="medium" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="large" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xlarge" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xxlarge" />
          </ExampleContainer>
        </>
        <>
          <Title title="square" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xsmall" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="small" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="medium" shape="square" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="large" shape="square" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xlarge" shape="square" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar imageSrc="https://picsum.photos/id/1022/200/300" size="xxlarge" shape="square" />
          </ExampleContainer>
        </>
      </>

      <>
        <Title title="Icon(custom)" theme="light" level={2} />
        <>
          <Title title="circle" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xsmall" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="small" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="medium" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="large" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xlarge" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xxlarge" />
          </ExampleContainer>
        </>
        <>
          <Title title="square" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xsmall" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="small" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="medium" shape="square" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="large" shape="square" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xlarge" shape="square" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar icon="settings" size="xxlarge" shape="square" />
          </ExampleContainer>
        </>
      </>

      <>
        <Title title="Icon(default)" theme="light" level={2} />
        <>
          <Title title="circle" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xsmall" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="small" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="medium" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="large" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xlarge" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xxlarge" />
          </ExampleContainer>
        </>
        <>
          <Title title="square" theme="light" level={3} />
          <Title title="xsmall" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xsmall" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="small" shape="square" />
          </ExampleContainer>
          <Title title="small" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="medium" shape="square" />
          </ExampleContainer>
          <Title title="large" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="large" shape="square" />
          </ExampleContainer>
          <Title title="xlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xlarge" shape="square" />
          </ExampleContainer>
          <Title title="xxlarge" theme="light" level={4} />
          <ExampleContainer>
            <DxcAvatar size="xxlarge" shape="square" />
          </ExampleContainer>
        </>
      </>
    </>
  ),
};

export const Labels: Story = {
  render: () => (
    <>
      <Title title="Label & sublabel" theme="light" level={2} />
      <ExampleContainer>
        <DxcAvatar primaryText="John Doe" secondaryText="Software Engineer" />
      </ExampleContainer>
      <Title title="Label" theme="light" level={2} />
      <ExampleContainer>
        <DxcAvatar primaryText="John Doe" />
      </ExampleContainer>
      <Title title="Sublabel" theme="light" level={2} />
      <ExampleContainer>
        <DxcAvatar secondaryText="Software Engineer" />
      </ExampleContainer>
    </>
  ),
};
