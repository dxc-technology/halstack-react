import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import switchMD from "./readme.md";

import Switch from "./Switch";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

storiesOf("Form Components|Switch", module).add(
  "Component",
  () => (
    <div>
      <h3>Light</h3>
      <div>
        <Switch checked={false} label="Switch component" labelPosition="after" theme="light" onChange={onChange} />
        <Switch checked={false} label="Label before" labelPosition="before" theme="light" onChange={onChange} />
        <Switch checked={false} label="Label after" labelPosition="after" theme="light" onChange={onChange} />
        <Switch
          checked={false}
          label="Disabled"
          labelPosition="after"
          theme="light"
          disabled={true}
          onChange={onChange}
        />
        <Switch
          checked={false}
          required={true}
          label="Required"
          labelPosition="after"
          theme="light"
          disabled={false}
          onChange={onChange}
        />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <div>
          <Switch checked={false} label="Switch component" labelPosition="after" theme="dark" onChange={onChange} />
          <Switch checked={false} label="Label before" labelPosition="before" theme="dark" onChange={onChange} />
          <Switch checked={false} label="Label after" labelPosition="after" theme="dark" onChange={onChange} />
          <Switch
            checked={false}
            label="Disabled"
            labelPosition="after"
            theme="dark"
            disabled={false}
            onChange={onChange}
          />
          <Switch
          checked={false}
          required={true}
          label="Required"
          labelPosition="after"
          theme="dark"
          disabled={false}
          onChange={onChange}
        />
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: switchMD }
  }
);

const knobProps = () => ({
  label: text("Label", "Switch"),
  disabled: boolean("Disabled", false),
  labelPosition: select("Label position", { before: "before", after: "after" }, "before"),
  theme: select("Theme", { light: "light", dark: "dark" }, "light"),
  disableRipple: boolean("disableRipple", false),
  required: boolean("Required", false)
});

storiesOf("Form Components|Switch", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Switch {...props} value={"TestValue"} onChange={onChange} />
      </div>
    );
  },
  {
    notes: { markdown: switchMD }
  }
);
