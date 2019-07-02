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
    iconSrc:listIcon
  },
  {
    value: 2,
    label: "Second Item",
    iconSrc:listIcon
  },
  {
    value: 3,
    label: "Third Item",
    iconSrc:listIcon
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
    </div>
  ),
  {
    notes: { markdown: selectMD }
  }
);
