import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcToggleGroup from "./ToggleGroup";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "ToggleGroup",
  component: DxcToggleGroup,
};

const ethernetSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
    </svg>
  );
};
const gMobileSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <g>
          <path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z" />
        </g>
      </g>
    </svg>
  );
};
const wifiSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
    </svg>
  );
};
const options = [
  {
    value: 1,
    label: "Facebook",
  },
  {
    value: 2,
    label: "Twitter",
  },
  {
    value: 3,
    label: "Linkedin",
  },
];
const optionsWithIcon = [
  {
    value: 1,
    icon: wifiSVG,
  },
  {
    value: 2,
    icon: ethernetSVG,
  },
  {
    value: 3,
    icon: gMobileSVG,
  },
];
const optionsWithIconAndLabel = [
  {
    value: 1,
    label: "Wi-fi",
    icon: wifiSVG,
  },
  {
    value: 2,
    label: "Ethernet",
    icon: ethernetSVG,
  },
  {
    value: 3,
    label: "3G Mobile",
    icon: gMobileSVG,
  },
];
const twoOptions = [
  {
    value: 1,
    label: "Facebook",
  },
  {
    value: 2,
    label: "Twitter",
  },
];
export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Basic toggle group" theme="light" level={4} />
      <DxcToggleGroup label="Toggle group" helperText="HelperText" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Selected" theme="light" level={4} />
      <DxcToggleGroup label="Selected" helperText="HelperText" value={2} options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icons toggle group" theme="light" level={4} />
      <DxcToggleGroup label="Icons group" options={optionsWithIcon} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icons & label toggle group" theme="light" level={4} />
      <DxcToggleGroup label="Icons & label" options={optionsWithIconAndLabel} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcToggleGroup label="Disabled" value={2} options={options} disabled />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcToggleGroup label="Hovered" options={twoOptions} value={2} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Multiple toggleGroup" theme="light" level={4} />
      <DxcToggleGroup
        label="Toggle group"
        helperText="Please select one or more"
        options={options}
        value={[1, 3]}
        multiple
      ></DxcToggleGroup>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="xxSmall" theme="light" level={4} />
      <DxcToggleGroup label="xxSmall margin" options={options} margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xSmall" theme="light" level={4} />
      <DxcToggleGroup label="xSmall margin" options={options} margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcToggleGroup label="Small margin" options={options} margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcToggleGroup label="Medium margin" options={options} margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcToggleGroup label="Large margin" options={options} margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xLarge" theme="light" level={4} />
      <DxcToggleGroup label="xLarge margin" options={options} margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xxLarge" theme="light" level={4} />
      <DxcToggleGroup label="xxLarge margin" options={options} margin="xxlarge" />
    </ExampleContainer>
  </>
);
const OptionSelected = () => <DxcToggleGroup label="Toggle group" helperText="HelperText" options={options} />;

export const ToggleGroupSelectedActived = OptionSelected.bind({});
ToggleGroupSelectedActived.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const option = canvas.getByText("Linkedin");
  await userEvent.click(option);
};
export const ToggleGroupUnselectedActived = OptionSelected.bind({});
ToggleGroupUnselectedActived.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const option = canvas.getByText("Twitter");
  await userEvent.click(option);
  userEvent.tab();
};
