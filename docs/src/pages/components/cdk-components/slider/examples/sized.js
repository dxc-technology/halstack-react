import { DxcSlider } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);
  const onChange = newValue => {
    changeValue(newValue);
  };
  const onDragEnd = ()=> {};

  return (
    <DxcSlider
      label="Select a value"
      helperText="Helper text"
      minValue={0}
      maxValue={100}
      showLimitsValues={true}
      value={value}
      name="input"
      step={1}
      onChange={onChange}
      margin="medium"
      size="large"
    />
  );
}`;

const scope = {
  DxcSlider,
  useState,
};

export default { code, scope };
