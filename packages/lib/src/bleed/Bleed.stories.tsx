import { Meta, StoryObj } from "@storybook/react-vite";
import { ReactNode } from "react";
import Title from "../../.storybook/components/Title";
import DxcBleed from "./Bleed";
import DxcFlex from "../flex/Flex";
import DxcContainer from "../container/Container";

export default {
  title: "Bleed",
  component: DxcBleed,
} satisfies Meta<typeof DxcBleed>;

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

const Bleed = () => (
  <>
    <Title title="No space (default)" level={4} />
    <Container>
      <DxcBleed>
        <Placeholder />
      </DxcBleed>
    </Container>
    <Title title="space = xxLarge" level={4} />
    <Container>
      <DxcBleed space="var(--spacing-padding-xxl)">
        <Placeholder />
      </DxcBleed>
    </Container>
    <Title title="horizontal = small" level={4} />
    <Container>
      <DxcBleed horizontal="var(--spacing-padding-s)">
        <Placeholder />
      </DxcBleed>
    </Container>
    <Title title="vertical = large" level={4} />
    <Container>
      <DxcBleed vertical="var(--spacing-padding-l)">
        <Placeholder />
      </DxcBleed>
    </Container>
    <Title title="top = xxsmall, right= medium, bottom = large and left = xxlarge" level={4} />
    <Container>
      <DxcBleed
        top="var(--spacing-padding-xxs)"
        right="var(--spacing-padding-m)"
        bottom="var(--spacing-padding-l)"
        left="var(--spacing-padding-xl)"
      >
        <Placeholder />
      </DxcBleed>
    </Container>
    <Title title="Inside a flex column" level={4} />
    <Container>
      <DxcFlex direction="column" gap="var(--spacing-gap-ml)">
        <Placeholder />
        <DxcBleed
          top="var(--spacing-padding-xxs)"
          right="var(--spacing-padding-l)"
          bottom="var(--spacing-padding-xl)"
          left="var(--spacing-padding-xxl)"
        >
          <Placeholder />
        </DxcBleed>
        <Placeholder />
      </DxcFlex>
    </Container>
  </>
);

type Story = StoryObj<typeof DxcBleed>;

export const Chromatic: Story = {
  render: Bleed,
};
