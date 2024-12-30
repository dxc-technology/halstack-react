import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcCard from "./Card";

export default {
  title: "Card",
  component: DxcCard,
} as Meta<typeof DxcCard>;

const Card = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard>Default</DxcCard>
    </ExampleContainer>
    <Title title="Not outlined" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard outlined={false}>Not outlined</DxcCard>
    </ExampleContainer>
    <Title title="Default with link" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard linkHref="https://www.dxc.com">Default with link</DxcCard>
    </ExampleContainer>
    <Title title="Focused default with link" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard linkHref="https://www.dxc.com">Focused default with link</DxcCard>
    </ExampleContainer>
    <Title title="Hovered default with link" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard linkHref="https://www.dxc.com">Hovered default with link</DxcCard>
    </ExampleContainer>
    <Title title="Default with action" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard onClick={() => {}}>Default with action</DxcCard>
    </ExampleContainer>
    <Title title="Default with image" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300">Default</DxcCard>
    </ExampleContainer>
    <Title title="Default image with background color" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imageBgColor="yellow">
        Background color
      </DxcCard>
    </ExampleContainer>
    <Title title="Default image with position after" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imagePosition="after">
        Position after
      </DxcCard>
    </ExampleContainer>
    <Title title="Image cover" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imageCover>
        Image cover
      </DxcCard>
    </ExampleContainer>
    <Title title="Image cover with position after" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imageCover imagePosition="after">
        Image cover with position after
      </DxcCard>
    </ExampleContainer>
    <Title title="Image padding" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imagePadding="xxsmall" imageCover>
        Xxsmall
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imagePadding="xsmall" imageCover>
        Xsmall
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imagePadding="small" imageCover>
        Small
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imagePadding="medium" imageCover>
        Medium
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imagePadding="large" imageCover>
        Large
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imagePadding="xlarge" imageCover>
        Xlarge
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcCard imageSrc="https://picsum.photos/id/1022/200/300" imagePadding="xxlarge" imageCover>
        Xxlarge
      </DxcCard>
    </ExampleContainer>
    <Title title="Margin" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcCard margin="xxsmall">Xxsmall</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcCard margin="xsmall">Xsmall</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcCard margin="small">Small</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcCard margin="medium">Medium</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcCard margin="large">Large</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcCard margin="xlarge">Xlarge</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcCard margin="xxlarge">Xxlarge</DxcCard>
    </ExampleContainer>
  </>
);

const actionCard = () => (
  <>
    <ExampleContainer>
      <Title title="Focused default with action" theme="light" level={4} />
      <DxcCard onClick={() => {}}>Focused default with action</DxcCard>
    </ExampleContainer>
    <ExampleContainer expanded>
      <Title title="Hovered default with action" theme="light" level={4} />
      <DxcCard onClick={() => {}}>Hovered default with action</DxcCard>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcCard>;

export const ActionCardStates: Story = {
  render: actionCard,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.tab();
    const card = canvas.getAllByText("Hovered default with action")[1];
    if (card != null) {
      await userEvent.hover(card);
    }
  },
};

export const Chromatic: Story = {
  render: Card,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const linkCards = canvas.getAllByRole("link");
    if (linkCards[1] != null) {
      linkCards[1].focus();
    }
    if (linkCards[2] != null) {
      await userEvent.hover(linkCards[2]);
    }
  },
};
