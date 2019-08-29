import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "../common/OpenSans.css";
import { text, boolean, select } from "@storybook/addon-knobs";

import dropdownMD from "./readme.md";

import DxcHeader from "./Header";
import DxcDropdown from "../dropdown/Dropdown";
import DxcSwitch from "../switch/Switch";

const selectOption = option => {
  console.log(option);
};

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

storiesOf("Form Components|Header", module).add(
  "Component",
  () => (
    <div style={{ background: "lightgrey" }}>
      <div>
        <div style={{ marginBottom: "20px" }}>
          <DxcHeader theme="light" mode="basic">
            <DxcDropdown theme={"light"} onSelectOption={selectOption} options={optionsWithoutIcon} />
            <DxcDropdown
              theme={"light"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
            />
            <DxcSwitch
              checked={false}
              label="Switch component"
              labelPosition="after"
              theme="dark"
              onChange={onChange}
            />
          </DxcHeader>
        </div>
        <div>
          <DxcHeader theme="light" mode="outlined">
            <DxcDropdown theme={"light"} onSelectOption={selectOption} options={optionsWithoutIcon} mode="outlined" />
            <DxcDropdown
              theme={"light"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
              mode="outlined"
            />
            <DxcSwitch
              checked={false}
              label="Switch component"
              labelPosition="after"
              theme="light"
              onChange={onChange}
            />
          </DxcHeader>
        </div>
      </div>
      <div style={{ paddingTop: "20px", height: "200px" }}>
        <div>
          <DxcHeader theme="dark" mode="basic">
            <DxcDropdown theme={"dark"} onSelectOption={selectOption} options={optionsWithoutIcon} mode="basic" />
            <DxcDropdown
              theme={"dark"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
              mode="basic"
            />
            <DxcSwitch
              checked={false}
              label="Switch component"
              labelPosition="after"
              theme="light"
              onChange={onChange}
            />
          </DxcHeader>
        </div>
        <div style={{ marginTop: "20px" }}>
          <DxcHeader theme="dark" mode="outlined">
            <DxcDropdown theme={"dark"} onSelectOption={selectOption} options={optionsWithoutIcon} mode="outlined" />
            <DxcDropdown
              theme={"dark"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
              mode="outlined"
            />
            <DxcSwitch
              checked={false}
              label="Switch component"
              labelPosition="after"
              theme="dark"
              onChange={onChange}
            />
          </DxcHeader>
        </div>
      </div>
    </div>
  ),
  {
    notes: { markdown: dropdownMD }
  }
);

const knobProps = () => ({
  theme: select("Theme", { light: "light", dark: "dark" }, "light"),
  mode: select("Mode", { basic: "basic", outlined: "outlined" }, "basic")
});

storiesOf("Form Components|Header", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div
        style={{
          height: "250px",
          background: (props.theme === "dark" && "black") || "transparent"
        }}
      >
        <DxcHeader {...props}>
          <DxcDropdown
            theme={props.theme}
            mode={props.mode}
            onSelectOption={selectOption}
            options={optionsWithoutIcon}
            label="Dropdown"
          />
        </DxcHeader>
      </div>
    );
  },
  {
    notes: { markdown: dropdownMD }
  }
);
