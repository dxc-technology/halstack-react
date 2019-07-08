import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import listIcon from "../../.storybook/public/run_icon_black.png";

import selectMD from "./readme.md";

import Select from "./Select";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";


const selectOptions = [
  {
    value: 1,
    label: "First Item",
    iconSrc: listIcon
  },
  {
    value: 2,
    label: "Second Item",
    iconSrc: listIcon
  },
  {
    value: 3,
    label: "Third Item",
    iconSrc: listIcon
  }
];

storiesOf("Form Components|Select", module).add(
  "Component",
  () => (
    <div>
      <h3>Light</h3>
      <div>
        <Select
          disabled={false}
          theme="light"
          name="selectName"
          label="Select Label"
          options={selectOptions}
          required={false}
          onChange={onChange}
          iconPosition="after"
        />
      </div>
      <p>Multiple</p>
      <div>
        <Select
          disabled={false}
          theme="light"
          multiple={true}
          name="selectName3"
          label="Select Multiple"
          options={selectOptions}
          required={false}
          onChange={onChange}
          iconPosition="after"
        />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <Select
          disabled={false}
          theme="dark"
          name="selectName2"
          label="Select Label Dark"
          options={selectOptions}
          required={false}
          onChange={onChange}
          iconPosition="before"
        />
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
    value: [
      {
        value: 1,
        label: "First Item",
        iconSrc: listIcon
      }
    ],
    disabled: false,
    theme: "light",
    name: "selectName",
    multiple: true,
    options: selectOptions,
    required: false,
    iconPosition: "after",
    label: "Select label"
  };

  return <ControlledStory {...props} />;
});
