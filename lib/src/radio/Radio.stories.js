import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import radioMD from "./readme.md";

import Radio from "./Radio";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

storiesOf("Form Components|Radio", module).add(
  "Component",
  () => (
    <div>
      <h3>Light</h3>
      <div>
        <Radio
          checked={false}
          theme="light"
          value="TestValue"
          label="Enable Radio"
          labelPosition="after"
          onChange={onChange}
          disabled={false}
          required={true}
        />
        <Radio
          checked={false}
          theme="light"
          value="TestValue"
          label="Label before"
          labelPosition="before"
          onChange={onChange}
          disabled={false}
        />
        <Radio
          checked={false}
          theme="light"
          value="TestValue"
          label="Label after"
          labelPosition="after"
          onChange={onChange}
          disabled={false}
        />
        <Radio
          checked={true}
          theme="light"
          value="TestValue"
          label="Selected Radio"
          labelPosition="before"
          onChange={onChange}
          disabled={false}
        />
        <Radio
          checked={false}
          theme="light"
          value="TestValue"
          label="Disabled Radio"
          labelPosition="before"
          onChange={onChange}
          disabled={true}
        />

        <Radio
          checked={true}
          theme="light"
          value="TestValue"
          label="Disabled Selected Radio"
          labelPosition="before"
          onChange={onChange}
          disabled={true}
        />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <Radio
          checked={false}
          theme="dark"
          value="TestValue"
          label="Enable Radio"
          labelPosition="after"
          onChange={onChange}
          disabled={false}
        />
        <Radio
          checked={false}
          theme="dark"
          value="TestValue"
          label="Label before"
          labelPosition="before"
          onChange={onChange}
          disabled={false}
          required={true}
        />
        <Radio
          checked={false}
          theme="dark"
          value="TestValue"
          label="Label after"
          labelPosition="after"
          onChange={onChange}
          disabled={false}
        />
        <Radio
          checked={true}
          theme="dark"
          value="TestValue"
          label="Selected Radio"
          labelPosition="before"
          onChange={onChange}
          disabled={false}
        />
        <Radio
          checked={false}
          theme="dark"
          value="TestValue"
          label="Disabled Radio"
          labelPosition="before"
          onChange={onChange}
          disabled={true}
        />

        <Radio
          checked={true}
          theme="dark"
          value="TestValue"
          label="Disabled Selected Radio"
          labelPosition="before"
          onChange={onChange}
          disabled={true}
        />
      </div>
    </div>
  ),
  {
    notes: { markdown: radioMD }
  }
);

const knobProps = () => ({
  label: text("Label", "Test Checkbox"),
  disabled: boolean("Disabled", false),
  labelPosition: select("Label position", { before: "before", after: "after" }, "before"),
  theme: select("Theme", { light: "light", dark: "dark" }, "light"),
  disableRipple: boolean("disableRipple", false),
  required: boolean("Required", false)
});

storiesOf("Form Components|Radio", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Radio {...props} value="TestValue" onChange={onChange} />
      </div>
    );
  },
  {
    notes: { markdown: radioMD }
  }
);
