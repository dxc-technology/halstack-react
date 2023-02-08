import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcSelect from "./Select";
import Listbox from "./Listbox";
import { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Select",
  component: DxcSelect,
};

const one_option = [{ label: "Option 01", value: "1" }];

const single_options = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
  { label: "Option 04", value: "4" },
];

const group_options = [
  {
    label: "Group 001",
    options: [
      { label: "Option 001", value: "1" },
      { label: "Option 002", value: "2" },
      { label: "Option 003", value: "3" },
    ],
  },
  {
    label: "Group 002",
    options: [
      { label: "Option 004", value: "4" },
      { label: "Option 005", value: "5" },
      { label: "Option 006", value: "6" },
    ],
  },
  {
    label: "Group 003",
    options: [
      { label: "Option 007", value: "7" },
      { label: "Option 008", value: "8" },
      { label: "Option 009", value: "9" },
    ],
  },
  {
    label: "Group 004",
    options: [
      { label: "Option 010", value: "10" },
      { label: "Option 011", value: "11" },
      { label: "Option 012", value: "12" },
    ],
  },
  {
    label: "Group 005",
    options: [
      { label: "Option 013", value: "13" },
      { label: "Option 014", value: "14" },
      { label: "Option 015", value: "15" },
    ],
  },
];

const icon_options_grouped = [
  {
    label: "Group 001",
    options: [
      {
        label: "3G Mobile",
        value: "1",
        icon: (
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
        ),
      },
    ],
  },
  {
    label: "Group 002",
    options: [
      {
        label: "Ethernet",
        value: "2",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
          </svg>
        ),
      },
    ],
  },
  {
    label: "Group 003",
    options: [
      {
        label: "Wi-fi",
        value: "3",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
          </svg>
        ),
      },
      {
        label: "Settings backup restore (just for previous configuration)",
        value: "4",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
          </svg>
        ),
      },
    ],
  },
];

const icon_options = [
  {
    label: "3G Mobile",
    value: "1",
    icon: (
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
    ),
  },
  {
    label: "Ethernet",
    value: "2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
      </svg>
    ),
  },
  {
    label: "Wi-fi",
    value: "3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
        <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
      </svg>
    ),
  },
  {
    label: "Settings backup restore (just for previous configuration)",
    value: "4",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
      </svg>
    ),
  },
];

const url_options = [
  {
    label: "Social Media",
    options: [
      {
        label: "Instagram",
        value: "instagram",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png",
      },
      {
        label: "Twitter",
        value: "twitter",
        icon: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2013/08/17981-logo-twitter.png?itok=dElA6iAV",
      },
      {
        label: "Facebook",
        value: "facebook",
        icon: (
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            width="438.536px"
            height="438.536px"
            viewBox="0 0 438.536 438.536"
            fill="#4267B2"
          >
            <g>
              <path
                d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
      C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
      h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
      C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
      c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
      c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
              />
            </g>
          </svg>
        ),
      },
      {
        label: "Pinterest",
        value: "pinterest",
        icon: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
      },
    ],
  },
  {
    label: "Design",
    options: [
      {
        label: "Figma",
        value: "figma",
        icon: "https://logowik.com/content/uploads/images/figma.jpg",
      },
      {
        label: "Adobe XD",
        value: "adobexd",
        icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg",
      },
      {
        label: "Sketch",
        value: "sketch",
        icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg",
      },
    ],
  },
];

const optionsWithEllipsisMedium = [
  { label: "Optiond1234567890123456789012345678901234", value: "1" },
  { label: "Optiond12345678901234567890123456789012345", value: "2" },
  { label: "Option 031111111111111111111111111111222", value: "3" },
];

const opinionatedTheme = {
  select: {
    selectedOptionBackgroundColor: "#e6f4ff",
    fontColor: "#000000",
    optionFontColor: "#000000",
    hoverBorderColor: "#a46ede",
  },
};

const Select = () => (
  <>
    <Title title="States" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcSelect label="Hovered" options={single_options} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus-within">
      <Title title="Focused" theme="light" level={4} />
      <DxcSelect label="Focused" options={single_options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcSelect label="Disabled" placeholder="Placeholder" disabled options={single_options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled with value" theme="light" level={4} />
      <DxcSelect label="Disabled with value" disabled options={single_options} defaultValue="1" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcSelect
        label="Label"
        options={single_options}
        error="Error message."
        helperText="Helper text"
        placeholder="Placeholder"
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered error" theme="light" level={4} />
      <DxcSelect
        label="Label"
        options={single_options}
        error="Error message."
        helperText="Helper text"
        placeholder="Placeholder"
      />
    </ExampleContainer>
    <Title title="Anatomy" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Label, placeholder and helper text" theme="light" level={4} />
      <DxcSelect label="Label" options={single_options} helperText="Helper text" placeholder="Placeholder" />
    </ExampleContainer>
    <Title title="Variants" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Simple selection" theme="light" level={4} />
      <DxcSelect label="Simple selection" searchable options={single_options} defaultValue="2" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Multiple selection" theme="light" level={4} />
      <DxcSelect label="Multiple select" searchable options={single_options} multiple defaultValue={["1", "2"]} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Multiple clear hovered" theme="light" level={4} />
      <DxcSelect label="Multiple select" options={single_options} multiple defaultValue={["1", "2"]} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Multiple clear actived" theme="light" level={4} />
      <DxcSelect label="Multiple select" options={single_options} multiple defaultValue={["1", "2"]} />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcSelect label="Small" options={single_options} size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcSelect label="Medium" options={single_options} size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcSelect label="Large" options={single_options} size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Fillparent size" theme="light" level={4} />
      <DxcSelect label="Fillparent" options={single_options} size="fillParent" />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="xxsmall margin" theme="light" level={4} />
      <DxcSelect label="xxSmall" options={single_options} margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xsmall margin" theme="light" level={4} />
      <DxcSelect label="xSmall" options={single_options} margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="small margin" theme="light" level={4} />
      <DxcSelect label="Small" options={single_options} margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="medium margin" theme="light" level={4} />
      <DxcSelect label="Medium" options={single_options} margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="large margin" theme="light" level={4} />
      <DxcSelect label="Large" options={single_options} margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xlarge margin" theme="light" level={4} />
      <DxcSelect label="xLarge" options={single_options} margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xxlarge margin" theme="light" level={4} />
      <DxcSelect label="xxLarge" options={single_options} margin="xxlarge" />
    </ExampleContainer>
    <ExampleContainer expanded>
      <Title title="Ellipsis" theme="light" level={2} />
      <Title title="Multiple selection with ellipsis" theme="light" level={4} />
      <DxcSelect label="Label" options={single_options} multiple defaultValue={["1", "2", "3", "4"]} />
      <Title title="Value with ellipsis" theme="light" level={4} />
      <DxcSelect label="Label" options={optionsWithEllipsisMedium} defaultValue="1" />
      <Title title="Options with ellipsis" theme="light" level={4} />
      <DxcSelect
        label="Label"
        placeholder="Choose an option"
        defaultValue="1"
        options={optionsWithEllipsisMedium}
        margin={{ top: "xxlarge" }}
      />
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSelect label="Hovered" options={single_options} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus-within">
      <Title title="Focused" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSelect label="Focused" options={single_options} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSelect label="Disabled" placeholder="Placeholder" disabled options={single_options} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled with value" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSelect label="Disabled with value" disabled options={single_options} defaultValue="1" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSelect
          label="Label"
          options={single_options}
          error="Error message."
          helperText="Helper text"
          placeholder="Placeholder"
        />
        <ExampleContainer>
          <Title title="Multiple selection" theme="light" level={4} />
          <DxcSelect label="Multiple select" searchable options={single_options} multiple defaultValue={["1", "2"]} />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Multiple clear hovered" theme="light" level={4} />
          <DxcSelect label="Multiple select" options={single_options} multiple defaultValue={["1", "2"]} />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Multiple clear actived" theme="light" level={4} />
          <DxcSelect label="Multiple select" options={single_options} multiple defaultValue={["1", "2"]} />
        </ExampleContainer>
      </HalstackProvider>
    </ExampleContainer>
  </>
);

const SelectListbox = () => {
  const colorsTheme: any = useTheme();

  return (
    <>
      <ThemeProvider theme={colorsTheme.select}>
        <Title title="Listbox" theme="light" level={2} />
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
            <DxcSelect label="Label" options={single_options} optional placeholder="Choose an option" />
            <button style={{ zIndex: "1", width: "100px" }}>Submit</button>
          </div>
        </ExampleContainer>
        <Title title="Listbox option states" theme="light" level={3} />
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered option" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue=""
            options={one_option}
            visualFocusIndex={-1}
            lastOptionIndex={0}
            multiple={false}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Active option" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue=""
            options={one_option}
            visualFocusIndex={-1}
            lastOptionIndex={0}
            multiple={false}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Focused option" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue=""
            options={one_option}
            visualFocusIndex={0}
            lastOptionIndex={0}
            multiple={false}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered selected option" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue="1"
            options={single_options}
            visualFocusIndex={-1}
            lastOptionIndex={3}
            multiple={false}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Active selected option" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue="2"
            options={single_options}
            visualFocusIndex={0}
            lastOptionIndex={3}
            multiple={false}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
        <Title title="Listbox with icons" theme="light" level={3} />
        <ExampleContainer>
          <Title title="Icons (SVGs)" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue="3"
            options={icon_options}
            visualFocusIndex={-1}
            lastOptionIndex={3}
            multiple={false}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Icons (Images)" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue="facebook"
            options={url_options}
            visualFocusIndex={-1}
            lastOptionIndex={6}
            multiple={false}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Grouped icons (SVGs)" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue={["0", "3"]}
            options={icon_options_grouped}
            visualFocusIndex={-1}
            lastOptionIndex={3}
            multiple={false}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Grouped icons (Images)" theme="light" level={4} />
          <Listbox
            id="x"
            currentValue={["facebook", "figma"]}
            options={url_options}
            visualFocusIndex={-1}
            lastOptionIndex={6}
            multiple={true}
            optional={false}
            optionalItem={{ label: "Empty", value: "" }}
            searchable={false}
            handleOptionOnClick={() => {}}
            styles={{ width: 360 }}
          />
        </ExampleContainer>
      </ThemeProvider>
      <ThemeProvider theme={colorsTheme.select}>
        <Title title="Opinionated theme" theme="light" level={2} />
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered option" theme="light" level={4} />
          <HalstackProvider theme={opinionatedTheme}>
            <Listbox
              id="x"
              currentValue=""
              options={one_option}
              visualFocusIndex={-1}
              lastOptionIndex={0}
              multiple={false}
              optional={false}
              optionalItem={{ label: "Empty", value: "" }}
              searchable={false}
              handleOptionOnClick={() => {}}
              styles={{ width: 360 }}
            />
          </HalstackProvider>
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Active option" theme="light" level={4} />{" "}
          <HalstackProvider theme={opinionatedTheme}>
            <Listbox
              id="x"
              currentValue=""
              options={one_option}
              visualFocusIndex={-1}
              lastOptionIndex={0}
              multiple={false}
              optional={false}
              optionalItem={{ label: "Empty", value: "" }}
              searchable={false}
              handleOptionOnClick={() => {}}
              styles={{ width: 360 }}
            />
          </HalstackProvider>
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Focused option" theme="light" level={4} />{" "}
          <HalstackProvider theme={opinionatedTheme}>
            <Listbox
              id="x"
              currentValue=""
              options={one_option}
              visualFocusIndex={0}
              lastOptionIndex={0}
              multiple={false}
              optional={false}
              optionalItem={{ label: "Empty", value: "" }}
              searchable={false}
              handleOptionOnClick={() => {}}
              styles={{ width: 360 }}
            />
          </HalstackProvider>
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered selected option" theme="light" level={4} />{" "}
          <HalstackProvider theme={opinionatedTheme}>
            <Listbox
              id="x"
              currentValue="1"
              options={single_options}
              visualFocusIndex={-1}
              lastOptionIndex={3}
              multiple={false}
              optional={false}
              optionalItem={{ label: "Empty", value: "" }}
              searchable={false}
              handleOptionOnClick={() => {}}
              styles={{ width: 360 }}
            />
          </HalstackProvider>
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Active selected option" theme="light" level={4} />{" "}
          <HalstackProvider theme={opinionatedTheme}>
            <Listbox
              id="x"
              currentValue="2"
              options={single_options}
              visualFocusIndex={0}
              lastOptionIndex={3}
              multiple={false}
              optional={false}
              optionalItem={{ label: "Empty", value: "" }}
              searchable={false}
              handleOptionOnClick={() => {}}
              styles={{ width: 360 }}
            />
          </HalstackProvider>
        </ExampleContainer>
        <Title title="Listbox with icons" theme="light" level={3} />
        <ExampleContainer>
          <Title title="Icons (SVGs)" theme="light" level={4} />{" "}
          <HalstackProvider theme={opinionatedTheme}>
            <Listbox
              id="x"
              currentValue="3"
              options={icon_options}
              visualFocusIndex={-1}
              lastOptionIndex={3}
              multiple={false}
              optional={false}
              optionalItem={{ label: "Empty", value: "" }}
              searchable={false}
              handleOptionOnClick={() => {}}
              styles={{ width: 360 }}
            />
          </HalstackProvider>
        </ExampleContainer>
      </ThemeProvider>
    </>
  );
};

const SearchableSelect = () => (
  <ExampleContainer expanded>
    <Title title="Searchable select" theme="light" level={4} />
    <DxcSelect label="Select Label" searchable options={single_options} placeholder="Choose an option" />
  </ExampleContainer>
);

const SearchableSelectOpinionated = () => (
  <ExampleContainer expanded>
    <Title title="Searchable select" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcSelect label="Select Label" searchable options={single_options} placeholder="Choose an option" />
    </HalstackProvider>
  </ExampleContainer>
);

const SearchValue = () => (
  <ExampleContainer expanded>
    <Title title="Searchable select with value" theme="light" level={4} />
    <DxcSelect
      label="Select Label"
      searchable
      defaultValue="1"
      options={single_options}
      placeholder="Choose an option"
    />
  </ExampleContainer>
);

const SearchValueOpinionated = () => (
  <ExampleContainer expanded>
    <Title title="Searchable select with value" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcSelect
        label="Select Label"
        searchable
        defaultValue="1"
        options={single_options}
        placeholder="Choose an option"
      />
    </HalstackProvider>
  </ExampleContainer>
);

const MultipleSelect = () => (
  <>
    <ExampleContainer expanded>
      <Title title="Multiple select" theme="light" level={4} />
      <DxcSelect
        label="Select label"
        options={single_options}
        defaultValue={["1", "4"]}
        multiple
        placeholder="Choose an option"
      />
    </ExampleContainer>
  </>
);

const MultipleSelectOpinioated = () => (
  <ExampleContainer expanded>
    <Title title="Multiple select" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcSelect
        label="Select label"
        options={single_options}
        defaultValue={["1", "4"]}
        multiple
        placeholder="Choose an option"
      />
    </HalstackProvider>
  </ExampleContainer>
);

const DefaultGroupedOptionsSelect = () => (
  <ExampleContainer expanded>
    <Title title="Grouped options simple select" theme="light" level={4} />
    <DxcSelect label="Label" options={group_options} defaultValue="9" placeholder="Choose an option" />
  </ExampleContainer>
);

const DefaultGroupedOptionsSelectOpinionated = () => (
  <ExampleContainer expanded>
    <Title title="Grouped options simple select" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcSelect label="Label" options={group_options} defaultValue="9" placeholder="Choose an option" />
    </HalstackProvider>
  </ExampleContainer>
);

const MultipleGroupedOptionsSelect = () => (
  <ExampleContainer expanded>
    <Title title="Grouped options multiple select" theme="light" level={4} />
    <DxcSelect
      label="Label"
      options={group_options}
      defaultValue={["0", "2"]}
      multiple
      placeholder="Choose an option"
    />
  </ExampleContainer>
);

const MultipleGroupedOptionsSelectOpinionated = () => (
  <ExampleContainer expanded>
    <Title title="Grouped options multiple select" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcSelect
        label="Label"
        options={group_options}
        defaultValue={["0", "2"]}
        multiple
        placeholder="Choose an option"
      />
    </HalstackProvider>
  </ExampleContainer>
);

const MultipleSearchable = () => (
  <ExampleContainer expanded>
    <Title title="Searchable multiple select with value" theme="light" level={4} />
    <DxcSelect
      label="Select Label"
      searchable
      multiple
      defaultValue={["1", "4"]}
      options={single_options}
      placeholder="Choose an option"
    />
  </ExampleContainer>
);

const MultipleSearchableOpinionated = () => (
  <ExampleContainer expanded>
    <Title title="Searchable multiple select with value" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcSelect
        label="Select Label"
        searchable
        multiple
        defaultValue={["1", "4"]}
        options={single_options}
        placeholder="Choose an option"
      />
    </HalstackProvider>
  </ExampleContainer>
);

export const Chromatic = Select.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[24]);
};

export const ListboxStates = SelectListbox.bind({});
ListboxStates.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const Searchable = SearchableSelect.bind({});
Searchable.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByRole("combobox"), "r");
};

export const SearchableOpinionated = SearchableSelectOpinionated.bind({});
SearchableOpinionated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByRole("combobox"), "r");
};

export const SearchableWithValue = SearchValue.bind({});
SearchableWithValue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("combobox"));
};

export const SearchableWithValueOpinionated = SearchValueOpinionated.bind({});
SearchableWithValueOpinionated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("combobox"));
};

export const MultipleSearchableWithValue = MultipleSearchable.bind({});
MultipleSearchableWithValue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[0]);
};

export const MultipleSearchableWithValueOpinionated = MultipleSearchableOpinionated.bind({});
MultipleSearchableWithValueOpinionated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[0]);
};

export const GroupOptionsDisplayed = DefaultGroupedOptionsSelect.bind({});
GroupOptionsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const GroupOptionsDisplayedOpinionated = DefaultGroupedOptionsSelectOpinionated.bind({});
GroupOptionsDisplayedOpinionated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const MultipleOptionsDisplayed = MultipleSelect.bind({});
MultipleOptionsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[0]);
};

export const MultipleOptionsDisplayedOpinionated = MultipleSelectOpinioated.bind({});
MultipleOptionsDisplayedOpinionated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[0]);
};

export const MultipleGroupedOptionsDisplayed = MultipleGroupedOptionsSelect.bind({});
MultipleGroupedOptionsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const MultipleGroupedOptionsDisplayedOpinionated = MultipleGroupedOptionsSelectOpinionated.bind({});
MultipleGroupedOptionsDisplayedOpinionated.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};
