import { DxcSlider, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcSlider 
        helperText="Help message"
        label="Slider"
        marks
        maxValue={1}
        minValue={-1}
        onChange={onChange}
        showInput
        showLimitsValues
        step={0.1}
        value={value}
      />
      <span>Current value: {value}</span>
    </DxcInset>
  );
}`;

const scope = {
  DxcSlider,
  DxcInset,
  useState,
};

export default { code, scope };
