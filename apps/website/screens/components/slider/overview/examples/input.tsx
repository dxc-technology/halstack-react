import { DxcSlider, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState(40);
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const onDragEnd = () => {};
  const onChangeInput = (newValue) => {
    changeValue(newValue);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcSlider
        label="Select a value"
        helperText="Helper text"
        minValue={0}
        maxValue={100}
        showLimitsValues
        value={value}
        showInput
        step={5}
        marks
        onChange={onChange}
        onDragEnd={onDragEnd}
        onChangeInput={onChangeInput}
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
