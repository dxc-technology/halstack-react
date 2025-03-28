import { DxcSlider, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(45);
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="0.5rem">
        <DxcSlider
          label="Continuous"
          maxValue={100}
          minValue={0}
          onChange={onChange}
          showLimitsValues
          value={value}
        />
        <span>Current value: {value}</span>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSlider,
  DxcInset,
  DxcFlex,
  useState,
};

export default { code, scope };
