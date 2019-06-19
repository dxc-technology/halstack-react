import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";

import checkBoxMD from "./readme.md";

import Checkbox from "./Checkbox";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

storiesOf("Form Components|Checkbox", module).add(
  "Component",
  () => (
    <div>
      <h3>Light</h3>
      <div>
        <Checkbox checked={false} theme={"light"} value={"TestValue"} label={"Checkbox"} labelPosition={"after"} onChange={onChange}/>
        <Checkbox checked={false} theme={"light"} value={"TestValue"} label={"Label before"} labelPosition={"before"} onChange={onChange}/>
        <Checkbox checked={false} theme={"light"} value={"TestValue"} label={"Label after"} labelPosition={"after"} onChange={onChange} required/>
        <Checkbox checked={false} disabled={true} theme={"light"} value={"TestValue"} label={"Disabled unchecked"} labelPosition={"after"} onChange={onChange}/>
        <Checkbox checked={true} disabled={true} theme={"light"} value={"TestValue"} label={"Disabled checked"} labelPosition={"after"} onChange={onChange}/>
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <div>
        <Checkbox checked={false} theme={"dark"} value={"TestValue"} label={"Checkbox"} labelPosition={"after"} onChange={onChange} required/>
        <Checkbox checked={false} theme={"dark"} value={"TestValue"} label={"Label before"} labelPosition={"before"} onChange={onChange}/>
        <Checkbox checked={false} theme={"dark"} value={"TestValue"} label={"Label after"} labelPosition={"after"} onChange={onChange}/>
        <Checkbox checked={false} disabled={true} theme={"dark"} value={"TestValue"} label={"Disabled unchecked"} labelPosition={"after"} onChange={onChange}/>
        <Checkbox checked={true} disabled={true} theme={"dark"} value={"TestValue"} label={"Disabled checked"} labelPosition={"after"} onChange={onChange}/>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: checkBoxMD }
  }
);

const knobProps = () => ({
     label: text("Label", "Test Checkbox"),
     disabled: boolean("Disabled", false),
     labelPosition: select("Label position",{ before: "before", after: "after" }, "before"),
     theme: select("Theme", { light: "light", dark: "dark" }, "light"),
     disableRipple: boolean("disableRipple", false),
     required: boolean("Required", false)
  });

storiesOf("Form Components|Checkbox", module).add(
    "Knobs example",
    () => {
      const props = knobProps();
      return (
        <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Checkbox {...props}  value={"TestValue"} onChange={onChange}/>
        </div>
      );
    },
    {
        notes: { markdown: checkBoxMD }
    }
  );
