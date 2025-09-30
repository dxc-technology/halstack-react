import { Meta, StoryObj } from "@storybook/react-vite";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcToggleGroup from "./ToggleGroup";

export default {
  title: "Toggle Group",
  component: DxcToggleGroup,
} satisfies Meta<typeof DxcToggleGroup>;

const ethernetSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
  </svg>
);
const gMobileSVG = (
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
const wifiSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </svg>
);

const options = [
  {
    value: 1,
    label: "Facebook",
  },
  {
    value: 2,
    label: "X",
  },
  {
    value: 3,
    label: "Linkedin",
  },
];
const disabledOptions = [
  {
    value: 1,
    label: "Facebook",
  },
  {
    value: 2,
    label: "X",
    icon: "raven",
    disabled: true,
  },
  {
    value: 3,
    label: "Linkedin",
  },
];
const optionsWithIcon = [
  {
    value: 1,
    icon: "format_bold",
    title: "Bold",
  },
  {
    value: 2,
    icon: "format_italic",
    title: "Italic",
  },
  {
    value: 3,
    icon: "format_underlined",
    title: "Underlined",
  },
  {
    value: 4,
    icon: "format_align_left",
    title: "Align left",
  },
  {
    value: 5,
    icon: "format_align_center",
    title: "Align center",
  },
  {
    value: 6,
    icon: "format_align_right",
    title: "Align right",
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

const oneOption = [
  {
    value: 1,
    label: "Facebook",
  },
];

const ToggleGroup = () => (
  <>
    <Title title="Unselected" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover" theme="light" level={4} />
      <DxcToggleGroup options={oneOption} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcToggleGroup options={oneOption} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focus" theme="light" level={4} />
      <DxcToggleGroup options={oneOption} />
    </ExampleContainer>
    <Title title="Selected" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover" theme="light" level={4} />
      <DxcToggleGroup options={oneOption} defaultValue={1} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcToggleGroup options={oneOption} defaultValue={1} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focus" theme="light" level={4} />
      <DxcToggleGroup options={oneOption} defaultValue={1} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label only" theme="light" level={4} />
      <DxcToggleGroup options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icons only" theme="light" level={4} />
      <DxcToggleGroup options={optionsWithIcon} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icons & label" theme="light" level={4} />
      <DxcToggleGroup options={optionsWithIconAndLabel} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled option" theme="light" level={4} />
      <DxcToggleGroup defaultValue={2} options={disabledOptions} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Multiple options selected" theme="light" level={4} />
      <DxcToggleGroup options={optionsWithIcon} defaultValue={[1, 3]} multiple />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Vertically stacked" theme="light" level={4} />
      <DxcToggleGroup defaultValue={3} options={optionsWithIcon} orientation="vertical" />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="xxSmall" theme="light" level={4} />
      <DxcToggleGroup options={options} margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xSmall" theme="light" level={4} />
      <DxcToggleGroup options={options} margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcToggleGroup options={options} margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcToggleGroup options={options} margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcToggleGroup options={options} margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xLarge" theme="light" level={4} />
      <DxcToggleGroup options={options} margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xxLarge" theme="light" level={4} />
      <DxcToggleGroup options={options} margin="xxlarge" />
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcToggleGroup>;

export const Chromatic: Story = {
  render: ToggleGroup,
};
