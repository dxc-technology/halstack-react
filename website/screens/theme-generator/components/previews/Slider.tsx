import React, { useState } from "react";
import { DxcSlider } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import ExamplesContainer from "./ExamplesContainer";

const Slider = () => {
  const [value, changeValue] = useState(0);
  const onChange = (newValue: number) => {
    changeValue(newValue);
  };

  return (
    <ExamplesContainer>
      <Mode text="Default">
        <DxcSlider
          label="Select a value"
          helperText="Helper text"
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          name="input"
          step={1}
        />
      </Mode>
      <Mode text="Disabled">
        <DxcSlider
          label="Select a value"
          helperText="Helper text"
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          disabled
          marks={true}
          name="input"
          step={10}
        />
      </Mode>
      <Mode text="With marks">
        <DxcSlider
          label="Select a value"
          helperText="Helper text"
          minValue={0}
          maxValue={100}
          showLimitsValues={true}
          name="input"
          step={5}
          marks={true}
        />
      </Mode>
      <Mode text="With input">
        <DxcSlider
          label="Select a value"
          helperText="Helper text"
          minValue={0}
          maxValue={50}
          showLimitsValues={true}
          value={value}
          showInput={true}
          name="input"
          step={5}
          marks={true}
          onChange={onChange}
        />
      </Mode>
    </ExamplesContainer>
  );
};

export default Slider;
