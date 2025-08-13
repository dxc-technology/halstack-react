import { userEvent, within } from "storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcDropdown from "./Dropdown";
import DropdownMenu from "./DropdownMenu";
import { Option } from "./types";
import { Meta, StoryObj } from "@storybook/react-vite";
import preview from "../../.storybook/preview";
import { disabledRules } from "../../test/accessibility/rules/specific/dropdown/disabledRules";

export default {
  title: "Dropdown",
  component: DxcDropdown,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...preview?.parameters?.a11y?.config?.rules,
          ...disabledRules.map((ruleId) => ({ id: ruleId, reviewOnFail: true })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcDropdown>;

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
const icons = [iconSVG, iconSVGLarge, "nutrition"];

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
    icon: "shopping_cart",
  },
];

const optionsIcon: any = options.map((op, i) => ({ ...op, icon: icons[i] }));

const Dropdown = () => (
  <>
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcDropdown label="Default" options={options} onSelectOption={() => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcDropdown label="Hovered" options={options} onSelectOption={() => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcDropdown label="Focused" options={options} onSelectOption={() => {}} />
    </ExampleContainer>
    <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
      <Title title="Active" theme="light" level={4} />
      <DxcDropdown label="Active" options={options} onSelectOption={() => {}} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcDropdown label="Disabled" options={options} onSelectOption={() => {}} disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Caret hidden" theme="light" level={4} />
      <DxcDropdown label="Caret hidden" options={options} onSelectOption={() => {}} caretHidden />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon before" theme="light" level={4} />
      <DxcDropdown label="Icon before" options={options} onSelectOption={() => {}} icon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon after" theme="light" level={4} />
      <DxcDropdown
        label="Icon after"
        options={options}
        onSelectOption={() => {}}
        icon="shopping_cart"
        iconPosition="after"
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Only icon" theme="light" level={4} />
      <DxcDropdown options={options} onSelectOption={() => {}} icon={iconSVG} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Only icon without caret" theme="light" level={4} />
      <DxcDropdown options={options} onSelectOption={() => {}} icon="menu" caretHidden />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large icon (SVG)" theme="light" level={4} />
      <DxcDropdown label="Large icon" options={options} onSelectOption={() => {}} icon={iconSVGLarge} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large icon (image)" theme="light" level={4} />
      <DxcDropdown label="Large icon" options={options} onSelectOption={() => {}} icon="menu" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled with icon" theme="light" level={4} />
      <DxcDropdown label="Disabled with icon" options={options} onSelectOption={() => {}} icon={iconSVG} disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Ellipsis" theme="light" level={4} />
      <DxcDropdown
        label="Very long text in dropdown button"
        options={options}
        onSelectOption={() => {}}
        icon={iconSVG}
        size="medium"
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcDropdown label="Xxsmall" options={options} onSelectOption={() => {}} icon={iconSVG} margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcDropdown label="Xsmall" options={options} onSelectOption={() => {}} icon={iconSVG} margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcDropdown label="Small" options={options} onSelectOption={() => {}} icon={iconSVG} margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcDropdown label="Medium" options={options} onSelectOption={() => {}} icon={iconSVG} margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcDropdown label="Large" options={options} onSelectOption={() => {}} icon={iconSVG} margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcDropdown label="Xlarge" options={options} onSelectOption={() => {}} icon={iconSVG} margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcDropdown label="Xxlarge" options={options} onSelectOption={() => {}} icon={iconSVG} margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcDropdown label="Small" options={options} onSelectOption={() => {}} icon={iconSVG} size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcDropdown label="Medium" options={options} onSelectOption={() => {}} icon={iconSVG} size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcDropdown label="Large" options={options} onSelectOption={() => {}} icon={iconSVG} size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FitContent" theme="light" level={4} />
      <DxcDropdown label="FitContent" options={options} onSelectOption={() => {}} icon={iconSVG} size="fitContent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent" theme="light" level={4} />
      <DxcDropdown label="FillParent" options={options} onSelectOption={() => {}} icon={iconSVG} size="fillParent" />
    </ExampleContainer>
    <ExampleContainer expanded>
      <Title title="Opened menu" theme="light" level={4} />
      <DxcDropdown label="Label" options={options} onSelectOption={() => {}} margin={{ top: "xxlarge" }} />
    </ExampleContainer>
  </>
);

const DropdownListStates = () => (
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
          zIndex: "130",
        }}
      >
        <DxcDropdown label="Select a platform" options={defaultOptions} onSelectOption={(option) => {}} size="medium" />
        <button style={{ zIndex: "1", width: "100px" }}>Submit</button>
      </div>
    </ExampleContainer>
    <Title title="Option states" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered option" theme="light" level={4} />
      <DropdownMenu
        id="x1"
        dropdownTriggerId="dtx1"
        iconsPosition="before"
        visualFocusIndex={-1}
        menuItemOnClick={() => {}}
        onKeyDown={() => {}}
        options={optionWithIcon}
        styles={{ width: 240 }}
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active option" theme="light" level={4} />
      <DropdownMenu
        id="x2"
        dropdownTriggerId="dtx2"
        iconsPosition="before"
        visualFocusIndex={-1}
        menuItemOnClick={() => {}}
        onKeyDown={() => {}}
        options={optionWithIcon}
        styles={{ width: 240 }}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Focused option" theme="light" level={4} />
      <DropdownMenu
        id="x3"
        dropdownTriggerId="dtx3"
        iconsPosition="before"
        visualFocusIndex={0}
        menuItemOnClick={() => {}}
        onKeyDown={() => {}}
        options={options}
        styles={{ width: 240 }}
      />
    </ExampleContainer>
    <Title title="Icons" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Before" theme="light" level={4} />
      <DropdownMenu
        id="x4"
        dropdownTriggerId="dtx4"
        iconsPosition="before"
        visualFocusIndex={-1}
        menuItemOnClick={() => {}}
        onKeyDown={() => {}}
        options={optionsIcon}
        styles={{ width: 240 }}
      />
      <Title title="After" theme="light" level={4} />
      <DropdownMenu
        id="x5"
        dropdownTriggerId="dtx5"
        iconsPosition="after"
        visualFocusIndex={-1}
        menuItemOnClick={() => {}}
        onKeyDown={() => {}}
        options={optionsIcon}
        styles={{ width: 240 }}
      />
    </ExampleContainer>
  </>
);

const TooltipTitle = () => (
  <ExampleContainer expanded>
    <Title title="Tooltip" theme="light" level={3} />
    <DxcDropdown
      title="Show options"
      options={options}
      onSelectOption={() => {}}
      icon="menu"
      caretHidden
      margin="large"
    />
  </ExampleContainer>
);

type Story = StoryObj<typeof DxcDropdown>;

export const Chromatic: Story = {
  render: Dropdown,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttonList = await canvas.findAllByRole("button");
    const lastButton = buttonList[buttonList.length - 1];
    lastButton != null && (await userEvent.click(lastButton));
  },
};

export const MenuStates: Story = {
  render: DropdownListStates,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdownTrigger = (await canvas.findAllByRole("button"))[0];
    dropdownTrigger != null && (await userEvent.click(dropdownTrigger));
  },
};

export const MenuTooltip: Story = {
  render: TooltipTitle,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(await canvas.findByRole("button"));
  },
};
