import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs";
import logo from "../../.storybook/public/amazon.svg";

import inputTextMD from "./readme.md";
import InputText from "./InputText";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

const onBlur = action("onBlur");
onBlur.toString = () => "onBlurHandler";

const onClickIcon = action("onClickIcon");
onClickIcon.toString = () => "onClickIconHandler";

storiesOf("Form Components|Text", module).add(
  "Component",
  () => (
    <div>
      <h3>Light</h3>
      <div>
        <InputText
          disabled={false}
          label="Normal Input"
          error={false}
          value="Test Value"
          onChange={onChange}
          onBlur={onBlur}
          required={true}
          assistiveText="Assistive Text Here"
        />
        <InputText
          disabled={false}
          label="With Assistive Text"
          assistiveText="Assistive Text Here"
          error={true}
          onChange={onChange}
          onBlur={onBlur}
          required={true}
        />
        <InputText
          disabled={false}
          label="With Prefix text"
          prefix="Kg"
          onChange={onChange}
          onBlur={onBlur}
          assistiveText="Assistive Text Here"
        />
        <InputText disabled={true} label="With Sufix text" sufix="€" onChange={onChange} onBlur={onBlur} />
        <InputText
          disabled={true}
          label="With Prefix icon"
          prefixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={true}
          label="With Sufix icon"
          sufixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={false}
          label="With Sufix icon"
          sufixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={false}
          label="Multiple"
          multiple={true}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <InputText
          disabled={false}
          theme="dark"
          label="Normal Input"
          error={false}
          value="Test Value"
          onChange={onChange}
          onBlur={onBlur}
          required={true}
          assistiveText="Assistive Text Here"
        />
        <InputText
          disabled={false}
          theme="dark"
          label="With Assistive Text"
          assistiveText="Assistive Text Here"
          error={true}
          onChange={onChange}
          onBlur={onBlur}
          required={true}
        />
        <InputText
          disabled={false}
          theme="dark"
          label="With Prefix text"
          prefix="Kg"
          onChange={onChange}
          onBlur={onBlur}
          assistiveText="Assistive Text Here"
        />
        <InputText disabled={true} label="With Sufix text" sufix="€" theme="dark" onChange={onChange} onBlur={onBlur} />
        <InputText
          disabled={false}
          theme="dark"
          label="With Prefix icon"
          prefixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={false}
          theme="dark"
          label="With Sufix icon"
          sufixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={false}
          theme="dark"
          label="With Sufix icon"
          sufixIconSrc={logo}
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
        <InputText
          disabled={false}
          label="Multiple"
          multiple={true}
          sufix="€"
          prefix="Kg"
          theme="dark"
          onChange={onChange}
          onBlur={onBlur}
          onClickIcon={onClickIcon}
        />
      </div>
    </div>
  ),
  {
    notes: { markdown: inputTextMD }
  }
);
const knobProps = () => ({
  label: text("Label", "Test Label"),
  theme: select("Theme", { light: "light", dark: "dark" }, "light"),
  assistiveText: text("Assistive text", "Helper text"),
  disabled: boolean("Disabled", false),
  prefix: text("Prefix word", ""),
  sufix: text("Sufix word", ""),
  required: boolean("Required", false),
  error: boolean("Error", false)
});

storiesOf("Form Components|Text", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <InputText {...props} onChange={onChange} onBlur={onBlur} onClickIcon={onClickIcon} />
      </div>
    );
  },
  {
    notes: { markdown: inputTextMD }
  }
);
