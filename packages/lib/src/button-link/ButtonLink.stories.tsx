import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { Meta, StoryObj } from "@storybook/react-vite";

import DxcButtonLink from "./ButtonLink";
import DxcFlex from "../flex/Flex";

export default {
  title: "Button Link",
  component: DxcButtonLink,
} satisfies Meta<typeof DxcButtonLink>;

const ButtonLink = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex gap="1rem">
        <DxcButtonLink label="Button Link" href="#not-visited" />
        <DxcButtonLink label="Button Link" href="#not-visited" mode="secondary" />
        <DxcButtonLink label="Button Link" href="#not-visited" mode="tertiary" />
      </DxcFlex>
    </ExampleContainer>
    <Title title="Visited" theme="light" level={4} />
    <ExampleContainer pseudoState={["pseudo-visited"]}>
      <DxcFlex gap="1rem">
        <DxcButtonLink label="Button Link" href="https://example.com" />
        <DxcButtonLink label="Button Link" href="https://example.com" mode="secondary" />
        <DxcButtonLink label="Button Link" href="https://example.com" mode="tertiary" />
      </DxcFlex>
    </ExampleContainer>
    <Title title="Disabled" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex gap="1rem">
        <DxcButtonLink label="Button Link" href="https://example.com" disabled />
        <DxcButtonLink label="Button Link" href="https://example.com" mode="secondary" disabled />
        <DxcButtonLink label="Button Link" href="https://example.com" mode="tertiary" disabled />
      </DxcFlex>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcButtonLink>;
export const Chromatic: Story = {
  render: ButtonLink,
};
