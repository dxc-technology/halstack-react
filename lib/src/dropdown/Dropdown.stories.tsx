import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import DxcDropdown from "./Dropdown";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DropdownMenu from "./DropdownMenu";
import { Option } from "./types";
import useTheme from "../useTheme";
import { ThemeProvider } from "styled-components";
import DxcFlex from "../flex/Flex";

export default {
  title: "Dropdown",
  component: DxcDropdown,
};

const hamburguerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
    <path d="M3 14.5V13h14v1.5Zm0-3.75v-1.5h14v1.5ZM3 7V5.5h14V7Z" />
  </svg>
);
const iconSVG = (
  <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);
const iconSVGLarge = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">
    <path d="M11 44q-1.2 0-2.1-.9Q8 42.2 8 41V15q0-1.2.9-2.1.9-.9 2.1-.9h5.5v-.5q0-3.15 2.175-5.325Q20.85 4 24 4q3.15 0 5.325 2.175Q31.5 8.35 31.5 11.5v.5H37q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h26V15h-5.5v4.5q0 .65-.425 1.075Q30.65 21 30 21q-.65 0-1.075-.425-.425-.425-.425-1.075V15h-9v4.5q0 .65-.425 1.075Q18.65 21 18 21q-.65 0-1.075-.425-.425-.425-.425-1.075V15H11v26Zm8.5-29h9v-.5q0-1.9-1.3-3.2Q25.9 7 24 7q-1.9 0-3.2 1.3-1.3 1.3-1.3 3.2ZM11 41V15v26Z" />
  </svg>
);
const iconUrl = "https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png";
const icons = [iconSVG, iconSVGLarge, iconUrl];

const defaultOptions: Option[] = [
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
  {
    value: "4",
    label: "Wallapop",
  },
  {
    value: "5",
    label: "Aliexpress",
  },
  {
    value: "6",
    label: "Etsy",
  },
  {
    value: "7",
    label: "Alibaba",
  },
  {
    value: "8",
    label: "Gearbest shop",
  },
];
const options: Option[] = [
  {
    value: "1",
    label: "Amazon with a very long text",
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
const optionWithIcon: Option[] = [
  {
    value: "1",
    label: "Ebay",
    icon: iconUrl,
  },
];

const optionsIcon: any = options.map((op, i) => ({ ...op, icon: icons[i] }));

const Dropdown = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcDropdown label="Default" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcDropdown label="Hovered" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
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
        icon="https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png"
        iconPosition="after"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Only icon" theme="light" level={4} />
      <DxcDropdown options={options} onSelectOption={(value) => {}} icon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Only icon without caret" theme="light" level={4} />
      <DxcDropdown options={options} onSelectOption={(value) => {}} icon={hamburguerIcon} caretHidden />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large icon (SVG)" theme="light" level={4} />
      <DxcDropdown label="Large icon" options={options} onSelectOption={(value) => {}} icon={iconSVGLarge} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large icon (image)" theme="light" level={4} />
      <DxcDropdown
        label="Large icon"
        options={options}
        onSelectOption={(value) => {}}
        icon="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
      />
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
    <ExampleContainer>
      <Title title="Ellipsis" theme="light" level={4} />
      <DxcDropdown
        label="Very long text in dropdown button"
        options={options}
        onSelectOption={(value) => {}}
        icon={iconSVG}
        size="medium"
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
    <ExampleContainer expanded>
      <Title title="Opened menu" theme="light" level={4} />
      <DxcDropdown label="Label" options={options} onSelectOption={(value) => {}} />
    </ExampleContainer>
  </>
);

const DropdownListStates = () => {
  const colorsTheme: any = useTheme();

  return (
    <>
      <Title title="Dropdown Menu" theme="light" level={2} />
      <ExampleContainer>
        <Title
          title="List dialog uses a Radix Popover to appear over elements with a certain z-index"
          theme="light"
          level={3}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "150px",
            width: "min-content",
            marginBottom: "100px",
            padding: "20px",
            border: "1px solid black",
            borderRadius: "4px",
            overflow: "auto",
            zIndex: "1300",
          }}
        >
          <DxcDropdown
            label="Select a platform"
            options={defaultOptions}
            onSelectOption={(option) => {}}
            size="medium"
          />
          <button style={{ zIndex: "1", width: "100px" }}>Submit</button>
        </div>
      </ExampleContainer>
      <ThemeProvider theme={colorsTheme.dropdown}>
        <Title title="Option states" theme="light" level={3} />
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered option" theme="light" level={4} />
          <DropdownMenu
            id="x"
            dropdownTriggerId="dtx"
            iconsPosition="before"
            visualFocusIndex={-1}
            menuItemOnClick={(value) => {}}
            onKeyDown={(e) => {}}
            options={optionWithIcon}
            styles={{ width: 240 }}
          />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Active option" theme="light" level={4} />
          <DropdownMenu
            id="x"
            dropdownTriggerId="dtx"
            iconsPosition="before"
            visualFocusIndex={-1}
            menuItemOnClick={(value) => {}}
            onKeyDown={(e) => {}}
            options={optionWithIcon}
            styles={{ width: 240 }}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Focused option" theme="light" level={4} />
          <DropdownMenu
            id="x"
            dropdownTriggerId="dtx"
            iconsPosition="before"
            visualFocusIndex={0}
            menuItemOnClick={(value) => {}}
            onKeyDown={(e) => {}}
            options={options}
            styles={{ width: 240 }}
          />
        </ExampleContainer>
        <Title title="Icons" theme="light" level={3} />
        <ExampleContainer>
          <Title title="Before" theme="light" level={4} />
          <DropdownMenu
            id="x"
            dropdownTriggerId="dtx"
            iconsPosition="before"
            visualFocusIndex={-1}
            menuItemOnClick={(value) => {}}
            onKeyDown={(e) => {}}
            options={optionsIcon}
            styles={{ width: 240 }}
          />
          <Title title="After" theme="light" level={4} />
          <DropdownMenu
            id="x"
            dropdownTriggerId="dtx"
            iconsPosition="after"
            visualFocusIndex={-1}
            menuItemOnClick={(value) => {}}
            onKeyDown={(e) => {}}
            options={optionsIcon}
            styles={{ width: 240 }}
          />
        </ExampleContainer>
      </ThemeProvider>
    </>
  );
};

const DropdownRightAlignment = () => (
  <ExampleContainer expanded>
    <Title title="Dropdown collisions on the right boundary (right)" theme="light" level={4} />
    <DxcFlex justifyContent="flex-end">
      <DxcDropdown label="Label" options={options} onSelectOption={(value) => {}} />
    </DxcFlex>
  </ExampleContainer>
);

const DropdownCenterAlignment = () => (
  <ExampleContainer expanded>
    <Title title="Dropdown collisions on the right boundary (centered)" theme="light" level={4} />
    <DxcFlex justifyContent="flex-end">
      <DxcDropdown label="Label" options={defaultOptions} onSelectOption={(value) => {}} margin="small" />
    </DxcFlex>
  </ExampleContainer>
);

export const Chromatic = Dropdown.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonList = canvas.getAllByRole("button");
  await userEvent.click(buttonList[buttonList.length - 1]);
};

export const DropdownMenuStates = DropdownListStates.bind({});
DropdownMenuStates.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("button")[0]);
};

export const DropdownMenuAlignedRight = DropdownRightAlignment.bind({});
DropdownMenuAlignedRight.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
};

export const DropdownMenuAlignedCenter = DropdownCenterAlignment.bind({});
DropdownMenuAlignedCenter.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("button"));
};
