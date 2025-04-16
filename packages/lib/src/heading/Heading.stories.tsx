import { Meta, StoryObj } from "@storybook/react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcHeading from "./Heading";

export default {
  title: "Heading",
  component: DxcHeading,
} as Meta<typeof DxcHeading>;

const Heading = () => (
  <>
    <Title title="Levels" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Level 1" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" />
      <Title title="Level 2" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" level={2} />
      <Title title="Level 3" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" level={3} />
      <Title title="Level 4" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" level={4} />
      <Title title="Level 5" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" level={5} />
      <Title title="Level 6" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" level={6} />
    </ExampleContainer>
    <Title title="Weights" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default weight" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" level={2} weight="default" />
      <Title title="Regular weight" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" level={2} weight="regular" />
      <Title title="Light weight" theme="light" level={4} />
      <DxcHeading text="Heading for sections within the page" level={2} weight="light" />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcHeading text="Xxsmall" margin="xxsmall" />
      <Title title="Xsmall" theme="light" level={4} />
      <DxcHeading text="Xsmall" margin="xsmall" />
      <Title title="Small" theme="light" level={4} />
      <DxcHeading text="Small" margin="small" />
      <Title title="Medium" theme="light" level={4} />
      <DxcHeading text="Medium" margin="medium" />
      <Title title="Large" theme="light" level={4} />
      <DxcHeading text="Large" margin="large" />
      <Title title="Xlarge" theme="light" level={4} />
      <DxcHeading text="Xlarge" margin="xlarge" />
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcHeading text="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcHeading>;

export const Chromatic: Story = {
  render: Heading,
};
