import { DxcSlider, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(25);
  const onChange = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcSlider
        label="Select a value"
        value={value}
        onChange={onChange}
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
