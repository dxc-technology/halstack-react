import { DxcRadio, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onClick = (newValue) => {
    changeChecked(newValue);
  };

  return (
    <DxcInset space="large">
      <DxcRadio checked={checked} label="Controlled" onClick={onClick} />
    </DxcInset>
  );
}`;

const scope = {
  DxcRadio,
  DxcInset,
  useState,
};

export default { code, scope };
