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
    <Title title="Unselected" theme="light" level={3} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} />
        <DxcChip label="Chip" prefix={{ color: "primary" }} />
        <DxcChip label="Chip" />
        <DxcChip prefix="home" />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} />
        <DxcChip label="Chip" prefix={{ color: "primary" }} />
        <DxcChip label="Chip" />
        <DxcChip prefix="home" />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} />
        <DxcChip label="Chip" prefix={{ color: "primary" }} />
        <DxcChip label="Chip" />
        <DxcChip prefix="home" />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} />
        <DxcChip label="Chip" prefix={{ color: "primary" }} />
        <DxcChip label="Chip" />
        <DxcChip prefix="home" />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} disabled />
        <DxcChip label="Chip" prefix={{ color: "primary" }} disabled />
        <DxcChip label="Chip" disabled />
        <DxcChip prefix="home" disabled />
      </DxcFlex>
    </ExampleContainer>

    <Title title="Selected" theme="light" level={3} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} selected />
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected />
        <DxcChip label="Chip" selected />
        <DxcChip prefix="home" selected />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} selected />
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected />
        <DxcChip label="Chip" selected />
        <DxcChip prefix="home" selected />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} selected />
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected />
        <DxcChip label="Chip" selected />
        <DxcChip prefix="home" selected />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} selected />
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected />
        <DxcChip label="Chip" selected />
        <DxcChip prefix="home" selected />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="Chip" prefix={smallIconSVG} selected disabled />
        <DxcChip label="Chip" prefix={{ color: "primary" }} selected disabled />
        <DxcChip label="Chip" selected disabled />
        <DxcChip prefix="home" selected disabled />
      </DxcFlex>
    </ExampleContainer>

    <Title title="Dismissible Chip" theme="light" level={2} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip
          mode="dismissible"
          label="Dismissible chip"
          prefix={smallIconSVG}
          onClick={() => console.log("Dismissible chip")}
        />
        <DxcChip
          mode="dismissible"
          label="Dismissible chip"
          prefix={{ color: "primary" }}
          onClick={() => console.log("Dismissible chip")}
        />
        <DxcChip mode="dismissible" label="Dismissible chip" onClick={() => console.log("Dismissible chip")} />
      </DxcFlex>
    </ExampleContainer>

    <Title title="With Ellipsis" theme="light" level={2} />
    <Title title="Long content" theme="light" level={3} />
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="This is a very long chip label that will be truncated with ellipsis" />
        <DxcChip label="This is a very long chip label that will be truncated with ellipsis" prefix={smallIconSVG} />
        <DxcChip
          label="This is a very long chip label that will be truncated with ellipsis"
          prefix={{ color: "primary" }}
        />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip label="This is a very long chip label that will be truncated with ellipsis" selected />
        <DxcChip
          label="This is a very long chip label that will be truncated with ellipsis"
          prefix={smallIconSVG}
          selected
        />
        <DxcChip
          label="This is a very long chip label that will be truncated with ellipsis"
          prefix={{ color: "primary" }}
          selected
        />
      </DxcFlex>
    </ExampleContainer>
    <ExampleContainer>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcChip
          mode="dismissible"
          label="This is a very long chip label that will be truncated with ellipsis"
          onClick={() => console.log("Dismissible chip")}
        />
        <DxcChip
          mode="dismissible"
          label="This is a very long chip label that will be truncated with ellipsis"
          prefix={smallIconSVG}
          onClick={() => console.log("Dismissible chip")}
        />
        <DxcChip
          mode="dismissible"
          label="This is a very long chip label that will be truncated with ellipsis"
          prefix={{ color: "primary" }}
          onClick={() => console.log("Dismissible chip")}
        />
      </DxcFlex>
    </ExampleContainer>

    <Title title="Constrained by parent container" theme="light" level={3} />
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip label="Chip label constrained by parent" />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip label="Chip label constrained by parent" prefix={smallIconSVG} />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip label="Chip label constrained by parent" prefix={{ color: "primary" }} />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip label="Chip label constrained by parent" selected />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip label="Chip label constrained by parent" prefix={smallIconSVG} selected />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip label="Chip label constrained by parent" prefix={{ color: "primary" }} selected />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip
          mode="dismissible"
          label="Chip label constrained by parent"
          onClick={() => console.log("Dismissible chip")}
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip
          mode="dismissible"
          label="Chip label constrained by parent"
          prefix={smallIconSVG}
          onClick={() => console.log("Dismissible chip")}
        />
      </div>
    </ExampleContainer>
    <ExampleContainer>
      <div style={{ width: "200px" }}>
        <DxcChip
          mode="dismissible"
          label="Chip label constrained by parent"
          prefix={{ color: "primary" }}
          onClick={() => console.log("Dismissible chip")}
        />
      </div>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcChip>;

export const Chromatic: Story = {
  render: Chip,
};
