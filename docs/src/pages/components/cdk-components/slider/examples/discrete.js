import { DxcSlider } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);
  const onChange = newValue => {
    changeValue(newValue);
  };

  return (
    <DxcSlider
      minValue={0}
      maxValue={50}
      showLimitsValues={true}
      value={value}
      name="input"
      step={5}
      marks={true}
      onChange={onChange}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSlider,
  useState
};

export default { code, scope };
