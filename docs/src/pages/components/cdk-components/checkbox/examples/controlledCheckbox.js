import { DxcCheckbox } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [checked, changeChecked] = useState(false);
  const onChange = newValue => {
    changeChecked(newValue);
  };

  return (
    <DxcCheckbox
      checked={checked}
      label="Controlled"
      onChange={onChange}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };
