import { DxcTimeInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTimeInput
        label="Enter your name"
        value={value}
        onChange={onChange}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTimeInput,
  DxcInset,
  useState,
};

export default { code, scope };
