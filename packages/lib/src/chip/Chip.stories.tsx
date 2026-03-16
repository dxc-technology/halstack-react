import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcChip from "./Chip";
import { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect } from "react";
import DxcFlex from "../flex/Flex";

export default {
  title: "Chip",
  component: DxcChip,
  decorators: [
    (Story) => {
      useEffect(() => {
        const prev = document.body.style.cssText;
        document.body.style.backgroundColor = "var(--color-bg-neutral-light)";
        return () => {
          document.body.style.cssText = prev;
        };
      }, []);

      return <Story />;
    },
  ],
} satisfies Meta<typeof DxcChip>;

const smallIconSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20">
    <path d="m10 17-1.042-.938q-2.083-1.854-3.437-3.177-1.354-1.323-2.136-2.354Q2.604 9.5 2.302 8.646 2 7.792 2 6.896q0-1.854 1.271-3.125T6.396 2.5q1.021 0 1.979.438.958.437 1.625 1.229.667-.792 1.625-1.229.958-.438 1.979-.438 1.854 0 3.125 1.271T18 6.896q0 .896-.292 1.729-.291.833-1.073 1.854-.781 1.021-2.145 2.365-1.365 1.344-3.49 3.26Zm0-2.021q1.938-1.729 3.188-2.948 1.25-1.219 1.989-2.125.74-.906 1.031-1.614.292-.709.292-1.396 0-1.229-.833-2.063Q14.833 4 13.604 4q-.729 0-1.364.302-.636.302-1.094.844L10.417 6h-.834l-.729-.854q-.458-.542-1.114-.844Q7.083 4 6.396 4q-1.229 0-2.063.833-.833.834-.833 2.063 0 .687.271 1.364.271.678.989 1.573.719.896 1.98 2.125Q8 13.188 10 14.979Zm0-5.5Z" />
  </svg>
);

const Chip = () => (
  <>
    <Title title="Selectable Chip" theme="light" level={2} />
    <Title title="With icon" theme="light" level={3} />
    <Title title="Unselected" theme="light" level={4} />
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xxs)">
      <ExampleContainer>
        <DxcChip label="Chip" prefix={smallIconSVG} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcChip label="Chip" prefix={smallIconSVG} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcChip label="Chip" prefix={smallIconSVG} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <DxcChip label="Chip" prefix={smallIconSVG} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcChip label="Chip" prefix={smallIconSVG} disabled />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Selected" theme="light" level={4} />
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xxs)">
      <ExampleContainer>
        <DxcChip label="Chip" prefix={smallIconSVG} selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcChip label="Chip" prefix={smallIconSVG} selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcChip label="Chip" prefix={smallIconSVG} selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <DxcChip label="Chip" prefix={smallIconSVG} selected />
      </ExampleContainer>
      <ExampleContainer>
        <DxcChip label="Chip" prefix={smallIconSVG} selected disabled />
      </ExampleContainer>
    </DxcFlex>

    <Title title="With Avatar" theme="light" level={3} />
    <Title title="Unselected" theme="light" level={4} />
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xxs)">
      <ExampleContainer>
        <DxcChip label="Chip" prefix={{ color: "primary" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcChip label="Chip" prefix={{ color: "primary" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcChip label="Chip" prefix={{ color: "primary" }} />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <DxcChip label="Chip" prefix={{ color: "primary" }} />
      </ExampleContainer>
      <ExampleContainer>
        <DxcChip label="Chip" prefix={{ color: "primary" }} disabled />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Selected" theme="light" level={4} />
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xxs)">
      <ExampleContainer>
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected />
      </ExampleContainer>
      <ExampleContainer>
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected disabled />
      </ExampleContainer>
    </DxcFlex>

    <Title title="Only label" theme="light" level={3} />
    <Title title="Unselected" theme="light" level={4} />
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xxs)">
      <ExampleContainer>
        <DxcChip label="Chip" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcChip label="Chip" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcChip label="Chip" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <DxcChip label="Chip" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcChip label="Chip" disabled />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Selected" theme="light" level={4} />
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xxs)">
      <ExampleContainer>
        <DxcChip label="Chip" selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcChip label="Chip" selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcChip label="Chip" selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <DxcChip label="Chip" selected />
      </ExampleContainer>
      <ExampleContainer>
        <DxcChip label="Chip" selected disabled />
      </ExampleContainer>
    </DxcFlex>

    <Title title="Only icon" theme="light" level={3} />
    <Title title="Unselected" theme="light" level={4} />
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xxs)">
      <ExampleContainer>
        <DxcChip prefix="home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcChip prefix="home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcChip prefix="home" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <DxcChip prefix="home" />
      </ExampleContainer>
      <ExampleContainer>
        <DxcChip prefix="home" disabled />
      </ExampleContainer>
    </DxcFlex>
    <Title title="Selected" theme="light" level={4} />
    <DxcFlex alignItems="center" gap="var(--spacing-gap-xxs)">
      <ExampleContainer>
        <DxcChip prefix="home" selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <DxcChip prefix="home" selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <DxcChip prefix="home" selected />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <DxcChip prefix="home" selected />
      </ExampleContainer>
      <ExampleContainer>
        <DxcChip prefix="home" selected disabled />
      </ExampleContainer>
    </DxcFlex>

    <Title title="Dismissible Chip" theme="light" level={2} />
    <Title title="With icon" theme="light" level={4} />
    <ExampleContainer>
      <DxcChip
        mode="dismissible"
        label="Dismissible chip"
        prefix={smallIconSVG}
        onClick={() => console.log("Dismissible chip")}
      />
    </ExampleContainer>
    <Title title="With avatar" theme="light" level={4} />
    <ExampleContainer>
      <DxcChip
        mode="dismissible"
        label="Dismissible chip"
        prefix={{ color: "primary" }}
        onClick={() => console.log("Dismissible chip")}
      />
    </ExampleContainer>
    <Title title="Only label" theme="light" level={4} />
    <ExampleContainer>
      <DxcChip mode="dismissible" label="Dismissible chip" onClick={() => console.log("Dismissible chip")} />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcChip>;

export const Chromatic: Story = {
  render: Chip,
};
