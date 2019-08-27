import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import amazon from "../../.storybook/public/amazon.svg";
import { text, boolean, select } from "@storybook/addon-knobs";

import dropdownMD from "./readme.md";

import Dropdown from "./Dropdown";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

const optionsWithoutIcon = [
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

const optionsWithIcon = [
  {
    value: 1,
    label: "Amazon",
    iconSrc: amazon
  },
  {
    value: 2,
    label: "Ebay",
    iconSrc: amazon
  },
  {
    value: 3,
    label: "Apple",
    iconSrc: amazon
  }
];

const selectOption = (option) => {
  console.log(option);
}

storiesOf("Form Components|Dropdown", module).add(
  "Component",
  () => (
    <div>
      <div style={{ height: "200px", display: "flex"}}>
        <Dropdown 
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label="Basic dropdown"
          theme="light"
          mode={"basic"}
          optionsIconPosition="before">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label="Outlined dropdown"
          theme="light"
          mode="outlined"
          optionsIconPosition="after">
        </Dropdown>
        <Dropdown 
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          theme="light"
          mode={"basic"}
          optionsIconPosition="before">
        </Dropdown>
        <Dropdown 
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Outlined dropdown"
          theme="light"
          mode="outlined"
          optionsIconPosition="after">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label=""
          theme="light"
          mode="basic"
          caretHidden={true}
          optionsIconPosition="before">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label=""
          theme="light"
          mode="outlined"
          caretHidden={true}
          optionsIconPosition="after">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label=""
          theme="light"
          mode="basic"
          caretHidden={false}
          optionsIconPosition="before">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label=""
          theme="light"
          mode="outlined"
          caretHidden={false}
          optionsIconPosition="after">
        </Dropdown>
      </div>
      <div style={{ background: "black", display: "flex", height: "250px"}}>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label="Basic dropdown"
          theme="dark"
          mode="basic"
          optionsIconPosition="before">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label="Outlined dropdown"
          theme="dark"
          mode="outlined"
          optionsIconPosition="after">
        </Dropdown>
        <Dropdown 
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          theme="dark"
          mode="basic"
          optionsIconPosition="before">
        </Dropdown>
        <Dropdown 
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Outlined dropdown"
          theme="dark"
          mode="outlined"
          optionsIconPosition="after">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label=""
          theme="dark"
          mode="basic"
          caretHidden={true}
          optionsIconPosition="before">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label=""
          theme="dark"
          mode="outlined"
          caretHidden={true}
          optionsIconPosition="after">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label=""
          theme="dark"
          mode="basic"
          caretHidden={false}
          optionsIconPosition="before">
        </Dropdown>
        <Dropdown 
          options={optionsWithIcon}
          onSelectOption={selectOption}
          iconSrc={amazon}
          label=""
          theme="dark"
          mode="outlined"
          caretHidden={false}
          optionsIconPosition="after">
        </Dropdown>
      </div>
    </div>
  ),
  {
    notes: { markdown: dropdownMD }
  }
);

const knobProps = () => ({

  optionsIconPosition: select("Options Icon Position", { before: "before", after: "after" }, "before"),
  iconPosition: select("Icon Position", { before: "before", after: "after" }, "before"),
  label: text("Label", "Test Dropdown"),
  theme: select("Theme", { light: "light", dark: "dark" }, "light"),
  mode: select("Mode", { basic: "basic", outlined: "outlined" }, "basic"),
  caretHidden: boolean("Caret Hidden", false),
  disableRipple: boolean("Disable Ripple", false)
});


storiesOf("Form Components|Dropdown", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ paddingTop: "20px", height: "200px", background: (props.theme === "dark" && "black") || "transparent" }}>
        <Dropdown  {...props} iconSrc={amazon} options={optionsWithIcon} onSelectOption={selectOption}></Dropdown>
      </div>
    );
  },
  {
    notes: { markdown: dropdownMD }
  }
);
