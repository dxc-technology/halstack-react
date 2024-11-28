import { userEvent, within } from "@storybook/test";
import { ThemeProvider } from "styled-components";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import preview from "../../.storybook/preview";
import disabledRules from "../../test/accessibility/rules/specific/select/disabledRules";
import DxcFlex from "../flex/Flex";
import { HalstackProvider } from "../HalstackContext";
import useTheme from "../useTheme";
import Listbox from "./Listbox";
import DxcSelect from "./Select";

export default {
  title: "Select",
  component: DxcSelect,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...disabledRules.map((ruleId) => ({
            id: ruleId,
            reviewOnFail: true,
          })),
          ...(preview?.parameters?.a11y?.config?.rules || []),
        ],
      },
    },
  },
};

const oneOption = [{ label: "Option 01", value: "1" }];

const singleOptions = [
  { label: "Option 01", value: "1" },
  { label: "Option 02", value: "2" },
  { label: "Option 03", value: "3" },
  { label: "Option 04", value: "4" },
];

const groupOptions = [
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

const iconOptionsGroupedMaterial = [
  {
    label: "Group 001",
    options: [
      {
        label: "3G Mobile",
        value: "1",
        icon: "3g_mobiledata",
      },
    ],
  },
  {
    label: "Group 002",
    options: [
      {
        label: "Ethernet",
        value: "2",
        icon: "settings_ethernet",
      },
    ],
  },
  {
    label: "Group 003",
    options: [
      {
        label: "Wi-fi",
        value: "3",
        icon: "wifi",
      },
      {
        label: "Settings backup restore (just for previous configuration)",
        value: "4",
        icon: "settings_backup_restore",
      },
    ],
  },
];

const iconOptions = [
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

const optionsMaterial = [
  {
    label: "Transport",
    options: [
      {
        label: "Electric Car",
        value: "car",
        icon: "electric_car",
      },
      {
        label: "Motorcycle",
        value: "motorcycle",
        icon: "Motorcycle",
      },
      {
        label: "Train",
        value: "train",
        icon: "train",
      },
      {
        label: "Bike",
        value: "bike",
        icon: "pedal_bike",
      },
    ],
  },
  {
    label: "Entertainment",
    options: [
      {
        label: "Movie",
        value: "movie",
        icon: "movie",
      },
      {
        label: "Music",
        value: "music",
        icon: "music_note",
      },
      {
        label: "Games",
        value: "games",
        icon: "joystick",
      },
    ],
  },
];

const optionsWithEllipsis = [
  { label: "Optiond1234567890123456789012345678901234123123", value: "1" },
  { label: "Optiond123456789012345678901234567890123451231231", value: "2" },
  { label: "Option 03111111111111111111111111111122222222", value: "3" },
];

const opinionatedTheme = {
  select: {
    selectedOptionBackgroundColor: "#fabada",
    fontColor: "#333",
    optionFontColor: "#a46ede",
    hoverBorderColor: "#0095ff",
  },
};

const Select = () => (
  <>
    <Title title="States" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcSelect label="Hovered" options={singleOptions} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus-within">
      <Title title="Focused" theme="light" level={4} />
      <DxcSelect label="Focused" options={singleOptions} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcSelect label="Disabled" placeholder="Placeholder" disabled options={singleOptions} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled with value" theme="light" level={4} />
      <DxcSelect label="Disabled with value" disabled options={singleOptions} defaultValue="1" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcSelect
        label="Label"
        options={singleOptions}
        error="Error message."
        helperText="Helper text"
        placeholder="Placeholder"
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered error" theme="light" level={4} />
      <DxcSelect
        label="Label"
        options={singleOptions}
        error="Error message."
        helperText="Helper text"
        placeholder="Placeholder"
      />
    </ExampleContainer>
    <Title title="Anatomy" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Label, placeholder and helper text" theme="light" level={4} />
      <DxcSelect label="Label" options={singleOptions} helperText="Helper text" placeholder="Placeholder" />
    </ExampleContainer>
    <Title title="Variants" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Simple selection" theme="light" level={4} />
      <DxcSelect label="Simple selection" searchable options={singleOptions} defaultValue="2" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Multiple selection" theme="light" level={4} />
      <DxcSelect label="Multiple select" searchable options={singleOptions} multiple defaultValue={["1", "2"]} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Multiple clear hovered" theme="light" level={4} />
      <DxcSelect label="Multiple select" options={singleOptions} multiple defaultValue={["1", "2"]} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Multiple clear actived" theme="light" level={4} />
      <DxcSelect label="Multiple select" options={singleOptions} multiple defaultValue={["1", "2"]} />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcSelect label="Small" options={singleOptions} size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcSelect label="Medium" options={singleOptions} size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcSelect label="Large" options={singleOptions} size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Fillparent size" theme="light" level={4} />
      <DxcSelect label="Fillparent" options={singleOptions} size="fillParent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Different sizes inside a flex" theme="light" level={4} />
      <DxcFlex justifyContent="space-between" gap="1rem">
        <DxcSelect label="fillParent" size="fillParent" options={singleOptions} />
        <DxcSelect label="medium" size="medium" options={singleOptions} />
        <DxcSelect label="large" size="large" options={singleOptions} />
      </DxcFlex>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="xxsmall margin" theme="light" level={4} />
      <DxcSelect label="xxSmall" options={singleOptions} margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xsmall margin" theme="light" level={4} />
      <DxcSelect label="xSmall" options={singleOptions} margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="small margin" theme="light" level={4} />
      <DxcSelect label="Small" options={singleOptions} margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="medium margin" theme="light" level={4} />
      <DxcSelect label="Medium" options={singleOptions} margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="large margin" theme="light" level={4} />
      <DxcSelect label="Large" options={singleOptions} margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xlarge margin" theme="light" level={4} />
      <DxcSelect label="xLarge" options={singleOptions} margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="xxlarge margin" theme="light" level={4} />
      <DxcSelect label="xxLarge" options={singleOptions} margin="xxlarge" />
    </ExampleContainer>
    <ExampleContainer expanded>
      <Title title="Ellipsis" theme="light" level={2} />
      <Title title="Multiple selection with ellipsis" theme="light" level={4} />
      <DxcSelect label="Label" options={singleOptions} multiple defaultValue={["1", "2", "3", "4"]} />
      <Title title="Value with ellipsis" theme="light" level={4} />
      <DxcSelect label="Label" options={optionsWithEllipsis} defaultValue="1" />
      <Title title="Options with ellipsis" theme="light" level={4} />
      <DxcSelect
        label="Label"
        placeholder="Choose an option"
        defaultValue="1"
        options={optionsWithEllipsis}
        margin={{ top: "xxlarge" }}
      />
    </ExampleContainer>
  </>
);

const Opinionated = () => (
  <>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Default" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSelect label="Hovered" helperText="Helper text" placeholder="Placeholder" options={singleOptions} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSelect
          label="Hovered"
          helperText="Helper text"
          options={singleOptions}
          multiple
          defaultValue={["1", "2"]}
        />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover" expanded>
      <Title title="List opened" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcSelect label="Hovered" helperText="Helper text" options={iconOptionsGroupedMaterial} defaultValue="1" />
      </HalstackProvider>
    </ExampleContainer>
  </>
);

const SelectListbox = () => {
  const colorsTheme = useTheme();

  return (
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
          <DxcSelect label="Label" options={singleOptions} optional placeholder="Choose an option" />
          <button type="button" style={{ zIndex: "1", width: "100px" }}>
            Submit
          </button>
        </div>
      </ExampleContainer>
      <Title title="Listbox option states" theme="light" level={3} />
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hovered option" theme="light" level={4} />
        <Listbox
          id="x8"
          currentValue=""
          options={oneOption}
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
          id="x9"
          currentValue=""
          options={oneOption}
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
          id="x10"
          currentValue=""
          options={oneOption}
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
          id="x11"
          currentValue="1"
          options={singleOptions}
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
          id="x12"
          currentValue="2"
          options={singleOptions}
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
          id="x13"
          currentValue="3"
          options={iconOptions}
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
        <Title title="Grouped icons (Material Symbols)" theme="light" level={4} />
        <Listbox
          id="x14"
          currentValue="4"
          options={iconOptionsGroupedMaterial}
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
        <Title title="Grouped icons (Material)" theme="light" level={4} />
        <Listbox
          id="x15"
          currentValue={["car", "motorcycle", "train"]}
          options={optionsMaterial}
          visualFocusIndex={-1}
          lastOptionIndex={6}
          multiple
          optional={false}
          optionalItem={{ label: "Empty", value: "" }}
          searchable={false}
          handleOptionOnClick={() => {}}
          styles={{ width: 360 }}
        />
      </ExampleContainer>
    </ThemeProvider>
  );
};

const SearchableSelect = () => (
  <ExampleContainer expanded>
    <Title title="Searchable select" theme="light" level={4} />
    <DxcSelect label="Select Label" searchable options={singleOptions} placeholder="Choose an option" />
  </ExampleContainer>
);

const SearchValue = () => (
  <ExampleContainer expanded>
    <Title title="Searchable select with value" theme="light" level={4} />
    <DxcSelect
      label="Select Label"
      searchable
      defaultValue="1"
      options={singleOptions}
      placeholder="Choose an option"
    />
  </ExampleContainer>
);

const MultipleSelect = () => (
  <ExampleContainer expanded>
    <Title title="Multiple select" theme="light" level={4} />
    <DxcSelect
      label="Select label"
      options={singleOptions}
      defaultValue={["1", "4"]}
      multiple
      placeholder="Choose an option"
    />
  </ExampleContainer>
);

const DefaultGroupedOptionsSelect = () => (
  <ExampleContainer expanded>
    <Title title="Grouped options simple select" theme="light" level={4} />
    <DxcSelect label="Label" options={groupOptions} defaultValue="9" placeholder="Choose an option" />
  </ExampleContainer>
);

const DefaultGroupedOptionsSelectOpinionated = () => (
  <ExampleContainer expanded>
    <Title title="Grouped options simple select" theme="light" level={4} />
    <HalstackProvider theme={opinionatedTheme}>
      <DxcSelect label="Label" options={groupOptions} defaultValue="9" placeholder="Choose an option" />
    </HalstackProvider>
  </ExampleContainer>
);

const MultipleGroupedOptionsSelect = () => (
  <ExampleContainer expanded>
    <Title title="Grouped options multiple select" theme="light" level={4} />
    <DxcSelect label="Label" options={groupOptions} defaultValue={["0", "2"]} multiple placeholder="Choose an option" />
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
      options={singleOptions}
      placeholder="Choose an option"
    />
  </ExampleContainer>
);

const TooltipValue = () => (
  <ExampleContainer expanded>
    <Title title="Selected value(s) have tooltip when they overflow" theme="light" level={4} />
    <DxcSelect label="Label" options={singleOptions} multiple defaultValue={["1", "2", "3", "4"]} />
  </ExampleContainer>
);

const TooltipOption = () => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.select}>
      <ExampleContainer expanded>
        <Title title="List option has tooltip when it overflows" theme="light" level={4} />
        <Listbox
          id="x8"
          currentValue="1"
          options={optionsWithEllipsis}
          visualFocusIndex={-1}
          lastOptionIndex={2}
          multiple={false}
          optional={false}
          optionalItem={{ label: "Empty", value: "" }}
          searchable={false}
          handleOptionOnClick={() => {}}
          styles={{ width: 360 }}
        />
      </ExampleContainer>
    </ThemeProvider>
  );
};

const TooltipClear = () => (
  <ExampleContainer expanded>
    <Title title="Clear action tooltip" theme="light" level={4} />
    <DxcSelect label="Label" options={singleOptions} multiple defaultValue={["1", "2", "3", "4"]} />
  </ExampleContainer>
);

export const Chromatic = Select.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[24]);
};

export const OpinionatedTheme = Opinionated.bind({});
OpinionatedTheme.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getAllByRole("combobox")[2]);
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

export const SearchableWithValue = SearchValue.bind({});
SearchableWithValue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("combobox"));
};

export const MultipleSearchableWithValue = MultipleSearchable.bind({});
MultipleSearchableWithValue.play = async ({ canvasElement }) => {
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

export const MultipleGroupedOptionsDisplayed = MultipleGroupedOptionsSelect.bind({});
MultipleGroupedOptionsDisplayed.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const select = canvas.getByRole("combobox");
  await userEvent.click(select);
};

export const ValueWithEllipsisTooltip = TooltipValue.bind({});
ValueWithEllipsisTooltip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText("Option 01, Option 02, Option 03, Option 04"));
  await userEvent.hover(canvas.getByText("Option 01, Option 02, Option 03, Option 04"));
};

export const ListboxOptionWithEllipsisTooltip = TooltipOption.bind({});
ListboxOptionWithEllipsisTooltip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText("Optiond123456789012345678901234567890123451231231"));
  await userEvent.hover(canvas.getByText("Optiond123456789012345678901234567890123451231231"));
};

export const ClearActionTooltip = TooltipClear.bind({});
ClearActionTooltip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const clearSelectionButton = canvas.getByRole("button");
  await userEvent.hover(clearSelectionButton);
};

export const SearchableClearActionTooltip = SearchableSelect.bind({});
SearchableClearActionTooltip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByRole("combobox"), "r");
  const clearSelectionButton = canvas.getByRole("button");
  await userEvent.hover(clearSelectionButton);
};
