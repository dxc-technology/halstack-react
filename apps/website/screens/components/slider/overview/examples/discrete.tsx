import { DxcSlider, DxcInset, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(40);
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcSlider
        label="Discrete"
        marks
        maxValue={100}
        minValue={0}
        onChange={onChange}
        showLimitsValues
        step={10}
        value={value}
      />
      <DxcParagraph>Current value: {value}</DxcParagraph>
    </DxcInset>
  );
}`;

const scope = {
  DxcSlider,
  DxcInset,
  DxcFlex,
  DxcParagraph,
  useState,
};

export default { code, scope };
