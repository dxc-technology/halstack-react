import React from "react";

import { userEvent, within, waitFor } from "@storybook/testing-library";
import { fireEvent } from "@testing-library/react";

import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

import DxcSelect from "./Select";

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
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
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
  { label: "Option 03111111111111111111111111111122", value: "4" },
];
const Select = () => (
  <>
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
      <DxcSelect label="Disabled with value" disabled options={single_options} value="1" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcSelect label="Label" options={single_options} />
      <Title title="Label and placeholder" theme="light" level={4} />
      <DxcSelect label="Label" options={single_options} placeholder="Placeholder" />
      <Title title="Label, placeholder and helper text" theme="light" level={4} />
      <DxcSelect label="Label" options={single_options} helperText="Helper text" placeholder="Placeholder" />
      <Title title="Error" theme="light" level={4} />
      <DxcSelect
        label="Label"
        options={single_options}
        error="Error message"
        helperText="Helper text"
        placeholder="Placeholder"
      />
      <Title title="Simple selection" theme="light" level={4} />
      <DxcSelect label="Simple selection" options={single_options} value="2" />
      <Title title="Multiple selection" theme="light" level={4} />
      <DxcSelect label="Multiple select" options={single_options} multiple value={["1", "2"]} />
    </ExampleContainer>

    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Multiple clear hovered" theme="light" level={4} />
      <DxcSelect label="Multiple select" options={single_options} multiple value={["1", "2"]} />
    </ExampleContainer>

    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Multiple clear actived" theme="light" level={4} />
      <DxcSelect label="Multiple select" options={single_options} multiple value={["1", "2"]} />
    </ExampleContainer>
    <>
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
    </>
    <>
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
    </>
    <ExampleContainer>
      <Title title="Ellipsis" theme="light" level={4} />
      <Title title="Multiple selection with ellipsis" theme="light" level={4} />
      <DxcSelect label="Label" options={single_options} multiple value={["1", "2", "3", "4"]} />
      <Title title="Value with ellipsis" theme="light" level={4} />
      <DxcSelect label="Label" options={optionsWithEllipsisMedium} value="1" size="medium" />
      <Title title="Option with ellipsis" theme="light" level={4} />
      <DxcSelect label="Label" options={optionsWithEllipsisMedium} value="1" size="medium" />
    </ExampleContainer>
  </>
);
export const Chromatic = Select.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[25]);
};
const DefaultSelect = () => (
  <ExampleContainer>
    <Title title="Default select" theme="light" level={4} />
    <DxcSelect label="Select label" options={single_options} value="1" placeholder="Choose an option" />
  </ExampleContainer>
);
const SearchableSelect = () => (
  <ExampleContainer>
    <Title title="Searchable select" theme="light" level={4} />
    <DxcSelect label="Select Label" searchable options={single_options} placeholder="Choose an option" />
  </ExampleContainer>
);
const MultipleSelect = () => (
  <>
    <ExampleContainer>
      <Title title="Multiple select" theme="light" level={4} />
      <DxcSelect
        label="Select label"
        options={single_options}
        value={["1", "4"]}
        multiple
        placeholder="Choose an option"
      />
    </ExampleContainer>
  </>
);
const DefaultGroupedOptionsSelect = () => (
  <ExampleContainer>
    <Title title="Grouped options simple select" theme="light" level={4} />
    <DxcSelect label="Label" options={group_options} value="9" placeholder="Choose an option" />
  </ExampleContainer>
);
const MultipleGroupedOptionsSelect = () => (
  <ExampleContainer>
    <Title title="Grouped options multiple select" theme="light" level={4} />
    <DxcSelect label="Label" options={group_options} value={["0", "2"]} multiple placeholder="Choose an option" />
  </ExampleContainer>
);
const RescaledIcons = () => (
  <ExampleContainer>
    <Title title="Rescaled icons displayed" theme="light" level={4} />
    <DxcSelect label="Label" options={url_options} value="facebook" placeholder="Choose an option" />
  </ExampleContainer>
);
const SelectWithIcons = () => (
  <ExampleContainer>
    <Title title="Normal icons displayed" theme="light" level={4} />
    <DxcSelect label="Label" options={icon_options} value="3" placeholder="Choose an option" />
  </ExampleContainer>
);
const SelectMultipleWithIcons = () => (
  <ExampleContainer>
    <Title title="Multiple select with icons" theme="light" level={4} />
    <DxcSelect label="Label" options={icon_options} multiple value={["1", "3"]} placeholder="Choose an option" />
  </ExampleContainer>
);
const MultipleGroupedOptionsSelectWithIcons = () => (
  <ExampleContainer>
    <Title title="Multiple grouped options with icons" theme="light" level={4} />
    <DxcSelect
      label="Label"
      options={icon_options_grouped}
      multiple
      value={["3", "2"]}
      placeholder="Choose an option"
    />
  </ExampleContainer>
);
const OnlyOneOptionHovered = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Hovered Option" theme="light" level={4} />
    <DxcSelect label="Hovered" options={one_option} placeholder="Choose an option" />
  </ExampleContainer>
);
const OnlyOneOptionFocused = () => (
  <ExampleContainer pseudoState="pseudo-focus">
    <Title title="Focused Option" theme="light" level={4} />
    <DxcSelect label="Focused" options={one_option} placeholder="Choose an option" />
  </ExampleContainer>
);
const OnlyOneOptionActived = () => (
  <ExampleContainer pseudoState="pseudo-active">
    <Title title="Actived Option" theme="light" level={4} />
    <DxcSelect label="Actived" options={one_option} placeholder="Choose an option" />
  </ExampleContainer>
);
const SelectedOptionHovered = () => (
  <ExampleContainer pseudoState="pseudo-hover">
    <Title title="Hovered Selected Option" theme="light" level={4} />
    <DxcSelect label="Hovered" value="1" options={one_option} placeholder="Choose an option" />
  </ExampleContainer>
);
const SelectedOptionActived = () => (
  <ExampleContainer pseudoState="pseudo-active">
    <Title title="Actived Selected Option" theme="light" level={4} />
    <DxcSelect label="Actived" value="1" options={one_option} placeholder="Choose an option" />
  </ExampleContainer>
);
export const OptionsDisplayed = DefaultSelect.bind({});
OptionsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};
export const Searchable = SearchableSelect.bind({});
Searchable.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("combobox"));
  await waitFor(async () => {
    userEvent.type(canvas.getByRole("combobox"), "r");
  });
};

export const GroupOptionsDisplayed = DefaultGroupedOptionsSelect.bind({});
GroupOptionsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const SelectMultipleOptionsDisplayed = MultipleSelect.bind({});
SelectMultipleOptionsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[0]);
};

export const SelectMultipleGroupedOptionsDisplayed = MultipleGroupedOptionsSelect.bind({});
SelectMultipleGroupedOptionsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};
export const SelectWithIconsDisplayed = SelectWithIcons.bind({});
SelectWithIconsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const SelectWithRescaledIconsDisplayed = RescaledIcons.bind({});
SelectWithRescaledIconsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};
export const SelectMultipleWithIconsDisplayed = SelectMultipleWithIcons.bind({});
SelectMultipleWithIconsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const SelectMultipleGroupedWithIconsDisplayed = MultipleGroupedOptionsSelectWithIcons.bind({});
SelectMultipleGroupedWithIconsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const OptionHovered = OnlyOneOptionHovered.bind({});
OptionHovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const OptionFocused = OnlyOneOptionFocused.bind({});
OptionFocused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
  await waitFor(async () => {
    fireEvent.keyDown(select, { key: "ArrowDown", code: "ArrowDown", keyCode: 40, charCode: 40 });
  });
};
export const OptionActived = OnlyOneOptionActived.bind({});
OptionActived.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};
export const OptionSelectedHovered = SelectedOptionHovered.bind({});
OptionSelectedHovered.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};
export const OptionSelectedActived = SelectedOptionActived.bind({});
OptionSelectedActived.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};
