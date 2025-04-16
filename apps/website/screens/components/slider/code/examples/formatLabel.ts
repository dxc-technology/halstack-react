import { DxcSlider, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(25);
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const labelFormat = (value) => {
    return \`\${value}°C\`;
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcSlider
        label="Select a value"
        value={value}
        onChange={onChange}
        minValue={0}
        maxValue={100}
        showLimitsValues={true}
        labelFormatCallback={labelFormat}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSlider,
  DxcInset,
  useState,
};

export default { code, scope };
