import { DxcSlider, DxcInset, DxcParagraph } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(0);
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
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
      <DxcParagraph>Current value: {value}</DxcParagraph>
    </DxcInset>
  );
}`;

const scope = {
  DxcSlider,
  DxcInset,
  DxcParagraph,
  useState,
};

export default { code, scope };
