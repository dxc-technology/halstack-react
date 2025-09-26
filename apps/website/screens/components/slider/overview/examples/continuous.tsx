import { DxcSlider, DxcInset, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(45);
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-s)">
        <DxcSlider
          label="Continuous"
          maxValue={100}
          minValue={0}
          onChange={onChange}
          showLimitsValues
          value={value}
        />
        <DxcParagraph>Current value: {value}</DxcParagraph>
      </DxcFlex>
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
