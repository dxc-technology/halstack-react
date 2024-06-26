import { DxcSwitch, DxcInset } from "@repo/ui";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onChange = (newValue) => {
    changeChecked(newValue);
  };

  return (
    <DxcInset space="2rem">
      <DxcSwitch
        label="Wifi"
        checked={checked}
        onChange={onChange}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  useState,
};

export default { code, scope };
