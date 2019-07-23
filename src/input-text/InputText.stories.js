import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import logo from "../../.storybook/public/run_icon_black.png";

import inputTextMD from "./readme.md";
import InputText from "./InputText";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

const onClickIcon = action("onClickIcon");
onClickIcon.toString = () => "onClickIconHandler";

storiesOf("Form Components|Text", module).add(
  "Component",
  () => (
    <div>
      <h3>Light</h3>
    <InputText disabled={false} label="Example label" assistiveText="Helper text" sufixIconSrc={logo} onClickIcon={onClickIcon}/>
    </div>
  ),
  {
    notes: { markdown: inputTextMD }
  }
);

