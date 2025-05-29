import { DxcCheckbox, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcCheckbox label="Of legal age" checked={checked} onChange={onChange} />
    </DxcInset>
  );
}`;

const scope = {
  DxcCheckbox,
  DxcInset,
  useState,
};

export default { code, scope };
