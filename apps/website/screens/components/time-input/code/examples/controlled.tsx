import { DxcTimeInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcTimeInput
        label="Enter your time"
        value={value}
        onChange={newValue => setValue(newValue)}
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
