import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import amazon from "../../.storybook/public/amazon.svg";
import ebay from "../../.storybook/public/ebay.svg";
import apple from "../../.storybook/public/apple.svg";
import { boolean, select, text,object } from "@storybook/addon-knobs";

import selectMD from "./readme.md";

import Select from "./Select";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

const selectOptions = [
  {
    value: 1,
    label: "Amazon",
    iconSrc: amazon
  },
  {
    value: 2,
    label: "Ebay",
    iconSrc: ebay
  },
  {
    value: 3,
    label: "Apple",
    iconSrc: apple
  }
];
const selectOptionsWithoutIcon = [
  {
    value: 1,
    label: "Amazon"
  },
  {
    value: 2,
    label: "Ebay"
  },
  {
    value: 3,
    label: "Apple"
  }
];
const selectOptionsWithoutLabel = [
  {
    value: 1,
    label: "",
    iconSrc: amazon
  },
  {
    value: 2,
    label: "",
    iconSrc: ebay
  },
  {
    value: 3,
    label: "",
    iconSrc: apple
  }
];

storiesOf("Form Components|Select", module).add(
  "Component",
  () => (
    <div>
      <h2>Light</h2>
      <div>
        <Select
          disabled={false}
          theme="light"
          name="selectName"
          label="Select Label"
          options={selectOptionsWithoutIcon}
          required={false}
          onChange={onChange}
          iconPosition="before"
        />
      </div>
      <h4>Multiple</h4>
      <div>
        <Select
          disabled={false}
          theme="light"
          multiple={true}
          name="selectNameMultiple"
          label="Select Multiple"
          options={selectOptionsWithoutIcon}
          required={false}
          onChange={onChange}
          iconPosition="after"
        />
      </div>
      <h4>Only Icons</h4>
      <div>
        <Select
          disabled={false}
          theme="light"
          multiple={true}
          name="selectNameOnlyIcons"
          label="Only icons"
          options={selectOptionsWithoutLabel}
          required={false}
          onChange={onChange}
          iconPosition="before"
        />
      </div>
      <h2>Dark</h2>
      <div style={{ background: "black" }}>
        <Select
          disabled={false}
          theme="dark"
          name="selectNameDark"
          label="Select Label Dark"
          options={selectOptions}
          required={false}
          onChange={onChange}
          iconPosition="before"
        />

        <h4>Multiple</h4>
        <div>
          <Select
            disabled={false}
            theme="dark"
            multiple={true}
            name="selectNameMultipleDark"
            label="Select Multiple"
            options={selectOptions}
            required={false}
            onChange={onChange}
            iconPosition="after"
          />
        </div>
        <h4>Only Icons</h4>
      <div>
        <Select
          disabled={false}
          theme="dark"
          multiple={true}
          name="selectNameOnlyIcons"
          label="Only icons"
          options={selectOptionsWithoutLabel}
          required={false}
          onChange={onChange}
          iconPosition="before"
        />
      </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: selectMD }
  }
);

storiesOf("Form Components|Select", module).add("Controlled Component", () => {
  class ControlledStory extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: []
      };
    }

    onValueChange = value => this.setState({ value });

    render() {
      const props = {
        ...this.props,
        onChange: this.onValueChange,
        value: this.state.value
      };

      return <Select {...props} />;
    }
  }

  const props = {
    
    disabled: false,
    theme: "light",
    name: "selectName",
    multiple: true,
    options: selectOptions,
    required: false,
    iconPosition: "before",
    label: "Select label"
  };

  return <ControlledStory {...props} />;
});

const knobProps = () => ({
  label: text("label", "Test Select"),
  theme: select("theme", { light: "light", dark: "dark" }, "light"),
  disabled: boolean("disabled", false),
  required: boolean("required", false),
  iconPosition: select("icon poistion", { before: "before", after: "after" }, "before")
  // ,
  // multiple: boolean("multiple", false)
});

storiesOf("Form Components|Select", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Select {...props} options={selectOptions} onChange={onChange} />
      </div>
    );
  },
  {
    notes: { markdown: selectMD }
  }
);
