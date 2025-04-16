import { DxcTextInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value }) => {
    setValue(value);
  };
  
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcTextInput
        label="Enter your name"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextInput,
  DxcInset,
  useState,
};

export default { code, scope };
