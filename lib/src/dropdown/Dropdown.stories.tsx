import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcDropdown from "./Dropdown";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Dropdown",
  component: DxcDropdown,
};

const iconSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

const options: any = [
  {
    value: "1",
    label: "Amazon",
  },
  {
    value: "2",
    label: "Ebay",
  },
  {
    value: "3",
    label: "Apple",
  },
];

const optionsIcon: any = options.map((i) => ({ ...i, icon: iconSVG }));

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcDropdown label="Default" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcDropdown label="Hovered" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus-visible">
      <Title title="Focused" theme="light" level={4} />
      <DxcDropdown label="Focused" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived" theme="light" level={4} />
      <DxcDropdown label="Actived" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcDropdown label="Disabled" options={options} onSelectOption={(value) => {}} disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Caret hidden" theme="light" level={4} />
      <DxcDropdown label="Caret hidden" options={options} onSelectOption={(value) => {}} caretHidden />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon before" theme="light" level={4} />
      <DxcDropdown label="Icon before" options={options} onSelectOption={(value) => {}} icon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon after" theme="light" level={4} />
      <DxcDropdown
        label="Icon after"
        options={options}
        onSelectOption={(value) => {}}
        icon={iconSVG}
        iconPosition="after"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Only icon" theme="light" level={4} />
      <DxcDropdown options={options} onSelectOption={(value) => {}} icon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled with icon" theme="light" level={4} />
      <DxcDropdown
        label="Disabled with icon"
        options={options}
        onSelectOption={(value) => {}}
        icon={iconSVG}
        disabled
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcDropdown label="Xxsmall" options={options} onSelectOption={(value) => {}} icon={iconSVG} margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcDropdown label="Xsmall" options={options} onSelectOption={(value) => {}} icon={iconSVG} margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcDropdown label="Small" options={options} onSelectOption={(value) => {}} icon={iconSVG} margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcDropdown label="Medium" options={options} onSelectOption={(value) => {}} icon={iconSVG} margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcDropdown label="Large" options={options} onSelectOption={(value) => {}} icon={iconSVG} margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcDropdown label="Xlarge" options={options} onSelectOption={(value) => {}} icon={iconSVG} margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcDropdown label="Xxlarge" options={options} onSelectOption={(value) => {}} icon={iconSVG} margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcDropdown label="Small" options={options} onSelectOption={(value) => {}} icon={iconSVG} size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcDropdown label="Medium" options={options} onSelectOption={(value) => {}} icon={iconSVG} size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcDropdown label="Large" options={options} onSelectOption={(value) => {}} icon={iconSVG} size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FitContent" theme="light" level={4} />
      <DxcDropdown
        label="FitContent"
        options={options}
        onSelectOption={(value) => {}}
        icon={iconSVG}
        size="fitContent"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent" theme="light" level={4} />
      <DxcDropdown
        label="FillParent"
        options={options}
        onSelectOption={(value) => {}}
        icon={iconSVG}
        size="fillParent"
      />
    </ExampleContainer>
  </>
);

const DropdownWithOptions = () => (
  <>
    <ExampleContainer>
      <Title title="Options" theme="light" level={4} />
      <DxcDropdown label="Options" options={options} onSelectOption={(value) => {}} margin={{ right: "small" }} />
      <DxcDropdown label="Options with icon" options={optionsIcon} onSelectOption={(value) => {}} />
    </ExampleContainer>
    <div style={{ height: "100px" }} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered options" theme="light" level={4} />
      <DxcDropdown label="Hovered options" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
    <div style={{ height: "100px" }} />
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Actived options" theme="light" level={4} />
      <DxcDropdown label="Actived options" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
  </>
);

export const DropdownOptions = DropdownWithOptions.bind({});
DropdownOptions.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdownBtns = canvas.getAllByRole("button");
  await userEvent.click(dropdownBtns[1]);
  await userEvent.click(dropdownBtns[2]);
  await userEvent.click(dropdownBtns[3]);
  await userEvent.click(dropdownBtns[0]);
};
