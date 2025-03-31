import styled from "styled-components";
import Title from "../../.storybook/components/Title";
import DxcFlex from "./../flex/Flex";
import DxcInset from "./Inset";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Inset",
  component: DxcInset,
} as Meta<typeof DxcInset>;

const Container = styled.div`
  background: #f2eafa;
  margin: 2.5rem;
`;

const Placeholder = styled.div`
  min-height: 40px;
  min-width: 120px;
  border: 1px solid #a46ede;
  border-radius: 0.5rem;
  background-color: #e5d5f6;
`;

const Inset = () => (
  <>
    <Title title="No space (default)" level={4} />
    <Container>
      <DxcInset>
        <Placeholder />
      </DxcInset>
    </Container>
    <Title title="space = xxLarge" level={4} />
    <Container>
      <DxcInset space="var(--spacing-padding-xxl)">
        <Placeholder />
      </DxcInset>
    </Container>
    <Title title="horizontal = small" level={4} />
    <Container>
      <DxcInset horizontal="var(--spacing-padding-s)">
        <Placeholder />
      </DxcInset>
    </Container>
    <Title title="vertical = large" level={4} />
    <Container>
      <DxcInset vertical="var(--spacing-padding-l)">
        <Placeholder />
      </DxcInset>
    </Container>
    <Title title="top = xxsmall, right= medium, bottom = large and left = xxlarge" level={4} />
    <Container>
      <DxcInset
        top="var(--spacing-padding-xxs)"
        right="var(--spacing-padding-m)"
        bottom="var(--spacing-padding-l)"
        left="var(--spacing-padding-xl)"
      >
        <Placeholder />
      </DxcInset>
    </Container>
    <Title title="Inside a flex column" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1rem">
        <Placeholder />
        <DxcInset
          top="var(--spacing-padding-xxs)"
          right="var(--spacing-padding-l)"
          bottom="var(--spacing-padding-xl)"
          left="var(--spacing-padding-xxl)"
        >
          <Placeholder />
        </DxcInset>
        <Placeholder />
      </DxcFlex>
    </Container>
  </>
);

type Story = StoryObj<typeof DxcInset>;

export const Chromatic: Story = {
  render: Inset,
};
