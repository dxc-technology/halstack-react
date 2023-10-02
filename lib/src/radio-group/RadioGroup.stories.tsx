import React from "react";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcRadioGroup from "./RadioGroup";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Radio Group",
  component: DxcRadioGroup,
};

const single_option = [{ label: "Option A", value: "A" }];

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
];

const single_disabled_options = [{ label: "Option A", value: "A", disabled: true }];

const opinionatedTheme = {
  radioGroup: {
    baseColor: "#0086e6",
    fontColor: "#000000",
  },
};

export const Chromatic = () => (
  <>
    <Title title="Radio input states" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={single_option} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={single_disabled_options} defaultValue="A" />
    </ExampleContainer>
    <Title title="Readonly radio input sub-states" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={single_option} defaultValue="A" readOnly />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={single_option} defaultValue="A" readOnly />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={single_option} defaultValue="A" readOnly />
    </ExampleContainer>
    <Title title="Error radio input sub-states" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <DxcRadioGroup
        label="Label"
        helperText="Helper text"
        options={single_option}
        defaultValue="A"
        error="Error message"
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcRadioGroup
        label="Label"
        helperText="Helper text"
        options={single_option}
        defaultValue="A"
        readOnly
        error="Error message"
      />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcRadioGroup
        label="Label"
        helperText="Helper text"
        options={single_option}
        defaultValue="A"
        readOnly
        error="Error message"
      />
    </ExampleContainer>
    <Title title="Variants" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Column" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Row" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Optional" theme="light" level={4} />
      <DxcRadioGroup label="Label" optional helperText="Helper text" options={options} stacking="row" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcRadioGroup label="Label" helperText="Helper text" options={options} disabled />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Readonly" theme="light" level={4} />
      <DxcRadioGroup label="Label" readOnly helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error space reserved" theme="light" level={4} />
      <DxcRadioGroup label="Label" error="" helperText="Helper text" options={options} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Error" theme="light" level={4} />
      <DxcRadioGroup label="Label" error="Error message" helperText="Helper text" options={options} />
    </ExampleContainer>
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={single_option} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={single_option} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={single_option} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" helperText="Helper text" defaultValue="A" options={single_option} />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" helperText="Helper text" options={single_disabled_options} defaultValue="A" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Readonly enabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" options={single_option} defaultValue="A" readOnly />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Readonly hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" options={single_option} defaultValue="A" readOnly />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Readonly active" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" options={single_option} defaultValue="A" readOnly />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Readonly focused" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" options={single_option} defaultValue="A" readOnly />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Enabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" options={single_option} defaultValue="A" error="Error message" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" options={single_option} defaultValue="A" error="Error message" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" options={single_option} defaultValue="A" error="Error message" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" options={single_option} defaultValue="A" error="Error message" />
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcRadioGroup label="Label" helperText="Helper text" options={options} disabled defaultValue="A" />
      </HalstackProvider>
    </ExampleContainer>
  </>
);
