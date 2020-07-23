import { DxcSlider } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);
  const onChange = newValue => {
    changeValue(newValue)
  };

  return (
    <DxcSlider
      minValue={0}
      maxValue={100}
      value={value}
      onChange={onChange}
      showLimitsValues={true}
      name="input"
      step={1}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSlider,
  useState
};

export default { code, scope };
