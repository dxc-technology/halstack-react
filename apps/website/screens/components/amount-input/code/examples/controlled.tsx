import { DxcAmountInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAmountInput
        label="Enter your amount"
        value={value}
        onChange={({value}) => setValue(value)}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcAmountInput,
  DxcInset,
  useState,
};

export default { code, scope };
