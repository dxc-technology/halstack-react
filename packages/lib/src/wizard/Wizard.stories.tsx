import { userEvent, within } from "storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcWizard from "./Wizard";
import { Meta, StoryObj } from "@storybook/react-vite";
import DxcContainer from "../container/Container";

export default {
  title: "Wizard",
  component: DxcWizard,
} satisfies Meta<typeof DxcWizard>;

const favoriteSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);
const largeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);

const stepWithLabel = [
  {
    label: "First step",
  },
  {
    label: "Second step",
  },
  {
    label: "Third step",
  },
  {
    label: "Forth step",
  },
];

const stepWithLabelDescription = [
  {
    label: "First step",
    description: "Description",
  },
  {
    label: "Second step",
    description: "Description",
  },
  {
    label: "Third step",
    description: "Description",
    valid: true,
  },
  {
    label: "Forth step",
    description: "Description",
    valid: false,
  },
];

const stepWithLongDescription = [
  {
    label: "First step",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    label: "Second step",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    label: "Third step",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const stepDisabled = [
  {
    label: "First step",
    description: "Description",
    disabled: true,
  },
  {
    label: "Second step",
    description: "Description",
    icon: favoriteSVG,
    disabled: true,
  },
  {
    label: "Third step",
    description: "Description",
    disabled: true,
    valid: true,
  },
  {
    label: "Forth step",
    description: "Description",
    valid: false,
    disabled: true,
  },
];

const stepIcons = [
  {
    label: "First step",
    icon: favoriteSVG,
  },
  {
    label: "Second step",
    icon: favoriteSVG,
  },
  {
    label: "Third step",
    icon: favoriteSVG,
  },
];

const stepLargeIcons = [
  {
    label: "First step",
    icon: largeIcon,
  },
  {
    label: "Second step",
    icon: largeIcon,
  },
  {
    label: "Third step",
    icon: largeIcon,
  },
];

const stepMaterialSymbols = [
  {
    label: "First step",
    icon: "filled_home",
  },
  {
    label: "Second step",
    icon: "filled_favorite",
  },
  {
    label: "Third step",
    icon: "filled_star",
  },
];

const stepsDifferentLabelLengths = [
  {
    label: "Billing information",
  },
  {
    label: "Payment",
  },
  {
    label: "Confirm details",
  },
  {
    label: "Review & submit",
  },
];

const Wizard = () => (
  <>
    <ExampleContainer>
      <Title title="Current step in the third step, labels and description" theme="light" level={4} />
      <DxcWizard defaultCurrentStep={2} steps={stepWithLabelDescription} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Vertical" theme="light" level={4} />
      <DxcContainer height="500px">
        <DxcWizard steps={stepsDifferentLabelLengths} mode="vertical" />
      </DxcContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With long description in horizontal" theme="light" level={4} />
      <DxcWizard steps={stepWithLongDescription} />
    </ExampleContainer>
    <ExampleContainer expanded>
      <Title title="With long description in vertical" theme="light" level={4} />
      <DxcWizard mode="vertical" steps={stepWithLongDescription} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled steps" theme="light" level={4} />
      <DxcWizard steps={stepDisabled} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused steps" theme="light" level={4} />
      <DxcWizard steps={stepIcons} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icons" theme="light" level={4} />
      <DxcWizard steps={stepIcons} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With large icons" theme="light" level={4} />
      <DxcWizard steps={stepLargeIcons} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With Material Symbols" theme="light" level={4} />
      <DxcWizard steps={stepMaterialSymbols} />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcWizard margin="xxsmall" steps={stepWithLabel} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcWizard margin="xsmall" steps={stepWithLabel} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcWizard margin="small" steps={stepWithLabel} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcWizard margin="medium" steps={stepWithLabel} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcWizard margin="large" steps={stepWithLabel} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcWizard margin="xlarge" steps={stepWithLabel} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcWizard margin="xxlarge" steps={stepWithLabel} />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcWizard>;

export const Chromatic: Story = {
  render: Wizard,
};
