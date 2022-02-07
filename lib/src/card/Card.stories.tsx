import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcCard from "./Card";
import imagePath from "./ice-cream.jpg";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Card",
  component: DxcCard,
};

const Card = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard>Default</DxcCard>
    </ExampleContainer>
    <Title title="Outlined" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard outlined>Outlined</DxcCard>
    </ExampleContainer>
    <Title title="Default with link" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard linkHref="https://www.dxc.com">Default with link</DxcCard>
    </ExampleContainer>
    <Title title="Focused default with link" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard linkHref="https://www.dxc.com">Default with link</DxcCard>
    </ExampleContainer>
    <Title title="Hovered default card" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard linkHref="https://www.dxc.com">Hovered default with link</DxcCard>
    </ExampleContainer>
    <Title title="Default with action" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard onClick={() => {}}>Default with action</DxcCard>
    </ExampleContainer>
    <Title title="Hovered default with action" theme="light" level={4} />
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcCard onClick={() => {}}>Hovered default with action</DxcCard>
    </ExampleContainer>
    <Title title="Default with image" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc={imagePath}>Default</DxcCard>
    </ExampleContainer>
    <Title title="Default image with background color" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc={imagePath} imageBgColor="yellow">
        Background color
      </DxcCard>
    </ExampleContainer>
    <Title title="Default image with position after" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc={imagePath} imagePosition="after">
        Position after
      </DxcCard>
    </ExampleContainer>
    <Title title="Image cover" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc={imagePath} imageCover>
        Image cover
      </DxcCard>
    </ExampleContainer>
    <Title title="Image cover with position after" theme="light" level={4} />
    <ExampleContainer>
      <DxcCard imageSrc={imagePath} imageCover imagePosition="after">
        Image cover with position after
      </DxcCard>
    </ExampleContainer>
    <Title title="Image padding" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcCard imageSrc={imagePath} imagePadding="xxsmall" imageCover>
        Xxsmall
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcCard imageSrc={imagePath} imagePadding="xsmall" imageCover>
        Xsmall
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcCard imageSrc={imagePath} imagePadding="small" imageCover>
        Small
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcCard imageSrc={imagePath} imagePadding="medium" imageCover>
        Medium
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcCard imageSrc={imagePath} imagePadding="large" imageCover>
        Large
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcCard imageSrc={imagePath} imagePadding="xlarge" imageCover>
        Xlarge
      </DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcCard imageSrc={imagePath} imagePadding="xxlarge" imageCover>
        Xxlarge
      </DxcCard>
    </ExampleContainer>
    <Title title="Content padding" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcCard contentPadding="xxsmall">Xxsmall</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcCard contentPadding="xsmall">Xsmall</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcCard contentPadding="small">Small</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcCard contentPadding="medium">Medium</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcCard contentPadding="large">Large</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcCard contentPadding="xlarge">Xlarge</DxcCard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcCard contentPadding="xxlarge">Xxlarge</DxcCard>
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

export const Chromatic = Card.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await canvas.getAllByRole("link")[1].focus();
  await userEvent.hover(canvas.getAllByRole("link")[2]);
  await userEvent.hover(canvas.getAllByText("Hovered default with action")[1]);
};
