import Title from "../../.storybook/components/Title";
import DxcFlex from "./../flex/Flex";
import DxcInset from "./Inset";
import { Meta, StoryObj } from "@storybook/react";
import DxcContainer from "../container/Container";
import { ReactNode } from "react";

export default {
  title: "Inset",
  component: DxcInset,
} as Meta<typeof DxcInset>;

const Container = ({ children }: { children: ReactNode }) => (
  <DxcContainer background={{ color: "var(--color-bg-primary-lighter)" }} margin="var(--spacing-padding-xxl)">
    {children}
  </DxcContainer>
);

const Placeholder = () => (
  <DxcContainer
    background={{ color: "var(--color-bg-primary-lighter)" }}
    border={{
      color: "var(--border-color-primary-medium)",
      style: "var(--border-style-default)",
      width: "var(--border-width-s)",
    }}
    borderRadius="var(--border-radius-m)"
    minHeight="var(--height-xl)"
    minWidth="120px"
  />
);

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
