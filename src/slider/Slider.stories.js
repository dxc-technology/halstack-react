import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { boolean, select, text, number } from "@storybook/addon-knobs";

import SliderMD from "./readme.md";

import Slider from "./Slider";

const onChange = action("onChange");
onChange.toString = () => "onChangeHandler";

const onDragEnd = action("onDragEnd");
onDragEnd.toString = () => "onDragEnd";

const onChangeInput = action("onChangeInput");
onChangeInput.toString = () => "onChangeInputHandler";

storiesOf("Form Components|Slider", module).add(
  "Component",
  () => {
    return (
      <div>
        <h3>Light</h3>
        <div>
          <Slider
            minValue={0}
            maxValue={100}
            showLimitsValues={true}
            showInput={true}
            name="input"
            disabled={false}
            required={true}
            theme="light"
            step={1}
            marks={false}
            onChange={onChange}
            onDragEnd={onDragEnd}
            onChangeInput={onChangeInput}
          />
        </div>
      </div>
    );
  },
  {
    notes: { markdown: SliderMD }
  }
);

const knobProps = () => ({
  minValue: number("minvalue", 0),
  maxValue: number("maxvalue", 100),
  showLimitsValues: boolean("showLimits", true),
  showInput: boolean("showInput", true),
  disabled: boolean("disabled", false),
  theme: select("theme", { light: "light", dark: "dark" }, "light"),
  step: number("step", 1),
  marks: boolean("marks", false)
});

storiesOf("Form Components|Slider", module).add(
  "Knobs example",
  () => {
    const props = knobProps();
    return (
      <div style={{ background: (props.theme === "dark" && "black") || "transparent" }}>
        <Slider
          {...props}
          onChange={onChange}
          onDragEnd={onDragEnd}
          onChangeInput={onChangeInput}
          name="sliderImput"
        />
      </div>
    );
  },
  {
    notes: { markdown: SliderMD }
  }
);
