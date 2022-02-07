import React from "react";
import DxcWizard from "./Wizard";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Wizard",
  component: DxcWizard,
};

const favoriteSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

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
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
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
    icon: favoriteSVG,
  },
  {
    icon: favoriteSVG,
  },
  {
    icon: favoriteSVG,
  },
];

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Without labels" theme="light" level={4} />
      <DxcWizard steps={[{}, {}, {}, {}]}></DxcWizard>
      <Title title="Current step in the third step, labels and description" theme="light" level={4} />
      <DxcWizard currentStep={2} steps={stepWithLabelDescription}></DxcWizard>
      <Title title="With long description in horizontal" theme="light" level={4} />
      <DxcWizard steps={stepWithLongDescription}></DxcWizard>
      <Title title="With long description in vertical" theme="light" level={4} />
      <DxcWizard mode="vertical" steps={stepWithLongDescription}></DxcWizard>
      <Title title="Disabled steps" theme="light" level={4} />
      <DxcWizard steps={stepDisabled}></DxcWizard>
      <Title title="With icons" theme="light" level={4} />
      <DxcWizard steps={stepIcons}></DxcWizard>
    </ExampleContainer>
    <Title title="Margins horizontal" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcWizard margin="xxsmall" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcWizard margin="xsmall" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcWizard margin="small" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcWizard margin="medium" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcWizard margin="large" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcWizard margin="xlarge" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcWizard margin="xxlarge" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <Title title="Margins vertical" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcWizard mode="vertical" margin="xxsmall" steps={stepWithLabelDescription}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcWizard mode="vertical" margin="xsmall" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcWizard mode="vertical" margin="small" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcWizard mode="vertical" margin="medium" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcWizard mode="vertical" margin="large" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcWizard mode="vertical" margin="xlarge" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcWizard mode="vertical" margin="xxlarge" steps={stepWithLabel}></DxcWizard>
    </ExampleContainer>
  </>
);

const WizardSelected = () => <DxcWizard steps={stepWithLabel}></DxcWizard>;

export const WizardStepActived = WizardSelected.bind({});
WizardStepActived.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const option = canvas.getByText("Third step");
  await userEvent.click(option);
};
